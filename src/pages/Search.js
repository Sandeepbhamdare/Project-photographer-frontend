import { useEffect } from "react";
import { MdVideoCameraFront } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Card from "../components/Card";
import { ToastContainer } from "react-toastify";

const SearchPhotographer = ({ handleSearch, onChage, searchuser, photoGrapherList, isLoading, orderList }) => {

    const navigate = useNavigate()

    useEffect(() => {
        !localStorage.getItem('userData') && navigate('/login')
    }, [])

    return (
        <>
            <section className="search-section ">
                <form>
                    <div>
                        <p>< MdVideoCameraFront className="search-icon" /></p>
                        <input type="text" placeholder="Search By Name/city" name="query" value={searchuser.query} onChange={onChage} />
                    </div>
                </form>
                <div>
                    <button className="search-btn" onClick={handleSearch} > <IoSearch /> Search</button>
                </div>
            </section>

            {photoGrapherList.length === 0 ? <p className="alert">No Photographer Found !</p> :
                <section className="card-container">
                    {photoGrapherList.map((ob, index) => (
                        <Card key={index} name={ob.name} city={ob.city} userId={ob.userId} profileUrl={ob.profileUrl} email={ob.email} phone={ob.phone} orderList={orderList} />
                    ))}
                </section>
            }

            {/* loading */}
            {isLoading ? <Loader msg={"Searching Photographer"} /> : ""}
            <ToastContainer />
        </>
    )
}

export default SearchPhotographer;