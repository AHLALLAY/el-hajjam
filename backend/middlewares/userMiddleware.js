import AppError from "../utils/appError.js";
import userUtils from "../utils/userUtils.js";

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

export const isAdmin = userUtils.check("role", "admin");
export const isHairdresser = userUtils.check("role", "coiffeur");
export const isActif = userUtils.check("status", "actif");
export const isInactif = userUtils.check("status", "inactif");
export const isSuspended = userUtils.check("status", "suspendu");