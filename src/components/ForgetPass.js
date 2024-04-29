import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";

const ForgetPassword = ({ setForgetPass, setIsLoading }) => {

    const [emailofForgetPass, setEmailofForgetPass] = useState({ email: "" })

    const onChange = (e) => {
        setEmailofForgetPass({ email: e.target.value })
    }

    const handleForgetPassword = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const response = await fetch('https://photo-grapher-api.vercel.app/auth/forgetPassword', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: emailofForgetPass.email })
        })
        const data = await response.json()
        if (data.status) {

            setIsLoading(false)
            toast.success(data.message)

        } else {
            setIsLoading(false)
            toast.error(data.message)
        }
    }

    return (
        <>
            <div className="edit-profile container-center">
                <form>
                    <div>
                        <h3>Forget Password ?</h3>
                        <IoCloseSharp className="close-icon" onClick={() => setForgetPass({ isForgetPassForm: false })} />
                    </div>

                    <div>
                        <p>Email</p>  <input type="email" name="email" onChange={onChange} value={emailofForgetPass.email} />
                    </div>
                    <button className="edit-save" onClick={handleForgetPassword}>Save</button>
                </form>
            </div>
        </>
    )
}

export default ForgetPassword;