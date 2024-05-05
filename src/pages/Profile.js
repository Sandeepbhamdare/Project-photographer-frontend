import { IoLocation } from "react-icons/io5";
import { MdLogout, MdManageAccounts, MdOutlineMail, MdOutlinePhoneInTalk } from "react-icons/md";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { ToastContainer } from "react-toastify";
import SettingsSection from "../components/SettingsSection";
import EditUserForm from "../components/EditUserForm";
import ChangePassword from "../components/ChangePassword";
import Orders from "../components/Orders";
import DeleteForm from "../components/DeleteForm";
import BaseUrl from "../constants";
import { FaPlus } from "react-icons/fa6";

const Profile = ({ orderList, setOrderList, handleDeleteOrder, handleGetOrderList }) => {

    const [isPopup, setIsPopup] = useState({ settings: false, isEditPro: false, isLoading: false, isImgAdd: false, isChangePassword: false,isdeleteForm:false })
    const [isLoadingText, setIsLoadingText] = useState("")
    const [addImg, setAddImg] = useState(" ./default-profile.png")

    const localUserData = localStorage.getItem('userData')
    const userData = localUserData ? JSON.parse(localUserData) : null;

    const navigate = useNavigate()

    useEffect(() => {

        if (!localUserData) {
            navigate('/login')
        } else {
            handleGetOrderList()
        }
    }, [])


    const handleLogout = () => {
        setIsPopup({isLoading:true})
        setTimeout(() => {
            localStorage.removeItem('userData')
            setIsPopup({ isLoading: false })
            navigate('/login')
        }, 3000)
    }

    const onChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAddImg(reader.result);
            };
            reader.readAsDataURL(file);
            setAddImg(file);
            setIsPopup({ setIsImgAdd: true })
        }
    };

    const handleSetProfileImg = async () => {
        const formData = new FormData();
        formData.append("image", addImg);
        formData.append("userId", userData?.userId);
        const response = await fetch(BaseUrl+'/user/updateProfileImage', {
            method: "POST",
            body: formData
        })
        const data = await response.json()
        setIsPopup({ setIsImgAdd: false })
    }
    console.log(addImg)
    return (
        <>
            <section className="profile-secttion contact-section">
                <div className="Img-Inpute">
                    <label htmlFor="imgs"><FaPlus /></label>
                    <input type="file" id="imgs" onChange={(e) => onChange(e)} />
                    <img src={userData && userData.profileUrl ? userData.profileUrl : addImg} width={"170px"} height={"170px"} />

                    {isPopup.isImgAdd ? <button onClick={handleSetProfileImg}>Upload</button> : ""}

                </div>
                {/* <img src="./demo-profile.jpg" /> */}
                <div>
                    <p className="photograper-name">{userData ? userData.name : "Loading..."}</p>
                    <p className="photograper-city"> <span><IoLocation className="contact-icons red-icon" /></span>{userData ? userData.city : "Loading..."} , MP</p>
                </div>
                <div className="photograper-contact">
                    <p> <MdOutlinePhoneInTalk className="contact-icons" /><span> +91{userData ? userData.phone : "Loading..."}</span></p>
                    <p> <MdOutlineMail className="contact-icons " /><span>{userData ? userData.email : "Loading..."}</span></p>
                </div>
                <MdManageAccounts className="edit-icon" onClick={() => setIsPopup({ settings: true })} />
                <button className="logout-btn" onClick={handleLogout}>
                    <MdLogout /> LogOut
                </button>

                {/* Setting section */}
                {isPopup.settings ?
                    <SettingsSection setIsPopup={setIsPopup} /> : ""}
            </section>

            {/* Order section */}
            <Orders orderList={orderList} setOrderList={setOrderList} handleDeleteOrder={handleDeleteOrder} isPopup={isPopup} setIsPopup={setIsPopup}  />


            {/* edit user Form*/}
            {isPopup.isEditPro &&
                <EditUserForm  setIsPopup={setIsPopup} setIsLoadingText={setIsLoadingText} />
            }

            {/* change password form */}
            {isPopup.isChangePassword ?
                <ChangePassword setIsPopup={setIsPopup} setIsLoadingText={setIsLoadingText} /> : ""}

            {/* delete account form  */}
            {isPopup.isdeleteForm ? <DeleteForm setIsPopup={setIsPopup} setIsLoadingText={setIsLoadingText} /> : ""}

            {/* loading */}
            {isPopup.isLoading ? <Loader msg={"Loading..."} /> : ""}
            {isPopup.isLoading ? <Loader msg={isLoadingText ?? "Logging Out.."} /> : ""}
            <ToastContainer />
        </>
    )
}
export default Profile;