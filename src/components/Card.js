import { IoLocation } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Card = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className="card istok-web-regular ">
                <div>
                    <img src="./default-profile.png" width={"60px"} /> <p>Aditya gupta</p>
                </div>
                <p><IoLocation className="location-icon" /> <span>Indore</span></p>
                <button className="contact-btn" onClick={()=>navigate('/contact_photographer')}>Contact</button>
            </div>
        </>
    )
}
export default Card;