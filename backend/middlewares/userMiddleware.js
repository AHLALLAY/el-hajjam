import AppError from "../utils/appError.js";
import check from "../utils/userUtils.js";

export function isAdminOrHairdresser(req, res, next) {
  if (!req.user) return next(AppError.forbidden());
  if (req.user.role === 'admin' || req.user.role === 'coiffeur') return next();
  return next(AppError.forbidden());
}

export const isAdmin = check("role", "admin");
export const isHairdresser = check("role", "coiffeur");
export const isActif = check("status", "actif");
export const isInactif = check("status", "inactif");
export const isSuspended = check("status", "suspendu");