import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Login = () => {

    return (
        <>
            <div className="auth-container">
                <form className="auth-form inria-sans-regular login-form">

                <Link className="home-link" to="/">  <IoCloseSharp /> </Link>

                    <h1 className="galdeano-regular">Log in</h1>
                    <div>
                        <p >E-mail</p>
                        <input type="email"  />
                    </div>
                    <div>
                        <p>Password</p>
                        <input type="Password"  />
                    </div>
        
                    <div>
                        <p >Category</p>
                        <select>
                            <option  >select</option>
                            <option value="photographer">Photographer</option>
                            <option value="none">None</option>
                        </select>

                    </div>

                    <span className="btn-container">
                        <button className="auth-btn inder-regular">Login</button>
                        <button className="reset-btn">reset</button>
                    </span>
                    <p>Don’t have an account ? <Link to="/signup">Sign Up</Link> </p>
                </form>
            </div>
        </>
    )
}

export default Login;