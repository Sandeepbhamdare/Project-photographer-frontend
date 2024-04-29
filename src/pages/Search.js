import { useEffect, useState } from "react";
import Card from "../components/Card";
import { FaCity, FaUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


const SearchPhotographer = () => {

    const navigate = useNavigate()
    const [searchuser, setSearchUser] = useState({ name: "", city: "" })

    useEffect(() => {
        !localStorage.getItem('userData') && navigate('/login')
    }, [])

    const onChage=(e)=>{

    }

    return (
        <>
            <section className="search-section istok-web-regular">
                <form>
                    <div>
                        <p><FaUser className="search-icon" /> </p>
                        <input type="text" placeholder="Enter Name" />
                    </div>
                    <div>
                        <p><FaCity className="search-icon" /></p>
                        <input type="text" placeholder="Enter City" />
                    </div>
                </form>
                <div>
                    <button className="search-btn"> <IoSearch /> Search</button>
                </div>
            </section>

            <section className="card-container">

                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

            </section>
        </>
    )
}

export default SearchPhotographer;