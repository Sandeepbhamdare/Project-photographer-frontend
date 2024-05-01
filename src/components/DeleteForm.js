import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BaseUrl from "../constants";

const DeleteForm = ({ setIsdeleteForm, setIsLoading ,setIsLoadingText }) => {

    const navigate = useNavigate()
    const [delUser, setDelUser] = useState({ email: "", password: "" })

    const onChange = (e) => {
        setDelUser({ ...delUser, [e.target.name]: e.target.value })
    }

    const handleDeleteUser = async (e) => {
        e.preventDefault()
        setIsLoadingText('Deleteting user ..')
        setIsLoading(true)
        const response = await fetch(BaseUrl+'/auth/deleteAccount', {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(delUser)
        })
        const data = await response.json()
        if (data.status) {
            setIsLoading(false)
            localStorage.removeItem('userData')
            toast.success(data.message)
            navigate('/')
        } else {
            setIsLoading(false)
            toast.error(data.message)
        }
        setIsdeleteForm(false)
    }
    return (
        <div className="edit-profile container-center">
            <form>
                <div>
                    <h3>Delete Account</h3>
                    <IoCloseSharp className="close-icon" onClick={() => setIsdeleteForm(false)} />
                </div>
                <div>
                    <p>Email</p>  <input type="email" name="email" value={delUser && delUser.email} onChange={onChange}/>
                </div>
                <div>
                    <p>Password</p> <input type="password" name="password" value={delUser && delUser.password} onChange={onChange} />
                </div>
                <button className="edit-save" onClick={handleDeleteUser}>Save</button>
            </form>
        </div>
    )
}

export default DeleteForm;