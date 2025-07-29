import React from 'react'
import Home from './pages/Home';
import Profile from './pages/Profile';
import Navbar from './component/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';


function App() {
  console.log("Mumbai");
  <Navbar />
  return (
    <>
    <Navbar />
      {/* <Navbar />
      <Home />
      <Profile />
      <h1>Full Stack Developer</h1>
      <h1>Mern Stack</h1> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;