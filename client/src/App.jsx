import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import NavBar from './components/NavBar/NavBar';
import { ToastContainer } from 'react-toastify';
import NavBar2 from './components/NavBar2/NavBar2';
import Notification from './components/Notification/Notification';

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/navbar2" element={<NavBar2 />} />
        <Route path="/noti" element={<Notification />} />
      </Routes>
      <ToastContainer theme="colored" />
    </Router>
    
  )
}

export default App