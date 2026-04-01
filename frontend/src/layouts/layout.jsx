import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../components/ui/button";
import { useAuth } from "../context/AuthContext";

function Layout({ role = "admin", children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, user } = useAuth();

  const adminMenu = [
    { label: "Tableau de bord", path: "/admin/dashboard" },
    { label: "Opérations", path: "/admin/operations" },
    { label: "Personnels", path: "/admin/hairdresser" },
    { label: "Services", path: "/admin/service" },
    { label: "Congés", path: "/admin/holiday" },
  ];
  const hairdresserMenu = [
    { label: "Tableau de bord", path: "/hairdresser/dashboard" },
    { label: "Opérations", path: "/hairdresser/me/operations" },
    { label: "Congés", path: "/hairdresser/me/holidays" },
  ];

  const menu = role === "admin" ? adminMenu : hairdresserMenu;
  const pageTitle =
    menu.find((item) => item.path === location.pathname)?.label ?? "";

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const Logout = () => {
    setIsMenuOpen(false);
    logout();
    navigate("/");
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="flex h-screen overflow-hidden bg-app w-full">
      <header className="md:hidden fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-4 py-3 border-b border-yellow-700/50 bg-app">
        <Button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className="!px-2 !py-2 min-w-0 rounded-lg bg-transparent text-yellow-600 hover:bg-yellow-900/30"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Button>
      </header>

      {isMenuOpen && (
        <button
          type="button"
          className="md:hidden fixed inset-0 z-40 bg-black/50"
          aria-label="Fermer le menu"
          onClick={closeMenu}
        />
      )}

      <aside
        className={[
          "fixed inset-y-0 left-0 z-50 w-48 shrink-0 border-r border-yellow-700 bg-app",
          "transition-transform duration-200 ease-out",
          "md:relative md:inset-auto md:z-auto md:translate-x-0",
          isMenuOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <div className="h-screen flex flex-col items-center px-4 pt-14 md:pt-0">
          <Button
            type="button"
            className="md:hidden absolute top-3 right-2 !px-2 !py-2 min-w-0 rounded-lg bg-transparent text-yellow-600 hover:bg-yellow-900/30"
            onClick={closeMenu}
            aria-label="Fermer le menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>

          <img
            src="/logo_.png"
            alt="Logo de l'application"
            className="w-36 h-24 mt-4 md:mt-8 mb-6"
          />
          <nav
            className="flex flex-col text-yellow-700 font-medium items-center gap-6 px-4 py-6"
            aria-label="Menu principal"
          >
            {menu.map((item) => (
              <Link key={item.path} to={item.path} onClick={closeMenu}>
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

      <main className="flex-1 min-h-0 overflow-y-auto p-6 pt-[4.5rem] md:pt-6 scrollbar-hidden">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-yellow-600">
            {pageTitle}
          </h2>
          <div className="flex flex-col gap-2 text-white/40">
            <p className="text-sm font-semibold">{user?.firstName}{" "}{user?.lastName}</p>
            <p className="text-sm font-semibold">{user?.role}</p>
          </div>
        </div>
        <div>
          {children}
        </div>
      </main>
    </div>
  );
}

export default Layout;