import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import"../Slider.css";

const Review = () => {

    return (
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

    )
}

export default Review;