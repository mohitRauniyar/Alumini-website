/* eslint-disable no-unused-vars */
import { useState } from "react"
import PasswordInput from "../../components/input/PasswordInput"
import { Link, useNavigate } from "react-router-dom"
import { validateEmail } from "../../utils/helper"
import toast, { Toaster } from "react-hot-toast"
const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [reg , setReg] = useState("")
    const [error, setError] = useState(null)
    const [campus, setCampus] = useState("")
    const notify = () => toast('Here is your toast.');


    const navigate = useNavigate()

    const handleSignUp = async (e) => {
        e.preventDefault();
        if(!reg){
            toast.error("Plese enter your Register No")
            return; 
        }
        if(!campus){
            toast.error("Plese enter you campus")
            return; 
        }
        if (!name) {
            toast.error("Please enter your name");
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

        setError("")

    }
  return (
    <div className="flex items-center justify-center mt-10">
                <div className="py-10 bg-white border rounded w-96 px-7">
                    <form action="" onSubmit={handleSignUp}>
                        <h4 className="text-2xl mb-7">
                            Signup
                        </h4>
                       <div className="flex gap-3">
                       <input type="text" placeholder="Redg. No." className="input-box"
                            value={reg}
                            onChange={(e) => setReg(e.target.value)}
                        />
                         <input type="text" placeholder="Campus " className="input-box"
                            value={campus}
                            onChange={(e) => setCampus(e.target.value)}
                        />
                       </div>

                        <input type="text" placeholder="Name" className="input-box"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <input type="text" placeholder="Email" className="input-box"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <PasswordInput value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && <p className="pb-1 text-xs text-red-500">{error}</p>}

                        <button type="submit" className="btn-primary">
                            Sign Up
                        </button>

                        <p className="mt-4 text-sm text-center">
                            Already have an Account?{" "}
                            <Link to="/login" className="font-medium underline text-primary">Login</Link>
                        </p>
                    </form>
                </div>
                <Toaster   position="top-right"
 />

            </div>
  )
}

export default Signup