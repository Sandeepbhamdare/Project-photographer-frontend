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
import { useEffect } from 'react';

function App() {

  const userData = localStorage.getItem('userData')

  return (
    <>

      <Routes>
        <Route path='/' element={<Dashbord />}>
          <Route index element={<HeroSection userData={userData} />} />
          <Route path='service' element={<Service />} />
          <Route path='about' element={<About />} />
         <Route path='search' element={<SearchPhotographer userData={userData} />} />
          <Route path='profile' element={<Profile />} />
          <Route path='contact_photographer' element={<Contactphotographer />} />
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
