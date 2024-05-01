import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashbord from './pages/Dashbord';
import HeroSection from './components/HeroSection';
import Service from './pages/Services';
import About from './pages/About';
import Profile from './pages/Profile';
import SearchPhotographer from './pages/Search';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';


function App() {

  const localUserData = localStorage.getItem('userData')
  const userData = localUserData ? JSON.parse(localUserData) : null;

  const [searchuser, setSearchUser] = useState({ userId: userData ? userData.userId : "", query: "", })
  const [photoGrapherList, setPhotoGrapherList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [orderList, setOrderList] = useState([])


  useEffect(() => {
    if (!userData === null) {
      handleGetOrderList()
    }
  }, [])


  const onChage = (e) => {
    setSearchUser({ ...searchuser, [e.target.name]: e.target.value })
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const response = await fetch("https://photo-grapher-api.vercel.app/user/getUsers", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(searchuser)
    })
    const data = await response.json()
    if (data.status) {
      const filteredPhotoGrapherList = data.data.filter(photographer => photographer.userId !== userData.userId);
      setPhotoGrapherList(filteredPhotoGrapherList);

      const filteredOrderPhotoGrapherList = filteredPhotoGrapherList.filter(photographer => !orderList.some(order => order.toUserId === photographer.userId));
      setPhotoGrapherList(filteredOrderPhotoGrapherList)
    }
    setIsLoading(false)
  }

  const handleGetOrderList = async () => {
    const response = await fetch('https://photo-grapher-api.vercel.app/order/allBooking', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userId: userData?.userId })
    })
    const data = await response.json()
    if (data.status) {
      setOrderList(data.data)
    } else {
      console.log(data)
    }
  }




  return (
    <>

      <Routes>
        <Route path='/' element={<Dashbord />}>
          <Route index element={<HeroSection />} />
          <Route path='service' element={<Service />} />
          <Route path='about' element={<About />} />
          <Route path='search' element={<SearchPhotographer onChage={onChage} handleSearch={handleSearch} searchuser={searchuser} photoGrapherList={photoGrapherList} isLoading={isLoading} orderList={orderList} setOrderList={setOrderList} />} />
          <Route path='profile' element={<Profile orderList={orderList} setOrderList={setOrderList} isLoading={isLoading} />} />
        </Route>

        {!userData ? <>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </> : ""}
      </Routes>
    </>
  );
}

export default App;
