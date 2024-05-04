import { IoLocation } from "react-icons/io5";
import Contactphotographer from "../pages/Contactphotographer";
import { useState } from "react";

const Card = ({ name, city, userId, profileUrl, email, phone, orderList }) => {

    const [isContact, setIsContact] = useState(false)
    const [Photographer, setPhotographer] = useState({ userId, name, city, profileUrl, email, phone })


    const bookedUser = orderList.some(ob => ob.toUserId === userId);

    return (
        <>
            <div className="card">
                <div>
                    <img src={profileUrl ? profileUrl : "./default-profile.png"} width={"60px"} height={"60px"} /> <p>{name}</p>
                </div>
                <p><IoLocation className="location-icon" /> <span>{city}</span></p>

                {bookedUser ? <button className="booked-btn" disabled={true}>Booked</button>:
                <button className="contact-btn" onClick={() => setIsContact(true)} >Contact</button>}
            </div>
            {isContact ? <>
                <section className="contactphotographer-section container-center">
                    <div>
                        <Contactphotographer setIsContact={setIsContact} photoGrapherDetail={Photographer} />
                    </div>
                </section>
            </ > : ""
            }
        </>
    )
}
export default Card;