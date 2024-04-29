import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";

const ChangePassword = ({ setIsChangePassword, setIsLoading }) => {

    const localUserData = localStorage.getItem('userData')
    const userData = localUserData ? JSON.parse(localUserData) : null;

    const [changePassword, setChangePassword] = useState({ userId: userData && userData.userId, password: "", newPassword: "" })

    const onChangePassword = (e) => {
        setChangePassword({ ...changePassword, [e.target.name]: e.target.value })
    };

    const handleChangePassword = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const response = await fetch("https://photo-grapher-api.vercel.app/auth/changePassword", {
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
            setIsLoading(false)
            toast.success(data.message)
            localStorage.setItem('userData', JSON.stringify(updateUser))

        } else {
            setIsLoading(false)
            toast.error(data.message)
        }
        setIsChangePassword(false)
    }

    return (
        <div className="edit-profile container-center">
            <form>
                <div>
                    <h3>Chage Password</h3>
                    <IoCloseSharp className="close-icon" onClick={() => setChangePassword(false)} />
                </div>
                <div>
                    <p>Current Password</p>  <input type="text" name="password" value={changePassword.password} onChange={onChangePassword} />
                </div>
                <div>
                    <p>New Password</p> <input type="text" name="newPassword" value={changePassword.newPassword} onChange={onChangePassword} />
                </div>
                <button className="edit-save" onClick={handleChangePassword}>Save</button>
            </form>
        </div>
    )
};

export default ChangePassword;