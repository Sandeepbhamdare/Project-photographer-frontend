import { IoLocation } from "react-icons/io5";
import { MdOutlineMail, MdOutlinePhoneInTalk } from "react-icons/md";
import { FaUserPen } from "react-icons/fa6";
import Editprofile from "../components/Editprofile";
import { useState } from "react";

const Profile = () => {

    const [isEditPro, setIsEditPro] = useState(false)

    return (
        <>
            <section className="contact-section istok-web-regular">
                <img src="./demo-profile.jpg" />
                <div>
                    <p className="photograper-name">Niraj singh</p>
                    <p className="photograper-city"> <span><IoLocation className="contact-icons red-icon" /></span>Indore , MP</p>
                </div>
                <div className="photograper-contact">
                    <p> <MdOutlinePhoneInTalk className="contact-icons" /><span> +91 6263298305</span></p>
                    <p> <MdOutlineMail className="contact-icons " /><span>singhniraj@gmail.com</span></p>
                </div>
                <FaUserPen className="edit-icon" onClick={() => setIsEditPro(!isEditPro)} />
            </section>


            <p className="order-head">your orders</p>
            <div className="order-container">
                <div className="order">
                    <div className="order-detail1">
                        <img src="./default-profile.png" />
                        <p>Bob Jonson</p>
                    </div>
                    <div className="order-detail2">
                        <p><MdOutlineMail className="order-icons" /> <span> bob@gamil.com</span></p>
                        <p><MdOutlinePhoneInTalk className="order-icons" /> <span> 6263298305</span></p>
                    </div>
                    <p className="time-date">20/Jan/2020  2:00AM</p>
                </div>
                <div className="order">
                    <div className="order-detail1">
                        <img src="./default-profile.png" />
                        <p>Bob Jonson</p>
                    </div>
                    <div className="order-detail2">
                        <p><MdOutlineMail className="order-icons" /> <span> bob@gamil.com</span></p>
                        <p><MdOutlinePhoneInTalk className="order-icons" /> <span> 6263298305</span></p>
                    </div>
                    <p className="time-date">20/Jan/2020  2:00AM</p>
                </div>
            </div >

            {isEditPro ? <Editprofile isEdit={isEditPro} setIsEdit={setIsEditPro}/> : ""}

        </>
    )
}
export default Profile;