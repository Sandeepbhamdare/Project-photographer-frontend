import { IoCloseSharp } from "react-icons/io5";

const DeleteForm = ({setIsdeleteForm}) => {

    return (
        <div className="edit-profile container-center">
            <form>
                <div>
                    <h3>Delete Account</h3>
                    <IoCloseSharp className="close-icon" onClick={() => setIsdeleteForm(false)} />
                </div>
                <div>
                    <p>Email</p>  <input type="email" name="email" />
                </div>
                <div>
                    <p>Password</p> <input type="text" name="password" />
                </div>
                <button className="edit-save">Save</button>
            </form>
        </div>
    )
}

export default DeleteForm;