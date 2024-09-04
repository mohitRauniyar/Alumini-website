import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import NavBar from './components/NavBar/NavBar';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer theme="colored" />
    </Router>
    
  )
}

export default App