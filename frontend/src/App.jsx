import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./views/auth/login.jsx";
import AdminDashboard from "./views/admin/dashboard.jsx";
import HairdresserDashboard from "./views/haireDresser/dashboard.jsx";
import NotFoundError from "./views/errors/404.jsx";
import Stuff from "./views/admin/personnel.jsx";
import ProtectedRoute from "./components/security/ProtectedRoute.jsx";
import UnAuthorizeError from "./views/errors/403.jsx";
import ServerError from "./views/errors/500.jsx";
import Operations from "./views/haireDresser/operations.jsx";
import Services from "./views/admin/Services.jsx";
import HairdresserLayout from "./layouts/hairdresserLayout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Login />}></Route>

        {/* admin */}
        <Route
          path="admin"
          element={<ProtectedRoute allowedRoles={["admin"]} />}
        >
          <Route path="dashboard" element={<AdminDashboard />}></Route>
          <Route path="personnel" element={<Stuff />}></Route>
          <Route path="service" element={<Services />}></Route>
        </Route>

        {/* stuff */}
        <Route
          path="hairdresser"
          element={<ProtectedRoute allowedRoles={["coiffeur"]} />}
        >
          <Route path="dashboard" element={<HairdresserDashboard />}></Route>
          <Route path="me/operations" element={<Operations />}></Route>
        </Route>

        {/* error */}
        <Route path="/unauthorized" element={<UnAuthorizeError />}></Route>
        <Route path="/server-error" element={<ServerError />}></Route>
        <Route path="*" element={<NotFoundError />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
