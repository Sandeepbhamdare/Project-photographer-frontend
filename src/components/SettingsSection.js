import { FaUserPen } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";


const SettingsSection = ({ setIsEditPro, setSettings, setChangePassword, setIsdeleteForm }) => {

    return (
        <ul className="settings-section container-center">
            <li onClick={() => { setIsEditPro(true); setSettings(false) }}><FaUserPen /> Edit Account</li>
            <li onClick={() => { setChangePassword({isChangePassword:true}); setSettings(false) }}><IoMdLock /> Change Password</li>
            <li onClick={() => { setIsdeleteForm(true); setSettings(false) }}><MdDeleteForever /> Delete Account</li>
        </ul>
    )
}

export default SettingsSection;