import { PiInstagramLogo, PiLinkedinLogo, PiTelegramLogo, PiYoutubeLogo } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate=useNavigate()
    return (
        <>
            <section className="footer-section istok-web-regular">
                <div>
                    <h1>So what are you waiting for?</h1>
                    <button className="footer-btn" onClick={()=>navigate('/signup')}>Sign Up</button>
                </div>
                <div className="footer-main-section">
                    <div>
                        <img src="./logo.png" />
                        <p>choose Quality over quantity</p>
                    </div>
                    <ul className="footer-link">
                        <h2>Company</h2>
                        <li onClick={()=>navigate("/")}>Home</li>
                        <li onClick={()=>navigate("/about")}>About us</li>
                        <li onClick={()=>navigate("/service")}>Services</li>
                    </ul>
                    <div className="footer-social-links">
                        <h2>Follow Us On</h2>
                        <ul>
                            <li><PiYoutubeLogo /></li>
                            <li><PiInstagramLogo /></li>
                            <li><PiLinkedinLogo /></li>
                            <li><PiTelegramLogo /></li>
                        </ul>
                    </div>
                </div>
                <p>all rights resereved @2020</p>
            </section>
        </>
    )
}
export default Footer;