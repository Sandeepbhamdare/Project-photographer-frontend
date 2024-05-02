import { MdOutlineMail, MdOutlinePhoneInTalk, MdRateReview } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import Loader from "./Loader";
import { useEffect, useState } from "react";
import ReviewUserForm from "./AddReview";

const Orders = ({ orderList, setOrderList, isLoading, setIsLoading }) => {

    const userData = JSON.parse(localStorage.getItem('userData'))
    const [isReviewAdd, setIsReviewAdd] = useState(false)
    const [reviewText, setReviewText] = useState({ toUserId: "", review: 0, rating: "" })

    console.log(orderList)

    useEffect(() => {
        console.log("orderList changed:", orderList);
    }, [orderList]);

    const handleDeleteOrder = async (delId) => {
        setIsLoading(true)
        const response = await fetch('https://photo-grapher-api.vercel.app/order/deleteBooking', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userId: userData?.userId, bookingId: delId })
        })
        const data = await response.json()
        if (data.status) {
            console.log(data)
            const filterList = orderList.filter(ob => ob.bookingId !== delId)
            setOrderList(filterList)
            toast.success(data.message)
        }
        else {
            toast.error(data.message)
        }
        setIsLoading(false)
    }



    return (
        <>
            <p className="order-head">your orders</p>
            <div className="order-container">
                {
                    orderList?.map((ob, index) => (
                        <div className="order" key={index} >
                            <div className="order-detail1">
                                <img src={ob.userData[0].profileUrl ?? "./default-profile.png"} />
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
                            {userData.userType === 1 ? <> <button className="order-delelte-btn" onClick={() => handleDeleteOrder(ob?.bookingId)}><IoMdTrash /></button>
                                <button className="review-btn " onClick={() => { setIsReviewAdd(true); setReviewText({ toUserId: ob?.toUserId }) }}>Add Review</button></> : ""}
                        </div>
                    ))}
                <p style={{ fontSize: "10px" }}>please reload the page to update to order list</p>
            </div >

            {/* loading stection */}
            {isLoading ? <Loader msg={"Deleting Order"} /> : ""}
            <ToastContainer />

            {/* user Review Form */}
            {isReviewAdd ? <ReviewUserForm setIsReviewAdd={setIsReviewAdd} setIsLoading={setIsLoading} reviewText={reviewText} setReviewText={setReviewText} /> : ""}
        </>
    )
}
export default Orders;