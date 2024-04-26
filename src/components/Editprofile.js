import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Editprofile = () => {

    
   
    return (
        <>
            <div className="edit-profile container-center">
                <form>
                    <div>
                        <h3>Edit Profile</h3>
                        <IoCloseSharp className="close-icon"  />
                    </div>
                    <img src="./demo-profile.jpg" width={"100px"} />
                    <div>
                        <p>Name</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>Email</p>
                        <input type="email" />
                    </div>
                    <div>
                        <p>Contact</p>
                        <input type="tel" />
                    </div>
                    <div>
                        <p>City</p>
                        <input type="text" />
                    </div>
                    <button className="edit-save">Save</button>
                </form>
            </div>
        </>
    )
}
export default Editprofile;