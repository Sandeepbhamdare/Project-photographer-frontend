import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import BaseUrl from "../constants";

const ReviewUserForm = ({setIsEditPro ,setAddImg,setIsLoading,setIsLoadingText}) => {

    const localUserData = localStorage.getItem('userData')
    const userData = localUserData ? JSON.parse(localUserData) : null;


    const [reviewText, setEditUser] = useState("")

        const onChange = (e) => {
            setEditUser(e.target.value)
        }

    const handleEdit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setIsLoadingText('Updaetig profile..')
        const response = await fetch(BaseUrl+'/user/reviewUser', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userId:userData?.userId,toUserId:1008,review:review})
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
                {/* <div className="Img-Inpute">
                    <label htmlFor="imgs"><IoIosAddCircle  /></label>
                    <input type="file" id="imgs" onChange={(e) => setAddImg(e.target.files[0])} />
                    <img src="./demo-profile.jpg" width={"100px"} />
                </div> */}
                <div>
                    <p>Name</p>  <input type="text" name="review" onChange={onChange} value={reviewText} />
                </div>
                <button className="edit-save" onClick={handleEdit}>Save</button>
            </form>
        </div>
    )
};

export default EditUserForm;