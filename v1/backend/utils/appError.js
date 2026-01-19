import TextMsg from '../config/msg.js';

class AppError extends Error {
    constructor(message = TextMsg.serverError(), statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;
        this.name = 'AppError';
        Error.captureStackTrace(this, this.constructor);
    }

    validation(item) {
        const error = new AppError(TextMsg.invalid(item), 400);
        error.name = 'ValidationError';
        return error;
    }

    authFailed() {
        const error = new AppError(TextMsg.authFailed(), 401);
        error.name = 'AuthenticationError';
        return error;
    }

    unauthenticated() {
        const error = new AppError(TextMsg.unauthenticated(), 401);
        error.name = 'UnauthenticatedError';
        return error;
    }

    forbidden() {
        const error = new AppError(TextMsg.forbidden(), 403);
        error.name = 'ForbiddenError';
        return error;
    }

    notFound(item) {
        const error = new AppError(TextMsg.notFound(item), 404);
        error.name = 'NotFoundError';
        return error;
    }

    conflict(item) {
        const error = new AppError(TextMsg.exists(item), 409);
        error.name = 'ConflictError';
        return error;
    }
}

export default new AppError();