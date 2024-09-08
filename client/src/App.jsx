import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard/Dashboard';
import NavBar from './components/NavBar/NavBar';
import NavBar2 from './components/NavBar2/NavBar2';

function App() {
  return (
    <Router>
      
      <ToastContainer theme="colored" />
      <Routes>
        <Route path="/" element={<><NavBar/><Home /></>} />
        <Route path="/login" element={<><NavBar/><Login /></>} />
        <Route path="/signup" element={<><NavBar/><Signup /></>} />
        <Route path="/dashboard" element={<><NavBar2/><Dashboard /></>} />
      </Routes>
    </Router>
  );
}

export default App;
