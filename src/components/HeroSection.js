import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import 'react-awesome-slider/dist/styles.css';
import "../Slider.css";
import AwesomeSlider from 'react-awesome-slider';
import { IoMdStar, IoMdTrash } from "react-icons/io";
import BaseUrl from "../constants";

const HeroSection = () => {

    const navigate = useNavigate()

    const userData = JSON.parse(localStorage.getItem('userData'))
    const [reviewList, setReviewList] = useState([]);

    useEffect(() => {
        if(userData)  getAllReview()
    }, [])

    const getAllReview = async () => {
        const response = await fetch(BaseUrl+"/user/getAllReview", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId: userData?.userId })
        })
        const data = await response.json()
        if (data.status) {
            setReviewList(data.data)
        } else {
            console.log(data.message)
        }
    }

    // Function to generate star icons based on rating
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<IoMdStar key={i} className="star" />);
        }
        return stars;
    };


    // const handleDeleteReview = async (rId) => {
        // const response = await fetch(BaseUrl+"/user/deleteReview", {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ userId: userData?.userId, reviewId: rId })
    //     })
    //     const data = await response.json()
    //     if (data.status) {
    //         setReviewList(data.data)
    //     } else {
    //         console.log(data.message)
    //     }
    // }

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

                    <button className="explore-btn" onClick={() => userData ? navigate("/search") : navigate('/login')}>Explore</button>
                </div>
                <div className="img-section">
                    <img src="./hero-section-img.jpg" />
                </div>

            </section>

            {(userData&&userData.userType === 2) ?
                <section className="review-section">
                    <h1>Review</h1>
                    <div className="review-container container-center">
                        <AwesomeSlider>
                            {reviewList?.map((ob, index) => (
                                <div className="review" key={index}>

                                    <button className="review-delete-btn" ><IoMdTrash /></button>

                                    <h1><img src="default-profile.png" width={"50px"} /> {ob.userData[0].name}</h1>
                                    <p className="rating">{renderStars(ob.rating)}</p>
                                    <p>“{ob.review}”</p>
                                </div>
                            ))}
                        </AwesomeSlider>
                    </div>
                </section> : ""
            }
        </>
    )
}

export default HeroSection;