import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <nav className="navbar ">
                <ul>
                    <li >
                        <img src="./logo.png" className="logo-img" />
                    </li>

                    <li>
                        <ul className="nav-link istok-web-regular">
                            <li><Link className="nav-link-defaul" to="/">Home</Link></li>
                            <li><Link className="nav-link-defaul" to="search">Search</Link></li>
                            <li><Link className="nav-link-defaul" to="service">Services</Link></li>
                            <li><Link className="nav-link-defaul" to="about">About Us</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="profile">
                            <img src="./demo-profile.jpg" className="profile-img" />
                        </Link>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default Navbar;