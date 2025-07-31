import React from 'react'
import Home from './pages/Home';
import Profile from './pages/Profile';
import Navbar from './component/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import UseState from './pages/30-07/UseState'; 
import UseEffect from './pages/30-07/UseEffect';

function App() {
  console.log("Mumbai");
  <Navbar />
  return (
    <>
    <Navbar /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/use-state' element={<UseState />} />
        <Route path='/use-effect' element={<UseEffect />} />
      </Routes>
    </>
  );
}

export default App;