import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/auth/login";
import AdminDashboard from "./views/admin/dashboard";
import HairdresserDashboard from "./views/hairdresser/dashboard";
import RouteProtector from "./components/security/routeProtector";
import UnAuthorizeError from "./views/error/403";
import AdminOperation from "./views/admin/operation";
import HairdresserOperation from "./views/hairdresser/operation";
import Service from "./views/admin/service";
import Hairdresser from "./views/admin/hairdresser";
import ServerError from "./views/error/500";
import NotFoundError from "./views/error/404";
import HolidayHairdresser from "./views/hairdresser/holiday";
import HolidayAdmin from "./views/admin/holiday";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* index */}
        <Route path="/" index element={<Login />}></Route>

        {/* admin */}
        <Route
          path="admin"
          element={<RouteProtector allowedRole={["admin"]} />}
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="operations" element={<AdminOperation />} />
          <Route path="hairdresser" element={<Hairdresser />} />
          <Route path="service" element={<Service />} />
          <Route path="holiday" element={<HolidayAdmin />} />
        </Route>

        {/* hairdresser */}
        <Route
          path="hairdresser"
          element={<RouteProtector allowedRole={["coiffeur"]} />}
        >
          <Route path="dashboard" element={<HairdresserDashboard />} />
          <Route path="me/operations" element={<HairdresserOperation />} />
          <Route path="me/holidays" element={<HolidayHairdresser />} />
        </Route>

        {/* error */}
        <Route path="/unauthorized" element={<UnAuthorizeError />} />
        <Route path="/server-error" element={<ServerError />} />
        <Route path="*" element={<NotFoundError />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
