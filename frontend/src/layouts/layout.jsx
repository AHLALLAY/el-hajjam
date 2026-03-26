import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/button";
import { useAuth } from "../context/AuthContext";

function Layout({ role = "admin", children }) {
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const adminMenu = [
    { label: "Dashboard", path: "/admin/dashboard" },
    { label: "Opérations", path: "/admin/operations" },
    { label: "Personnels", path: "/admin/hairdresser" },
    { label: "Services", path: "/admin/service" },
  ];
  const hairdresserMenu = [
    { label: "Dashboard", path: "/hairdresser/dashboard" },
    { label: "Opérations", path: "/hairdresser/me/operations" },
    { label: "Congés", path: "/hairdresser/me/holidays" },
  ];

  const Logout = () => {
    logout();
    navigate("/");
  };

  const menu = role === "admin" ? adminMenu : hairdresserMenu;
  return (
    <div className="flex h-screen overflow-hidden bg-slate-900 w-full">
      <aside className="border-r border-yellow-700 shrink-0 w-48">
        <div className="h-screen flex flex-col items-center px-4">
          <img
            src="/logo.jpg"
            alt="Logo de l'application"
            className="w-36 h-36 mt-8 mb-6"
          />
          <div className="flex justify-center font-semibold text-yellow-600 border-b rounded-lg border-yellow-600">
            <p>
              {user ? `${user.firstName} ${user.lastName}` : "Utilisateur"}
            </p>
          </div>
          <nav
            className="flex flex-col text-yellow-700 font-medium items-center gap-6 px-4 py-6"
            aria-label="Menu principal"
          >
            {menu &&
              menu.map((item) => (
                <Link key={item.path} to={item.path}>
                  {item.label}
                </Link>
              ))}
          </nav>
          <Button
            onClick={Logout}
            className="mt-auto mb-8 text-white bg-red-500 hover:bg-red-700"
          >
            Déconnexion
          </Button>
        </div>
      </aside>
      <main className="flex-1 min-h-0 overflow-y-auto p-6 scrollbar-hidden">
        {children}
      </main>
    </div>
  );
}

export default Layout;
