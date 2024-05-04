import { FaRegUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const localUserData = localStorage.getItem('userData')
    const userData = localUserData ? JSON.parse(localUserData) : null;

    return (
        <>
            <nav className="navbar ">
                <ul>
                    <li >
                        <img src="./logo.png" className="logo-img" />
                    </li>

                    <li>
                        <ul className="nav-link">
                            <li><NavLink to="/"  className="nav-link-defaul">Home</NavLink></li>
                            <li><NavLink to="search"  className="nav-link-defaul">Search</NavLink></li>
                            <li><NavLink to="service"  className="nav-link-defaul">Services</NavLink></li>
                            <li><NavLink to="about"  className="nav-link-defaul">About Us</NavLink></li>
                        </ul>
                    </li>

                    <li>
                        {userData === null ?
                            <NavLink to="profile" className="profile-icon">
                                <FaRegUserCircle />
                            </NavLink> :
                            <NavLink to="profile">
                                <img src={userData.profileUrl ? userData.profileUrl : "./default-profile.png"} className="profile-img" />
                            </NavLink>
                        }
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default Navbar;