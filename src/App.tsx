import React, { FunctionComponent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Register from './components/Register';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Home from './components/Home';
import AddCard from './components/AddCard';
import Fav from './components/Fav';
import MyCard from './components/MyCard';
import { addCard } from './services/CardService';
import UpdateCard from './components/UpdateCard';
import SenBox from './components/UserMng';
import CardShow from './components/CardShow';
import UserMng from './components/UserMng';

interface UserInfo {
  email: string | false;
  role: string | false;
}

const App: FunctionComponent = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>(
    JSON.parse(sessionStorage.getItem("userInfo") as string) ||
      { email: false, role: false }
  );

  const [darkMode, setDarkMode] = useState(false); 

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode); 
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}> 
      <ToastContainer />
      <Router>
       <NavBar
  userInfo={userInfo}
  setUserInfo={setUserInfo}
  darkMode={darkMode}
  toggleDarkMode={toggleDarkMode} 
/>

        <Routes>
          <Route path="/" element={<Login setUserInfo={setUserInfo} />} />
          <Route path="/About" element={<About />} />
          <Route path="/MyCard" element={<MyCard userInfo={userInfo} cards={[]} />} />
          <Route path="/Home" element={<Home userInfo={userInfo} cards={[]} />} />
          <Route path="/Register" element={<Register setUserInfo={setUserInfo} />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/UserMng" element={<UserMng />} />
           <Route path="/CardShow/:id" element={<CardShow />} />
          <Route path="/AddCard" element={<AddCard userInfo={userInfo}   />} />
          <Route path="/update/Card/:id" element={<UpdateCard />} />
          <Route path="/Fav" element={<Fav userInfo={userInfo} />} />
        </Routes>
            <Footer userInfo={userInfo}  />
      </Router>
    
    </div>
  );
};

export default App;
