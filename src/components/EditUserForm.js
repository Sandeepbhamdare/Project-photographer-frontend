import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import BaseUrl from "../constants";

const EditUserForm = ({setIsEditPro ,setAddImg,setIsLoading,setIsLoadingText}) => {

    const localUserData = localStorage.getItem('userData')
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
        setIsLoadingText('Updaetig profile..')
        const response = await fetch(BaseUrl+'/user/updateProfile', {
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



    return (
        <div className="edit-profile container-center">
            <form>
                <div>
                    <h3>Edit Profile</h3>
                    <IoCloseSharp className="close-icon" onClick={() => setIsEditPro(false)} />
                </div>
              
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
    )
};

export default EditUserForm;