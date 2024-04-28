import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../components/Loader";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

    const [userLogin, setUserLogin] = useState({ email: "", password: "" })
    const { email, password } = userLogin;
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const onChange = (e) => {
        setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const response = await fetch('http://localhost:3002/auth/login', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        const data = await response.json()
        setIsLoading(false)
        if (data.status) {
            const userData = JSON.stringify(data.data)
            localStorage.setItem('userData', userData)
            navigate("/")

        } else {
            toast.error(data.message)
        }
    }

    const handleReset = (e) => {
        e.preventDefault()
        setUserLogin({ email: "", password: "" })
    }

    return (
        <>
            <div className="auth-container">
                <form className="auth-form inria-sans-regular login-form">

                    <Link className="home-link" to="/">  <IoCloseSharp /> </Link>

                    <h1 className="galdeano-regular">Log in</h1>
                    <div>
                        <p >E-mail</p>
                        <input type="email" name="email" value={userLogin.email} onChange={onChange} />
                    </div>
                    <div>
                        <p>Password</p>
                        <input type="password" name="password" value={userLogin.password} onChange={onChange} />
                    </div>

                    <span className="btn-container">
                        <button className="auth-btn inder-regular" onClick={handleLogin}>Login</button>
                        <button className="reset-btn" onClick={handleReset}>reset</button>
                    </span>
                    <p>Don’t have an account ? <Link to="/signup">Sign Up</Link> </p>
                </form>
            </div>

            {isLoading ? <Loader /> : ""}
            <ToastContainer />
        </>
    )
}

export default Login;