import logo from './logo.svg';
import { useState, useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './components/Home';
import Carts from './components/Carts';
import Navbar from './layouts/Navbar';
import Sneakers from "./components/Sneakers"
import Footer from './layouts/Footer';
import SingleProduct from'./pages/SingleProduct'
import { BrowserRouter,Routes,Route } from 'react-router-dom';



function App() {
  
  return (
    <div className="">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route index element={<Home/>}/>
      <Route path='/Carts' element={<Carts/>}/>
      <Route path='/SingleProduct/:id' element={<SingleProduct/>}/>
      <Route path='/Sneakers' element= {<Sneakers/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
