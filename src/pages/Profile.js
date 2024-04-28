import { IoCloseSharp, IoLocation } from "react-icons/io5";
import { MdLogout, MdOutlineMail, MdOutlinePhoneInTalk } from "react-icons/md";
import { FaUserPen } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { ToastContainer, toast } from "react-toastify";

const Profile = () => {

    const localUserData = localStorage.getItem('userData')

    const [isEditPro, setIsEditPro] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    console.log(localUserData)
    useEffect(() => {
        if(!localUserData){
            navigate('/login')
        }
    }, [])

    const userData =localUserData? JSON.parse(localUserData):null;

    const [editUser, setEditUser] = useState(userData?{ name: userData.name, city: userData.city, userId: userData.userId, phone: userData.phone }:
        {name:"",city:"",userId:"",phone:""})

    const onChange = (e) => {
        setEditUser({ ...editUser, [e.target.name]: e.target.value })
    }

    const handleEdit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const response = await fetch('http://localhost:3002/user/updateProfile', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editUser)
        })
        console.log(editUser)
        const data = await response.json()
        console.log(data)
        if (data.status) {
            const updateUser = {
                userId: data.data.userId,
                name: data.data.name,
                email: data.data.email,
                profileUser: data.data.profileUser,
                userType: data.data.userType,
                city: data.data.city,
                phone: data.data.phone
            }
            setIsLoading(false)
            toast.success(data.message)
            localStorage.setItem('userData', JSON.stringify(updateUser))

        } else {
            setIsLoading(false)
            toast.error(data.message)
        }
        setIsEditPro(false)
    }

    const handleLogout = () => {
        setIsLoading(true)
        setTimeout(() => {
            localStorage.removeItem('userData')
            setIsLoading(false)
            navigate('/login')
        }, 3000)
    }

    return (
        <>
            <section className="contact-section istok-web-regular">
                <img src="./demo-profile.jpg" />
                <div>
                    <p className="photograper-name">{ userData?userData.name : "Loading..."}</p>
                    <p className="photograper-city"> <span><IoLocation className="contact-icons red-icon" /></span>{userData ? userData.city : "Loading..."} , MP</p>
                </div>
                <div className="photograper-contact">
                    <p> <MdOutlinePhoneInTalk className="contact-icons" /><span> +91{userData ? userData.phone : "Loading..."}</span></p>
                    <p> <MdOutlineMail className="contact-icons " /><span>{userData ? userData.email : "Loading..."}</span></p>
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

            {/* edit user Form*/}

            {isEditPro &&
                <div className="edit-profile container-center">
                    <form>
                        <div>
                            <h3>Edit Profile</h3>
                            <IoCloseSharp className="close-icon" onClick={() => setIsEditPro(false)} />
                        </div>
                        <img src="./demo-profile.jpg" width={"100px"} />
                        <div>
                            <p>Name</p>  <input type="text" name="name" onChange={onChange} value={editUser.name} />
                        </div>

                        <div>
                            <p>Contact</p> <input type="tel" name="phone" onChange={onChange} value={editUser.phone} />
                        </div>
                        <div>
                            <p>City</p> <input type="text" name="city" onChange={onChange} value={editUser.city} />
                        </div>
                        <button className="edit-save" onClick={handleEdit}>Save</button>
                    </form>
                </div>
            }
            {isLoading ? <Loader msg={"Logging Out.."} /> : ""}
            <ToastContainer />
        </>
    )
}
export default Profile;