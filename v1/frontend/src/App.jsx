import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './views/auth/login.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
