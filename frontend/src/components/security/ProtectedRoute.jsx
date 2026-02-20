import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function ProtectedRoute({allowedRoles= []}) {
    const { user, isAuthenticated } = useAuth();
    if(!isAuthenticated) return <Navigate to='/' replace />;
    if(allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) return <Navigate to='/unauthorized' replace />;


    return (
        <div>
            <Outlet />
        </div>
    );
}

export default ProtectedRoute;