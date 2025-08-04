import React, { useState } from 'react'
import Home from './pages/Home';
import Profile from './pages/Profile';
import Navbar from './component/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import UseState from './pages/30-07/UseState';
import UseEffect from './pages/30-07/UseEffect';
import UseParams from './pages/01-08/UseParams';
import Product from './pages/01-08/Product';
import StyledComponents from './pages/02-08/StyledComponents';
import CreateFruits from './pages/02-08/CreateFruits';
import Greeting from './pages/02-08/Greeting';

function App() {
  const [users, setUsers] = useState(["Virat", "Rohit", "Dhoni"])
  // <Navbar />
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
        <Route path='/use-params' element={<UseParams />} />
        <Route
          path='/product/:productId'
          element={<Product users={users} setUsers={setUsers} />}
        />
        <Route path='/styled-components' element={<StyledComponents />} />
        <Route path='/create-fruits' element={<CreateFruits />} />
        <Route 
          path='/greeting' 
          element={<Greeting name="Aneesh" isLoggedIn={false} />} 
        />
      </Routes>
    </>

  );
}

export default App;