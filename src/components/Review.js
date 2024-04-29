import { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "../Slider.css";

const Review = () => {

    const [review, setReview] = useState('');

    const handleChange = (event) => {
        setReview(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Optionally, you can clear the textarea after submitting the review
        setReview('');
    };

    return (
        <>
            <section className="review-section">
                <h1>Review</h1>
                <div className="review-container container-center">
                    <AwesomeSlider>
                        <div className="review">
                            <h1><img src="default-profile.png" width={"50px"} /> Goutam waghe</h1>
                            <p>“best quality videos and photos thankyou”</p>
                        </div>
                        <div className="review">
                            <h1><img src="default-profile.png" width={"50px"} /> Goutam waghe</h1>
                            <p>“best quality videos and photos thankyou”</p>
                        </div>
                        <div className="review">
                            <h1><img src="default-profile.png" width={"50px"} /> Goutam waghe</h1>
                            <p>“best quality videos and photos thankyou”</p>
                        </div>
                    </AwesomeSlider>
                </div>
            </section>
            <section>
                <form className='review-form' >
                    <textarea
                        value={review}
                        onChange={handleChange}
                        placeholder="Write your review here..."
                        rows={20} 
                        cols={50} 
                    />
                    <button className='search-btn' onClick={handleSubmit}>Submit</button>
                </form>
            </section>
        </>
    )
}

export default Review;