import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './views/auth/login.jsx'
import Dashboard from './views/admin/dashboard.jsx';
import NotFoundError from './views/errors/404.jsx';
import Stuff from './views/admin/personnel.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Login />}></Route>

        {/* admin */}
        <Route path='admin/dashboard' element={<Dashboard/>}></Route>
        <Route path='admin/stuff' element={<Stuff/>}></Route>
        
        {/* stuff */}

        {/* error */}
        <Route path='*' element={<NotFoundError/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
