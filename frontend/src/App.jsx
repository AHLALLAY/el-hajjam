import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './views/auth/login.jsx'
import Dashboard from './views/admin/dashboard.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Login />}></Route>
        <Route path='admin/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
