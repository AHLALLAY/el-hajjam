import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function RouteProtector({ allowedRole = [] }) {
  const { user, isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/" replace />;
  if (allowedRole.length > 0 && !allowedRole.includes(user?.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
export default RouteProtector;
