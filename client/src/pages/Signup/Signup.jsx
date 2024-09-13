/* eslint-disable no-unused-vars */
import { useState } from "react"
import PasswordInput from "../../components/input/PasswordInput"
import { Link, useNavigate } from "react-router-dom"
import { validateEmail, validNameContent, validatePassword, validateDate, validateForm } from "../../utils/helper"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const Signup = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [reg, setReg] = useState("")
    const [campus, setCampus] = useState("")
    const [passingYear, setPassingYear] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (!reg) {
            toast.error("Please enter your Register No")
            return;
        }
        if (!passingYear) {
            toast.error("Please enter your Passing year")
        }
        if (!campus) {
            toast.error("Please choose campus")
            return;
        }
        if (!firstName) {
            toast.error("Please enter your firstName");
            return;
        }
        if (!email) {
            toast.error("Please enter a email address")
            return;
        }
        if (!validateEmail(email)) {
            toast.error("Please enter a valid email address")
            return;
        }
        if (!password) {
            toast.error("Please enter your password");
            return;
        }
        if (!validatePassword(password)) {
            toast.error("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character.")
            return;
        }

        let form = {
            id: null,
            registrationNumber: reg,
            firstname: firstName,
            lastname: lastName,
            campus: campus,
            email: email,
            password: password,
            passingYear: Number.parseInt(passingYear),
            profilePicture: null,
            workingCity: null,
            workingCountry: null
        }
        const validatedForm = validateForm(form);
        setLoading(true);
        try {
            const URL = 'http://localhost:9001/api/auth/signup'
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(validatedForm)
            });
            const result = await response.text();
            setLoading(false);  
            if (!response.ok) {
                toast.error(result);
                return;
            }
            toast.success(result);
            navigate("/login");
        } catch (err) {
            toast.error(err);
        }
    }
    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gray-100 ">
                <div className="py-10 bg-white border rounded w-96 px-7">
                    <form action="" onSubmit={handleSignUp}>
                        <h4 className="text-2xl mb-7">
                            Signup
                        </h4>

                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Reg. No."
                                className="flex-1 px-2 input-box"
                                value={reg}
                                onChange={(e) => {
                                    setReg(e.target.value)
                                }}
                            />
                            <input
                                type="text"
                                placeholder="Passing year"
                                className="w-1/3 px-2 input-box"
                                value={passingYear}
                                onChange={(e) => {
                                    if (validateDate(e.target.value))
                                        setPassingYear(e.target.value)
                                }}
                            />
                        </div>
                        <select className="px-2 input-box" value={campus} placeholder="Campus"
                            onChange={(e) => setCampus(e.target.value)}>
                            <option value="" disabled>-Select Campus-</option>
                            <option value="Amritapuri">Amritapuri</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Coimbatore">Coimbatore</option>
                            <option value="Kochi">Kochi</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Amravati">Amravati</option>
                            <option value="Mysuru">Mysuru</option>
                        </select>
                        <input type="text" placeholder="Firstname" className="px-2 input-box"
                            value={firstName}
                            onChange={(e) => {
                                if (validNameContent(e.target.value))
                                    setFirstName(e.target.value)
                            }
                            }
                        />
                        <input type="text" placeholder="Lastname" className="px-2 input-box"
                            value={lastName}
                            onChange={(e) => {
                                if (validNameContent(e.target.value))
                                    setLastName(e.target.value)
                            }
                            }
                        />

                        <input type="text" placeholder="Email" className="px-2 input-box"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <PasswordInput value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button type="submit" className="btn-primary">
                            Sign Up
                        </button>

                        <p className="mt-4 text-sm text-center">
                            Already have an Account?{" "}
                            <Link to="/login" className="font-medium underline text-blue-600">Login</Link>
                        </p>
                    </form>
                    {loading?(<Box sx={{ display: 'flex',justifyContent:'center' }}>
                        <CircularProgress />
                    </Box>):null}
                </div>
            </div>
            
        </>
    )
}

export default Signup