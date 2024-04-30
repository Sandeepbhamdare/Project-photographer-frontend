import { MdOutlineLocationOn, MdOutlineMail, MdOutlinePhoneInTalk } from "react-icons/md";
import PopupMsg from "../components/Popup";
import { IoMdArrowBack } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Contactphotographer = ({ setIsContact, photoGrapherDetail }) => {

    const userData = JSON.parse(localStorage.getItem('userData'))
    const navigate = useNavigate()

    const [orderPlaced, setOrderplaced] = useState(false)

    const placeOrder = () => {
        setOrderplaced(true)
        handleOrderPlaced()
        setTimeout(() => {
            setOrderplaced(false)
        }, 2000)
    }

    const handleOrderPlaced = async () => {
        console.log(userData.userId, photoGrapherDetail.userId)
        const response = await fetch('https://photo-grapher-api.vercel.app/order/addBooking', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userId: userData?.userId, toUserId: photoGrapherDetail?.userId })
        })
        const data = await response.json()
        if (data.status) {
            toast.success(data.message)
            navigate('/profile')
        }
        else {
            toast.error(data.message)
        }
    }



    return (
        <>
            <section className="contact-section">
                <IoMdArrowBack className="back-btn" onClick={() => setIsContact(false)} />

                <img src="./default-profile.png" />
                <div>
                    <p className="photograper-name">{photoGrapherDetail.name}</p>
                    <p className="photograper-city">
                        <span><MdOutlineLocationOn className="contact-icons" /></span>
                        {photoGrapherDetail.city}, MP
                    </p>
                </div>
                <div className="photograper-contact">
                    <p>
                        <MdOutlinePhoneInTalk className="contact-icons" />
                        <span>+91 {photoGrapherDetail.phone}</span>
                    </p>
                    <p>
                        <MdOutlineMail className="contact-icons" />
                        <span>{photoGrapherDetail.email}</span>
                    </p>
                </div>
            </section>

            <div className="orderbtn-section galdeano-regular">
                <button className="galdeano-regular" onClick={() => placeOrder()}>Order</button>
            </div>
            {orderPlaced ? <PopupMsg /> : ""}
            <ToastContainer />
        </>
    )
}

export default Contactphotographer;