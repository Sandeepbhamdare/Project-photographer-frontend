import { MdOutlineMail, MdOutlinePhoneInTalk } from "react-icons/md";

const Orders = () => {

    return (
        <>
            <p className="order-head">your orders</p>
            <div className="order-container">
                <div className="order">
                    <div className="order-detail1">
                        <img src="./default-profile.png" />
                        <p>Bob Jonson</p>
                    </div>
                    <div className="order-detail2">
                        <p><MdOutlineMail className="order-icons" /> <span> bob@gamil.com</span></p>
                        <p><MdOutlinePhoneInTalk className="order-icons" /> <span> 6263298305</span></p>
                    </div>
                    <p className="time-date">20/Jan/2020  2:00AM</p>
                </div>
                <div className="order">
                    <div className="order-detail1">
                        <img src="./default-profile.png" />
                        <p>Bob Jonson</p>
                    </div>
                    <div className="order-detail2">
                        <p><MdOutlineMail className="order-icons" /> <span> bob@gamil.com</span></p>
                        <p><MdOutlinePhoneInTalk className="order-icons" /> <span> 6263298305</span></p>
                    </div>
                    <p className="time-date">20/Jan/2020  2:00AM</p>
                </div>
            </div >
        </>
    )
}
export default Orders;