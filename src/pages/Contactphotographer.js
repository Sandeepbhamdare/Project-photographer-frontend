import { MdOutlineLocationOn, MdOutlineMail, MdOutlinePhoneInTalk } from "react-icons/md";
import PopupMsg from "../components/Popup";
import { IoMdArrowBack } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contactphotographer = ({ setIsContact,photoGrapherDetail }) => {

 const {name,city,userId,profileUrl,email,phone}=photoGrapherDetail
    const navigate = useNavigate()

    const [orderPlaced, setOrderplaced] = useState(false)

    const placeOrder = () => {
        setOrderplaced(true)
        setTimeout(() => {
            setOrderplaced(false)
        }, 2000)
    }


   

    return (
        <>
            <section className="contact-section">
                <IoMdArrowBack className="back-btn" onClick={() => setIsContact(false)} />

                <img src="./default-profile.png" />
                <div>
                    <p className="photograper-name">{name}</p>
                    <p className="photograper-city">
                        <span><MdOutlineLocationOn className="contact-icons" /></span>
                        {city}, MP
                    </p>
                </div>
                <div className="photograper-contact">
                    <p>
                        <MdOutlinePhoneInTalk className="contact-icons" />
                        <span>+91 {phone}</span>
                    </p>
                    <p>
                        <MdOutlineMail className="contact-icons" />
                        <span>{email}</span>
                    </p>
                </div>
            </section>

            <div className="orderbtn-section galdeano-regular">
                <button className="galdeano-regular" onClick={() => placeOrder()}>Order</button>
            </div>
            {orderPlaced ? <PopupMsg /> : ""}
        </>
    )
}

export default Contactphotographer;