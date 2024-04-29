import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashbord from './pages/Dashbord';
import HeroSection from './components/HeroSection';
import Service from './pages/Services';
import About from './pages/About';
import Profile from './pages/Profile';
import SearchPhotographer from './pages/Search';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Contactphotographer from './pages/Contactphotographer';
import { useState } from 'react';


function App() {

  const localUserData = localStorage.getItem('userData')
    const userData = localUserData ? JSON.parse(localUserData) : null;
  const [searchuser, setSearchUser] = useState({ userId: userData ? userData.userId : "", query: "", })
  const [photoGrapherList, setPhotoGrapherList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  


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
  console.log(data)
  if (data.status) {
      setPhotoGrapherList(data.data)

  }
  setIsLoading(false)
}

  return (
    <>

      <Routes>
        <Route path='/' element={<Dashbord />}>
          <Route index element={<HeroSection  />} />
          <Route path='service' element={<Service />} />
          <Route path='about' element={<About />} />
         <Route path='search' element={<SearchPhotographer onChage={onChage} handleSearch={handleSearch}  searchuser={searchuser} photoGrapherList={photoGrapherList} isLoading={isLoading}/>} />
          <Route path='profile' element={<Profile />} />
          <Route path='contact_photographer/:userId' element={<Contactphotographer photoGrapherList={photoGrapherList}  />} />
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
