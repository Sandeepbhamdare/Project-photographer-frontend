import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {

    const navigate = useNavigate()
    const [newUser, setNewUser] = useState({ name: "", email: "", password: "", city: "", phone: "", userType: undefined })
    const [loading, setLoading] = useState(false);

    const { name, email, password, city, phone, userType } = newUser;

    const onChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value })
    }

    const handleSignup = async (e) => {
        e.preventDefault()
        setLoading(true)
        const response = await fetch("https://photo-grapher-api.vercel.app/auth/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password, city, phone, userType })
        })
        const data = await response.json();
        setLoading(false)

        if (data.status) {
            navigate("/login")
        } else {
            toast.error(data.message)
        }
    }

    const handleReset = (e) => {
        e.preventDefault();
        setNewUser({ name: "", email: "", password: "", city: "", phone: "", userType: undefined })
    }

    return (
        <>
            <div className="auth-container">
                <form className="auth-form inria-sans-regular signup-form">

                    <Link className="home-link" to="/">  <IoCloseSharp /> </Link>

                    <h1 className="galdeano-regular">Sign up</h1>
                    <div>
                        <p>Name</p>
                        <input type="text" name="name" value={newUser.name} onChange={onChange} />
                    </div>
                    <div>
                        <p >E-mail</p>
                        <input type="email" name="email" value={newUser.email} onChange={onChange} />
                    </div>
                    <div>
                        <p>Password</p>
                        <input type="Password" name="password" value={newUser.password} onChange={onChange} />
                    </div>
                    <div>
                        <p >City</p>
                        <input type="text" name="city" value={newUser.city} onChange={onChange} />
                    </div>
                    <div>
                        <p>Phone</p>
                        <input type="tel" name="phone" value={newUser.phone} onChange={onChange} />
                    </div>
                    <div>
                        <p >User-types</p>
                        <select name="userType" onChange={onChange}>
                            <option >select</option>
                            <option value={2}>Photographer</option>
                            <option value={1}>None</option>
                        </select>

                    </div>

                    <span className="btn-container">
                        <button className="auth-btn inder-regular" onClick={handleSignup}>Submit</button>
                        <button className="reset-btn" onClick={handleReset}>reset</button>
                    </span>
                    <p>Already have an account ? <Link to="/login">Log in</Link> </p>
                </form>
            </div>
            {loading ? <Loader /> : ""}
            <ToastContainer />
        </>
    )
}

export default Signup;