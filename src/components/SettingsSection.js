import { FaUserPen } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";


const SettingsSection = ({ setIsPopup}) => {

    return (
        <ul className="settings-section container-center">
            <li onClick={() => { setIsPopup({ isEditPro: true, settings: false }) }}><FaUserPen /> Edit Account</li>
            <li onClick={() => { setIsPopup({ isChangePassword: true, settings: false }) }}><IoMdLock /> Change Password</li>
            <li onClick={() => { setIsPopup({ isdeleteForm: true, settings: false }) }}><MdDeleteForever /> Delete Account</li>
        </ul>
    )
}

export default SettingsSection;