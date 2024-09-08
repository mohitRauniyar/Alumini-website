import { useState } from "react";
import PasswordInput from "../../components/input/PasswordInput";
import { Link, useNavigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { toast } from 'react-toastify';

const Login = () => {   
    const [registrationNumber, setRegistrationNumber] = useState("");
    const [password, setPassword] = useState("")
    const [loading,setLoading]=useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!registrationNumber) {
            toast.error("Please enter a valid registration number")
            return;
        }

        if (!password) {
            toast.error("Please enter the password")
            return;
        }
        
        setLoading(true);
        const form = {
            registrationNumber:registrationNumber.trim().toLowerCase(),
            password:password
        }
        try {
            const URL = 'http://localhost:9001/api/auth/signin'
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form),
                credentials:'include'
            });
            const result = await response.text();
            setLoading(false);  
            if (!response.ok) {
                toast.error(result);
                return;
            }
            toast.success(result);
            navigate("/dashboard");
        } catch (err) {
            toast.error(err);
        }
    }

    return (
        <div className="flex items-center justify-center mt-20">
            <div className="py-10 bg-white border rounded w-96 px-7">
                <form action="" onSubmit={handleLogin}>
                    <h4 className="text-2xl mb-7">
                        Login
                    </h4>
                    <input type="text" placeholder="Registration number" className="px-2 input-box border-[1px]"
                        value={registrationNumber}
                        onChange={(e) => setRegistrationNumber(e.target.value)}
                    />
                    <PasswordInput value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit" className="btn-primary">
                        Login
                    </button>

                    <p className="mt-4 text-sm text-center">
                        Not registered yet?{" "}
                        <Link to="/signup" className="font-medium underline text-primary">Create an Account</Link>
                    </p>
                </form>
                {loading?(<Box sx={{ display: 'flex',justifyContent:'center' }}>
                        <CircularProgress />
                    </Box>):null}
            </div>
        </div>
    )
}

export default Login