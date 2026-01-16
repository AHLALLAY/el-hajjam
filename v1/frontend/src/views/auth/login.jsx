import Input from '../../components/ui/input.jsx';
import Button from '../../components/ui/button.jsx';

function Login() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-slate-900 p-4">
            <div className="w-full max-w-md">
                <form className="bg-slate-800 border border-slate-700 rounded-xl p-8 shadow-2xl space-y-6">
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl font-bold text-white">El Hajjame</h2>
                        <p className="text-slate-400">Connectez-vous à votre espace</p>
                    </div>

                    <div className="space-y-4">
                        <Input
                            type="email"
                            label="Email"
                            id="email"
                            value=""
                            onChange={() => { }}
                            placeholder="exemple@mail.com"
                        />

                        <Input
                            type="password"
                            label="Mot de passe"
                            id="password"
                            value=""
                            onChange={() => { }}
                            placeholder="*******"
                        />
                    </div>

                    <Button className="bg-yellow-600 hover:bg-yellow-700 text-white w-full">
                        Se connecter
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Login;