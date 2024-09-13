import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import { ToastContainer } from 'react-toastify';
import NavBar2 from './components/NavBar2/NavBar2';
import Notification from './components/Notification/Notification';
import UpcomingEvents from './pages/Home/UpcomingEvents';
import ConnectCard from './pages/Home/ConnectCard';

function App() {
  return (
    <Router>

      <ToastContainer theme="colored" />
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="/alumini" element={<NavBar2 />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="events" element={< UpcomingEvents/>} />
          <Route path="spotlights" element={< ConnectCard/>} />
          <Route path="noti" element={<Notification />} />
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
