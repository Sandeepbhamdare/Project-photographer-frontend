import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import BaseUrl from "../constants";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ChangePassword = ({ setIsPopup ,setIsLoadingText }) => {

    const localUserData = localStorage.getItem('userData')
    const userData = localUserData ? JSON.parse(localUserData) : null;

    const [showPass, setShowpass] = useState({oldPassword:false,newPassword:false})
    const [changePassword, setChangePassword] = useState({ userId: userData && userData.userId, password: "", newPassword: "" })

    const onChangePassword = (e) => {
        setChangePassword({ ...changePassword, [e.target.name]: e.target.value })
    };

    const handleChangePassword = async (e) => {
        e.preventDefault()
        setIsLoadingText('Changing password..')
        setIsPopup({isLoading:true})

        const response = await fetch(BaseUrl+"/auth/changePassword", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(changePassword)
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
            setIsPopup({isLoading:false})
            toast.success(data.message)
            localStorage.setItem('userData', JSON.stringify(updateUser))

        } else {
            setIsPopup({isLoading:false})
            toast.error(data.message)
        }
        setIsPopup({isChangePassword:false})
    }

    return (
        <div className="edit-profile container-center">
            <form>
                <div>
                    <h3>Chage Password</h3>
                    <IoCloseSharp className="close-icon" onClick={() => setIsPopup({isChangePassword:false})} />
                </div>
                <div>
                    <p>Current Password</p>  <input type={showPass.oldPassword ? "text" : "password"} name="password" value={changePassword.password} onChange={onChangePassword} />
                    <span className="edit-password-icon" onClick={() => setShowpass({oldPassword:!showPass.oldPassword})}>{showPass.oldPassword?<FaEye />:<FaEyeSlash />}</span>
                </div>
                <div>
                    <p>New Password</p> <input type={showPass.newPassword ? "text" : "password"} name="newPassword" value={changePassword.newPassword} onChange={onChangePassword} />
                    <span className="edit-password-icon newpass" onClick={() => setShowpass({newPassword:!showPass.newPassword})}>{showPass.newPassword?<FaEye />:<FaEyeSlash />}</span>
                </div>
                <button className="edit-save" onClick={handleChangePassword}>Save</button>
            </form>
        </div>
    )
};

export default ChangePassword;