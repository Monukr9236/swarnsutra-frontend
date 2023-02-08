import React, { Component, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import Login from './Components/Login/Login';
import Cart from './Components/Cart/Cart';
import SignUp from './Components/SignUp/SignUp';
import Page404 from './Components/Page404';
import SingleProduct from './Components/SingleProduct/SingleProduct';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
function App() {
  useEffect(()=>{
    window.alert(`Updated on 01-02-2023, Upcoming updates 05-02-2023`);
  },[])
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
      <Navbar/>
         
         <Routes>
          
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
            <Route path='/cart' element={<Cart/>} />
            <Route path='/aboutus' element={<About/>}/>
            <Route path='/contactus' element={<About/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/*' element={<Page404/>}/>
            
         </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
