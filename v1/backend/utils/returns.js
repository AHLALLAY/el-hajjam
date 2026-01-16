export default function rr(res, status, success, message, data = null, erreur = null) {
    return res.status(status).json({
        success,
        message,
        data,
        erreur
    });
}