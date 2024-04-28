import { IoCloseSharp } from "react-icons/io5";

const EditUserForm = ({editUser,onChange,setIsEditPro,handleEdit}) => {


    return (
        <div className="edit-profile container-center">
            <form>
                <div>
                    <h3>Edit Profile</h3>
                    <IoCloseSharp className="close-icon" onClick={() => setIsEditPro(false)} />
                </div>
                <img src="./demo-profile.jpg" width={"100px"} />
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