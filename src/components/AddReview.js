import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import BaseUrl from "../constants";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ReviewUserForm = ({ setIsReviewAdd, setIsLoading, reviewText, setReviewText }) => {

    const localUserData = localStorage.getItem('userData')
    const userData = localUserData ? JSON.parse(localUserData) : null;

    const handleAddReview = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const response = await fetch(BaseUrl + "/user/reviewUser", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId: userData.userId, toUserId: reviewText?.toUserId, review: reviewText?.review, rating: reviewText?.rating })
        })
        const data = await response.json()
        if (data.status) {
            toast.success(data.message)
        } else {
            console.log(data)
            toast.error(data.message)
        }
        setIsReviewAdd(false)
        setIsLoading(false)
    }

    return (
        <div className="edit-profile container-center">
            <form>
                <div>
                    <h3>Review</h3>
                    <IoCloseSharp className="close-icon" onClick={() => setIsReviewAdd(false)} />
                </div>
                <div>

                    <div className="review-star container-center ">
                        <span>Rating</span>
                        <Rating
                            style={{ maxWidth: 150 }}
                            value={reviewText.rating}
                            onChange={(newValue) => { setReviewText({ ...reviewText, rating: newValue }) }}
                        />
                    </div>
                    <textarea className="review-inputs" type="text" cols={50} rows={10} onChange={(e)=>setReviewText({...reviewText,review:e.target.value})} value={reviewText.review} ></textarea>
                </div>
                <button className="edit-save" onClick={handleAddReview}>Add Review</button>
            </form>
        </div>
    )
};

export default ReviewUserForm;