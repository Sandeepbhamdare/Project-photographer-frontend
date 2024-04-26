import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Signup = () => {

    const [newUser, setNewUser] = useState({ name: "", email: "", password: "", city: "", phone: "", userType: "" })

    return (
        <>
            <div className="auth-container">
                <form className="auth-form inria-sans-regular signup-form">

                    <Link className="home-link" to="/">  <IoCloseSharp /> </Link>

                    <h1 className="galdeano-regular">Sign up</h1>
                    <div>
                        <p>Name</p>
                        <input type="text" name="name" value={""} />
                    </div>
                    <div>
                        <p >E-mail</p>
                        <input type="email" name="email" value={""} />
                    </div>
                    <div>
                        <p>Password</p>
                        <input type="Password" name="password" value={""} />
                    </div>
                    <div>
                        <p >City</p>
                        <input type="text" name="city" value={""} />
                    </div>
                    <div>
                        <p>Phone</p>
                        <input type="tel" name="phone" value={""} />
                    </div>
                    <div>
                        <p >User-types</p>
                        <select name="userType">
                            <option >select</option>
                            <option value={2}>Photographer</option>
                            <option value={1}>None</option>
                        </select>

                    </div>

                    <span className="btn-container">
                        <button className="auth-btn inder-regular">Submit</button>
                        <button className="reset-btn">reset</button>
                    </span>
                    <p>Already have an account ? <Link to="/login">Log in</Link> </p>
                </form>
            </div>
        </>
    )
}

export default Signup;