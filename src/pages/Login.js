import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Login = () => {

    const [userLogin, setUserLogin] = useState({ email: "", password: "" })

    const onChange = (e) => {
        setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
    }

    const handleLogin=(e)=>{
          e.preventDefault()
    }

    return (
        <>
            <div className="auth-container">
                <form className="auth-form inria-sans-regular login-form">

                    <Link className="home-link" to="/">  <IoCloseSharp /> </Link>

                    <h1 className="galdeano-regular">Log in</h1>
                    <div>
                        <p >E-mail</p>
                        <input type="email" name="email" value={userLogin.email } onChange={onChange} />
                    </div>
                    <div>
                        <p>Password</p>
                        <input type="password" name="password" value={userLogin.password} onChange={onChange} />
                    </div>

                    <span className="btn-container">
                        <button className="auth-btn inder-regular" onClick={handleLogin}>Login</button>
                        <button className="reset-btn">reset</button>
                    </span>
                    <p>Don’t have an account ? <Link to="/signup">Sign Up</Link> </p>
                </form>
            </div>
        </>
    )
}

export default Login;