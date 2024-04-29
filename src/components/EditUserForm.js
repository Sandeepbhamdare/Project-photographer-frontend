import { IoIosAddCircle } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const EditUserForm = ({ editUser, onChange, setIsEditPro, handleEdit ,setAddImg}) => {


    return (
        <div className="edit-profile container-center">
            <form>
                <div>
                    <h3>Edit Profile</h3>
                    <IoCloseSharp className="close-icon" onClick={() => setIsEditPro(false)} />
                </div>
                <div className="Img-Inpute">
                    <label htmlFor="imgs"><IoIosAddCircle  /></label>
                    <input type="file" id="imgs" onChange={(e) => setAddImg(e.target.files[0])} />
                    <img src="./demo-profile.jpg" width={"100px"} />
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