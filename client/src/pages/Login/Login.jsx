import { useState } from "react";
import { validateEmail } from "../../utils/helper";
import PasswordInput from "../../components/input/PasswordInput";
import { Link } from "react-router-dom"


const Login = () => {
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError("Please enter a valid email address")
            return;
        }

        if (!password) {
            setError("Please enter the password")
            return;
        }
        setError("")
    }

    return (
        <div className="flex items-center justify-center mt-20">
            <div className="py-10 bg-white border rounded w-96 px-7">
                <form action="" onSubmit={handleLogin}>
                    <h4 className="text-2xl mb-7">
                        Login
                    </h4>
                    <input type="text" placeholder="Email" className="input-box"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <PasswordInput value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p className="pb-1 text-xs text-red-500">{error}</p>}

                    <button type="submit" className="btn-primary">
                        Login
                    </button>

                    <p className="mt-4 text-sm text-center">
                        Not registered yet?{" "}
                        <Link to="/signup" className="font-medium underline text-primary">Create an Account</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login