import { IoLocation } from "react-icons/io5";
import { MdLogout, MdOutlineMail, MdOutlinePhoneInTalk } from "react-icons/md";
import { FaUserPen } from "react-icons/fa6";
import Editprofile from "../components/Editprofile";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Profile = (props) => {

    const navigate = useNavigate()
    const [isEditPro, setIsEditPro] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const userData = JSON.parse(props.userData)

    useEffect(() => {
        !userData && navigate('/login')
    }, [])

    const handleLogout = () => {
        setIsLoading(true)
        setTimeout(() => {
            localStorage.removeItem('userData')
            setIsLoading(false)
            navigate('/login')
        }, [3000])
    }

    return (
        <>
            <section className="contact-section istok-web-regular">
                <img src="./demo-profile.jpg" />
                <div>
                    <p className="photograper-name">{userData && userData.name}</p>
                    <p className="photograper-city"> <span><IoLocation className="contact-icons red-icon" /></span>{userData && userData.city} , MP</p>
                </div>
                <div className="photograper-contact">
                    <p> <MdOutlinePhoneInTalk className="contact-icons" /><span> +91{userData && userData.phone}</span></p>
                    <p> <MdOutlineMail className="contact-icons " /><span>{userData && userData.email}</span></p>
                </div>
                <FaUserPen className="edit-icon" onClick={() => setIsEditPro(!isEditPro)} />
                <button className="logout-btn" onClick={handleLogout}>
                    <MdLogout /> LogOut
                </button>
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

            {isEditPro ? <Editprofile isEdit={isEditPro} setIsEdit={setIsEditPro} /> : ""}
            {isLoading ? <Loader msg={"Logging Out.."} /> : ""}
        </>
    )
}
export default Profile;