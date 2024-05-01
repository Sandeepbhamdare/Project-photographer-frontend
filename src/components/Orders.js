import { MdOutlineMail, MdOutlinePhoneInTalk } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import Loader from "./Loader";
import { useEffect } from "react";

const Orders = ({ orderList, setOrderList, handleDeleteOrder, isLoading }) => {

  useEffect(()=>{
    console.log("orderList changed:", orderList);
}, [orderList]);

    console.log(orderList)
    return (
        <>
            <p className="order-head">your orders</p>
            <div className="order-container">
                {
                    orderList?.map((ob, index) => (
                        <div className="order" key={index} >
                            <div className="order-detail1">
                                <img src={ob.userData[0].profileUrl??"./default-profile.png"}/>
                                <p>{ob.userData[0].name}</p>
                            </div>
                            <div className="order-detail2">
                                <p><MdOutlineMail className="order-icons" /> <span>{ob.userData[0].email}</span></p>
                                <p><MdOutlinePhoneInTalk className="order-icons" /> <span> {ob.userData[0].phone}</span></p>
                            </div>
                            <p className="time-date">
                                {new Date(ob.createdAt).toLocaleDateString()}{" "}
                                {new Date(ob.createdAt).toLocaleTimeString()}
                            </p>
                            <button className="order-delelte-btn" onClick={() => handleDeleteOrder(ob.bookingId)}><IoMdTrash /></button>
                        </div>
                    ))}
            </div >

            {isLoading ? <Loader msg={"Deleting Order"} /> : ""}
            <ToastContainer />
        </>
    )
}
export default Orders;