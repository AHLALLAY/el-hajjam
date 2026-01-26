export default function rr(res, status, success, message, data = null, error = null) {
    return res.status(status).json({
        success,
        message,
        data,
        error
    });
}