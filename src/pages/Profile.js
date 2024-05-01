import { IoLocation } from "react-icons/io5";
import { MdLogout, MdManageAccounts, MdOutlineMail, MdOutlinePhoneInTalk } from "react-icons/md";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { ToastContainer, toast } from "react-toastify";
import SettingsSection from "../components/SettingsSection";
import EditUserForm from "../components/EditUserForm";
import ChangePassword from "../components/ChangePassword";
import Orders from "../components/Orders";
import DeleteForm from "../components/DeleteForm";
import BaseUrl from "../constants";

const Profile = ({ orderList, setOrderList ,handleDeleteOrder }) => {

    const [settings, setSettings] = useState(false)
    const [isEditPro, setIsEditPro] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isLoadingText, setIsLoadingText] = useState("")
    const [isChangePassword, setIsChangePassword] = useState(false)
    const [isdeleteForm, setIsdeleteForm] = useState(false)
    const [addImg, setAddImg] = useState("")

    const localUserData = localStorage.getItem('userData')
    const userData = localUserData ? JSON.parse(localUserData) : null;

    const navigate = useNavigate()

    useEffect(() => {
        if (!localUserData) {
            navigate('/login')
        }
    }, [orderList])


    // const formData = new FormData();
    // formData.append('image', addImg.imgUrl);
    // formData.append('userId', userData && userData.userId);



    const handleLogout = () => {
        setIsLoading(true)
        setTimeout(() => {
            localStorage.removeItem('userData')
            setIsLoading(false)
            navigate('/login')
        }, 3000)
    }

    // const handleSetProfileImg = async () => {
    //     const response = await fetch('http://localhost:3002/user/updateProfileImage', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application-json"
    //         },
    //         body: formData
    //     })
    //     const data = await response.json()
    //     console.log(data)
    //     setAddImg({ isImg: false })
    // } 
    // const handleDeleteOrder = async (id) => {
    //     console.log('handleDeleteOrder clicnked '+userData?.userId);
    //     const response = await fetch(BaseUrl+'/order/deleteBooking', {
    //     method: "DELETE",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({ userId: userData?.userId, bookingId: delId })
    // })
    //     const response = await fetch(BaseUrl + '/order/deleteBooking',
    //      {
    //         method: "DELETE",
    //         headers: {
    //             "Content-Type": "application-json"
    //         },
    //         body: JSON.stringify({ userId: 1008, bookingId: id })
    //     })
    //     const data = await response.json()
    //     console.log(data)
    //     if (data.status) {
    //         toast.success(data.message)
    //     } else {
    //         toast.error(data.message)
    //     }
    //     // setAddImg({ isImg: false })
    // }

    return (
        <>
            <section className="profile-secttion contact-section">
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
                    <SettingsSection setIsEditPro={setIsEditPro} setSettings={setSettings}
                        setChangePassword={setIsChangePassword} setIsdeleteForm={setIsdeleteForm} /> : ""}
            </section>

            {/* Order section */}
            <Orders orderList={orderList} setOrderList={setOrderList} handleDeleteOrder={handleDeleteOrder} />


            {/* edit user Form*/}
            {isEditPro &&
                <EditUserForm setIsEditPro={setIsEditPro} setAddImg={setAddImg} setIsLoading={setIsLoading} setIsLoadingText={setIsLoadingText} />
            }

            {/* change password form */}
            {isChangePassword ?
                <ChangePassword setIsChangePassword={setIsChangePassword} isChangePassword={isChangePassword} setIsLoading={setIsLoading} setIsLoadingText={setIsLoadingText} /> : ""}

            {/* delete account form  */}
            {isdeleteForm ? <DeleteForm setIsdeleteForm={setIsdeleteForm} setIsLoading={setIsLoading} setIsLoadingText={setIsLoadingText} /> : ""}

            {/* loading */}
            {isLoading ? <Loader msg={isLoadingText ?? "Logging Out.."} /> : ""}
            <ToastContainer />
        </>
    )
}
export default Profile;