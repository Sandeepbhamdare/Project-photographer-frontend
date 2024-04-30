import { IoLocation } from "react-icons/io5";
import Contactphotographer from "../pages/Contactphotographer";
import { useState } from "react";

const Card = ({ name, city, userId, profileUrl, email, phone, orderList, setOrderList}) => {

    const [isContact, setIsContact] = useState(false)
    const [Photographer, setPhotographer] = useState({ userId, name, city, profileUrl, email, phone })

    return (
        <>
            <div className="card">
                <div>
                    <img src="./default-profile.png" width={"60px"} /> <p>{name}</p>
                </div>
                <p><IoLocation className="location-icon" /> <span>{city}</span></p>
                <button className="contact-btn" onClick={() => setIsContact(true)}>
                Contact</button>
            </div>
            {isContact ? <>
                <section className="contactphotographer-section container-center">
                    <div>
                        <Contactphotographer setIsContact={setIsContact} photoGrapherDetail={Photographer}orderList={orderList} setOrderList={setOrderList}/>
                    </div>
                </section>
            </ > : ""
            }
        </>
    )
}
export default Card;