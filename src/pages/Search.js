import Card from "../components/Card";
import { FaCity, FaUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const SearchPhotographer = () => {

    return (
        <>
            <section className="search-section istok-web-regular">
                <form>
                    <div>
                        <p><FaUser className="search-icon"/> </p>
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