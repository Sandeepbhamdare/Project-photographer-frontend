import { IoLocation } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Card = ({ name, city, userId, profileUrl }) => {

    const navigate = useNavigate()

    return (
        <>
            <div className="card istok-web-regular ">
                <div>

                    <img src= "./default-profile.png" width={"60px"} /> <p>{name}</p>
                </div>
                <p><IoLocation className="location-icon" /> <span>{city}</span></p>
                <button className="contact-btn" onClick={() => navigate(`/contact_photographer/${userId}`)}>Contact</button>
            </div>
        </>
    )
}
export default Card;