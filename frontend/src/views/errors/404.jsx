import { Link } from 'react-router-dom';

function NotFoundError() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-slate-700 p-6">
            <div className="w-32 h-32 shrink-0">
                <img src="/logo.jpg" alt="El-Hajjam" className="w-full h-full object-contain" />
            </div>
            <div className="text-center space-y-2">
                <p className="text-5xl font-bold text-yellow-500">404</p>
                <p className="text-slate-300 text-lg">Page introuvable</p>
            </div>
            <Link
                to="/"
                className="mt-2 px-6 py-2 rounded-lg bg-yellow-600 hover:bg-yellow-700 text-white font-medium transition"
            >
                Retour à l'accueil
            </Link>
        </div>
    );
}

export default NotFoundError;