import { useNavigate } from "react-router-dom";

const HeroSection = () => {

    const navigate=useNavigate()

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

                    <button className="explore-btn" onClick={()=>navigate("/search")}>Explore</button>
                </div>
                <div className="img-section">
                    <img src="./hero-section-img.jpg"  />
                </div>

            </section>
        </>
    )
}

export default HeroSection;