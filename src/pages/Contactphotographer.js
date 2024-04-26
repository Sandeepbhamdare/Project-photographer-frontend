import { MdOutlineLocationOn, MdOutlineMail, MdOutlinePhoneInTalk } from "react-icons/md";
import PopupMsg from "../components/Popup";
import { IoMdArrowBack } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contactphotographer = () => {

    const [orderPlaced, setOrderplaced] = useState(false)
    const navigate=useNavigate()

    const placeOrder = () => {
        setOrderplaced(true)
        setTimeout(() => {
            setOrderplaced(false)
        }, [2000])
    }

    return (
        <>
            <section className="contact-section istok-web-regular">
            <IoMdArrowBack  className="back-btn" onClick={()=>navigate('/search')}/>

                <img src="./default-profile.png" />
                <div>
                    <p className="photograper-name"> Aditya Gupta</p>
                    <p className="photograper-city"> <span><MdOutlineLocationOn className="contact-icons" /></span>Indore , MP</p>
                </div>
                <div className="photograper-contact">
                    <p> <MdOutlinePhoneInTalk className="contact-icons" /><span> +91 6263298305</span></p>
                    <p> <MdOutlineMail className="contact-icons" /><span>adityagupta@gmail.com</span></p>
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