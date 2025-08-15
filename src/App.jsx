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
import DynamicStyles from './pages/03-08/DynamicStyles';
import PageNotFound from './pages/06-08/pageNotFound';
import FetchData from './pages/06-08/FetchData';
import Mycart from './pages/08-08/MyCart'; 
import ProductInfo from './pages/08-08/ProductInfo';
import ProductDetail from './pages/08-08/Productdetail';
import UseMemo from './pages/10-08/UseMemo';
import UseCallback from './pages/10-08/UseCallback';
import UseRef from './pages/13-08/UseRef';
import UseReducer from './pages/13-08/UseReducer';

function App() {
  const [users, setUsers] = useState(["Virat", "Rohit", "Dhoni"])
  // <Navbar />
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
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
        <Route path='/dynamic-styles' element={<DynamicStyles />} />
        <Route path='/*' element={<PageNotFound />} />
        <Route path='/fetchdata' element={<FetchData />} />
        <Route path='/mycart' element={<Mycart />} />
        <Route path='/productinfo/:productId' element={<ProductInfo />} />
        <Route path='/productdetail' element={<ProductDetail />} />
        <Route path='/use-memo' element={<UseMemo />} />
        <Route path='/use-callback' element={<UseCallback />} />
        <Route path='/use-ref' element={<UseRef />} />
        <Route path='/use-reducer' element={<UseReducer />} />
      </Routes>
    </div>

  );
}

export default App;