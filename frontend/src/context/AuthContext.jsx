import { useEffect, useState, useContext, createContext } from 'react';

export const AuthContext = createContext({
    token: null,
    user: null,
    isAuthenticated: false,
    login: () => { },
    logout: () => { },
});

export default function AuthProvider({ children }) {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (data) => {
        const userData = {
            id: data.id,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            cin: data.cin,
            role: data.role,
        }

        setToken(data.token);
        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(userData));
    }

    const logout = () => {
        setToken(null);
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setToken(token);
            setIsAuthenticated(true);
            setUser(JSON.parse(localStorage.getItem('user')));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ token, user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}