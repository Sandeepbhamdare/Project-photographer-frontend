import { useNavigate } from "react-router-dom";
import Review from "./Review";

const HeroSection = () => {

    const navigate = useNavigate()
    const reviews = [
        { author: 'John Doe', content: 'Great product! Highly recommended.' },
        { author: 'Jane Smith', content: 'Excellent service. Will buy again.' },

    ]
    return (

        <>
            <section className="hero-section">
                <div className="istok-web-regular">

                    <div>
                        <h1>HEER</h1>
                        <h5>photography & managements</h5>
                    </div>
                    <h6>"Capturing moments that speak louder than words.
                        Welcome to our world."</h6>

                    <button className="explore-btn" onClick={() => localStorage.get('userData') ? navigate("/search") : navigate('/login')}>Explore</button>
                </div>
                <div className="img-section">
                    <img src="./hero-section-img.jpg" />
                </div>

            </section>
            
            < Review />

        </>
    )
}

export default HeroSection;