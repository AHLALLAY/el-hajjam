import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './views/auth/login.jsx'
import Dashboard from './views/admin/dashboard.jsx';
import NotFoundError from './views/errors/404.jsx';
import Stuff from './views/admin/personnel.jsx';
import ProtectedRoute from './components/security/ProtectedRoute.jsx';
import UnAuthorizeError from './views/errors/403.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Login />}></Route>

        {/* admin */}
        <Route path='admin' element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path='dashboard' element={<Dashboard />}></Route>
          <Route path='personnel' element={<Stuff />}></Route>
        </Route>

        {/* stuff */}

        {/* error */}
        <Route path='/unauthorized' element={<UnAuthorizeError />}></Route>
        <Route path='*' element={<NotFoundError />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
