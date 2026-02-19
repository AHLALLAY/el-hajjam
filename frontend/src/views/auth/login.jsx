import Input from '../../components/ui/input.jsx';
import Button from '../../components/ui/button.jsx';
import fetchEndPoint from '../../services/apiHundler.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const { login } = useAuth();

    const loginAction = (async (e) => {
        e.preventDefault();
        try {
            const response = await fetchEndPoint('/auth/login', 'post', { email, password });
            login(response.data);
            navigate(`${response.data.role}/dashboard`)
        } catch (err) {
            setError(err.message);
        }

    });

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-slate-900 p-4">
            <div className="w-full max-w-md">
                <form onSubmit={loginAction} className="bg-slate-800 border border-yellow-700 rounded-xl p-8 shadow-2xl space-y-6">
                    <div className="flex justify-center items-center">
                        <img src="/logo.jpg" alt="logo" />
                    </div>
                    {error && <p className='text-red-500 text-sm'>{error}</p>}
                    <div className="space-y-4">
                        <Input
                            type="email"
                            label="Email"
                            id="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            placeholder="exemple@mail.com"
                        />

                        <Input
                            type="password"
                            label="Mot de passe"
                            id="password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            placeholder="*******"
                        />
                    </div>

                    <Button type='submit' className="bg-yellow-600 hover:bg-yellow-700 text-white w-full">
                        Se connecter
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Login;