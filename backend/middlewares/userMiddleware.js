import AppError from "../utils/appError.js";

export function isAdminOrOwnHairdresser(req, res, next) {
  if (!req.user) return next(AppError.forbidden());
  if (req.user.role === 'admin') return next();
  if (req.user.role === 'coiffeur') {
    const requestedId = req.params.id;
    const ownId = req.user._id?.toString() ?? req.user.id;
    if (requestedId === ownId) return next();
  }
  return next(AppError.forbidden());
}

function check(field, value) {
  return (req, res, next) => {
    if (!req.user) return next(AppError.forbidden());
    if (req.user[field] === value) return next();
    return next(AppError.forbidden());
  };
}

export const isAdmin = check("role", "admin");
export const isHairdresser = check("role", "coiffeur");
export const isActif = check("status", "actif");
export const isInactif = check("status", "inactif");
export const isSuspended = check("status", "suspendu");