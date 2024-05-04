import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../components/Loader";
import "react-toastify/dist/ReactToastify.css";
import ForgetPassword from "../components/ForgetPass";
import BaseUrl from "../constants";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {

    const [userLogin, setUserLogin] = useState({ email: "", password: "" })
    const [showPass, setShowpass] = useState(false)
    const { email, password } = userLogin;
    const [isLoading, setIsLoading] = useState(false)
    const [forgetPass, setForgetPass] = useState({ isforgetPass: false, isForgetPassForm: false })

    const localUserData = localStorage.getItem('userData')
    const navigate = useNavigate()
    
    useEffect(() => {
        if (localUserData) {
            navigate('/')
        }
    })

    const onChange = (e) => {
        setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const response = await fetch(BaseUrl + '/auth/login', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        const data = await response.json()
        setIsLoading(false)
        if (data.status) {
            console.log(data)
            const userData = {
                userId: data.data.userId,
                name: data.data.name,
                email: data.data.email,
                profileUrl: data.data.profileUrl,
                userType: data.data.userType,
                city: data.data.city,
                phone: data.data.phone
            }
            localStorage.setItem('userData', JSON.stringify(userData))
            userLogin.email = '';
            userLogin.password = '';

            navigate("/")
        } else {
            toast.error(data.message)
            setForgetPass({ isforgetPass: true });
        }
        setUserLogin( {email: "", password: "" });
    }

    const handleReset = (e) => {
        e.preventDefault()
        setUserLogin({ email: "", password: "" });
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
                    <div className="password-input">
                        <p>Password</p>
                        <input  type={showPass ? "text" : "password"} name="password" value={userLogin.password} onChange={onChange} />
                        <span className="password-icon" onClick={() => setShowpass(!showPass)}>{showPass?<FaEye />:<FaEyeSlash />}</span>
                        {/*  */}

                    </div>

                    {
                        forgetPass.isforgetPass ?
                            <p className="forgetPass-section" onClick={() => setForgetPass({ isForgetPassForm: true })}>Forget Password ?</p> : ""
                    }

                    <span className="btn-container">
                        <button className="auth-btn inder-regular" onClick={handleLogin}>Login</button>
                        <button className="reset-btn" onClick={handleReset}>reset</button>
                    </span>

                    <p>Don’t have an account ? <Link to="/signup">Sign Up</Link> </p>
                </form>
            </div>

            {/* ForgetPassword form */}
            {forgetPass.isForgetPassForm ? <ForgetPassword setForgetPass={setForgetPass} setIsLoading={setIsLoading} /> : ""}

            {isLoading ? <Loader /> : ""}
            <ToastContainer />
        </>
    )
}

export default Login;