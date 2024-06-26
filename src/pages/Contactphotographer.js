import { MdOutlineLocationOn, MdOutlineMail, MdOutlinePhoneInTalk } from "react-icons/md";
import PopupMsg from "../components/Popup";
import { IoMdArrowBack } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import BaseUrl from "../constants";

const Contactphotographer = ({ setIsContact, photoGrapherDetail }) => {

    const userData = JSON.parse(localStorage.getItem('userData'))
    const navigate = useNavigate()

    const [orderPlaced, setOrderplaced] = useState(false)


    const handleOrderPlaced = async (uId) => {
        setOrderplaced(true)
        const response = await fetch(BaseUrl + '/order/addBooking', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userId: userData?.userId, toUserId: photoGrapherDetail?.userId })
        })
     
        const data = await response.json()
        console.log(data)
        if (data.status) {

            toast.success(data.message)
            setOrderplaced(false)
            navigate('/profile')

        }
        else {
            setOrderplaced(false)
            toast.error(data.message)
            console.log(data)
        }
    }

    return (
        <>
            <section className="contact-section">
                <IoMdArrowBack className="back-btn" onClick={() => setIsContact(false)} />

                <img src={photoGrapherDetail.profileUrl ? photoGrapherDetail.profileUrl : "./default-profile.png"} />
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
                <button className="galdeano-regular" onClick={() => handleOrderPlaced(photoGrapherDetail.userId)} >
                    Order</button>
            </div>
            {orderPlaced ? <PopupMsg /> : ""}
            <ToastContainer />
        </>
    )
}

export default Contactphotographer;