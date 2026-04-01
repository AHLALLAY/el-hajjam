// --- Mocks (doivent précéder l’import d’authService qui les utilise) ---
vi.mock("../../models/user.js", () => ({
  default: { findOne: vi.fn() },
}));

vi.mock("bcryptjs", () => ({
  default: { compare: vi.fn() },
}));

vi.mock("jsonwebtoken", () => ({
  default: { sign: vi.fn() },
}));

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/user.js";
import authService from "../../services/authService.js";

// authService.login appelle validation : tous les cas email / mot de passe passent par ce flux (pas de doublon avec des tests directs sur validation.js).
// ---------------------------------------------------------------------------
// authService.login (User / bcrypt / jwt mockés)
// ---------------------------------------------------------------------------
const validEmail = "test@gmail.com";
const validPassword = "ABCde@00@";

function mockUserDoc(overrides = {}) {
  return {
    _id: "507f1f77bcf86cd799439011",
    firstName: "Samir",
    lastName: "Lhajjam",
    email: validEmail,
    phone: "0690231490",
    cin: "BD09123",
    role: "coiffeur",
    status: "actif",
    password: "hash_en_base",
    ...overrides,
  };
}

beforeEach(() => {
  vi.clearAllMocks();
  process.env.JWT_SECRET = "mon-secret-de-test";
  process.env.JWT_EXPIRES_IN = "1h";
});

describe("authService.login", () => {
  it("rejette si email manquant", async () => {
    await loginShouldThrow("", validPassword, {
      statusCode: 400,
      name: "ValidationError",
    });
  });

  it("rejette si mot de passe manquant", async () => {
    await loginShouldThrow(validEmail, "", {
      statusCode: 400,
      name: "ValidationError",
    });
  });

  // Trois exemples d’email invalide : (1) @ mais pas de "." dans le domaine (2) "." sans @ (3) ni @ ni "."
  it.each([
    ["testEmail@gmailcom", "domaine sans point après @"],
    ["testEmailgmail.com", "sans @"],
    ["testEmailgmailcom", "sans @ ni point dans le domaine"],
  ])(
    "rejette si l'email est invalide (%s — %s)",
    async (invalidEmail, _label) => {
      await loginShouldThrow(invalidEmail, validPassword, {
        statusCode: 400,
        name: "ValidationError",
      });
    }
  );

  it.each([
    ["12345678", "que des chiffres"],
    ["abcdefgh", "que des minuscules"],
    ["ABCDEFGH", "que des majuscules"],
    ["@@@@@@@@", "que des symboles"],
  ])(
    "rejette si le mot de passe ne respecte pas la règle (%s — %s)",
    async (password, _label) => {
      await loginShouldThrow(validEmail, password, {
        statusCode: 400,
        name: "ValidationError",
      });
    }
  );

  it("rejette si aucun utilisateur", async () => {
    User.findOne.mockReturnValue({
      select: vi.fn().mockResolvedValue(null),
    });
    await loginShouldThrow(validEmail, validPassword, {
      statusCode: 401,
      name: "AuthenticationError",
    });
  });

  it("rejette si le compte est suspendu", async () => {
    User.findOne.mockReturnValue({
      select: vi.fn().mockResolvedValue(mockUserDoc({ status: "suspendu" })),
    });
    await loginShouldThrow(validEmail, validPassword, {
      statusCode: 403,
      name: "ForbiddenError",
    });
  });

  it("rejette si le mot de passe ne correspond pas", async () => {
    User.findOne.mockReturnValue({
      select: vi.fn().mockResolvedValue(mockUserDoc()),
    });
    bcrypt.compare.mockResolvedValue(false);
    await loginShouldThrow(validEmail, validPassword, {
      statusCode: 401,
      name: "AuthenticationError",
    });
  });

  it("retourne l'utilisateur et un token si tout est correct", async () => {
    const user = mockUserDoc();
    User.findOne.mockReturnValue({
      select: vi.fn().mockResolvedValue(user),
    });
    bcrypt.compare.mockResolvedValue(true);
    jwt.sign.mockReturnValue("jwt-factice");
    const result = await authService.login({
      email: validEmail,
      password: validPassword,
    });
    expect(result).toMatchObject({
      id: user._id,
      email: validEmail,
      role: "coiffeur",
      token: "jwt-factice",
    });
    expect(jwt.sign).toHaveBeenCalled();
  });
});

async function loginShouldThrow(email, password, expectedError) {
  await expect(authService.login({ email, password })).rejects.toMatchObject(expectedError);
}
