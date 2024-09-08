import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />}>
        <Route path="/home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="/alumini" element={<NavBar />}>
          <Route path="dashboard" element={<Home />} />
          <Route path="profile" element = {<Profile/>}/>
        </Route >
      </Routes>
      <ToastContainer theme="colored" />
    </Router>

  )
}

export default App