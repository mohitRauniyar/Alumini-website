import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard/Dashboard';
import NavBar from './components/NavBar/NavBar';
import { ToastContainer } from 'react-toastify';
import NavBar2 from './components/NavBar2/NavBar2';
import Notification from './components/Notification/Notification';
import NavBar2 from './components/NavBar2/NavBar2';

function App() {
  return (
    <Router>
      
      <ToastContainer theme="colored" />
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/navbar2" element={<NavBar2 />} />
        <Route path="/noti" element={<Notification />} />
        <Route path="/" element={<><NavBar/><Home /></>} />
        <Route path="/login" element={<><NavBar/><Login /></>} />
        <Route path="/signup" element={<><NavBar/><Signup /></>} />
        <Route path="/dashboard" element={<><NavBar2/><Dashboard /></>} />
      </Routes>
    </Router>
  );
}

export default App;
