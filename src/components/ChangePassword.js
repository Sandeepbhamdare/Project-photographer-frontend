import { IoCloseSharp } from "react-icons/io5";

const ChangePassword = ({setChangePassword}) => {

    return (
        <div className="edit-profile container-center">
        <form>
            <div>
                <h3>Chage Password</h3>
                <IoCloseSharp className="close-icon" onClick={() => setChangePassword(false)} />
            </div>
            <div>
                <p>Current Password</p>  <input type="text" name="Cpassword" />
            </div>
            <div>
                <p>New Password</p> <input type="text" name="newPassword" />
            </div>
            <button className="edit-save">Save</button>
        </form>
    </div>
    )
};

export default ChangePassword;