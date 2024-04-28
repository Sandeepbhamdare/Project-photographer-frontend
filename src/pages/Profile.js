import { IoCloseSharp, IoLocation } from "react-icons/io5";
import { MdLogout, MdManageAccounts, MdOutlineMail, MdOutlinePhoneInTalk } from "react-icons/md";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { ToastContainer, toast } from "react-toastify";
import { IoMdLock } from "react-icons/io";
import SettingsSection from "../components/SettingsSection";
import EditUserForm from "../components/EditUserForm";
import ChangePassword from "../components/ChangePassword";
import Orders from "../components/Orders";

const Profile = () => {

    const localUserData = localStorage.getItem('userData')

    const [settings, setSettings] = useState(false)
    const [isEditPro, setIsEditPro] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [changePassword, setChangePassword] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (!localUserData) {
            navigate('/login')
        }
    }, [])

    const userData = localUserData ? JSON.parse(localUserData) : null;

    const [editUser, setEditUser] = useState(userData ?
        { name: userData.name, city: userData.city, userId: userData.userId, phone: userData.phone } :
        { name: "", city: "", userId: "", phone: "" })

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
        const data = await response.json()

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
                    <p className="photograper-name">{userData ? userData.name : "Loading..."}</p>
                    <p className="photograper-city"> <span><IoLocation className="contact-icons red-icon" /></span>{userData ? userData.city : "Loading..."} , MP</p>
                </div>
                <div className="photograper-contact">
                    <p> <MdOutlinePhoneInTalk className="contact-icons" /><span> +91{userData ? userData.phone : "Loading..."}</span></p>
                    <p> <MdOutlineMail className="contact-icons " /><span>{userData ? userData.email : "Loading..."}</span></p>
                </div>
                <MdManageAccounts className="edit-icon" onClick={() => setSettings(!settings)} />
                <button className="logout-btn" onClick={handleLogout}>
                    <MdLogout /> LogOut
                </button>

                {/* Setting section */}

                {settings ?
                    <SettingsSection setIsEditPro={setIsEditPro} setSettings={setSettings} setChangePassword={setChangePassword} /> : ""}
            </section>

            {/* Order section */}
            <Orders />


            {/* edit user Form*/}

            {isEditPro &&
                <EditUserForm editUser={editUser} onChange={onChange} setIsEditPro={setIsEditPro} handleEdit={handleEdit} />
            }
            {changePassword ?
                <ChangePassword setChangePassword={setChangePassword} /> : ""}
            {isLoading ? <Loader msg={"Logging Out.."} /> : ""}
            <ToastContainer />
        </>
    )
}
export default Profile;