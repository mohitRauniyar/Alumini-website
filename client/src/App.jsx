import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import { ToastContainer } from 'react-toastify';
import NavBar2 from './components/NavBar2/NavBar2';
import Notification from './components/Notification/Notification';

function App() {
  return (
    <Router>

      <ToastContainer theme="colored" />
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="/alumini" element={<NavBar2 />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/noti" element={<Notification />} />
        </Route >
        {/* <Route path="/" element={<><NavBar/><Home /></>} />
        <Route path="/login" element={<><NavBar/><Login /></>} />
        <Route path="/signup" element={<><NavBar/><Signup /></>} /> */}
        {/* <Route path="/dashboard" element={<><NavBar2/><Dashboard /></>} /> */}
      </Routes>
    </Router>

  )
}

export default App;
