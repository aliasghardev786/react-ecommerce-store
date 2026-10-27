import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Shoes from './assets/Shoes.jpg'
import Headphone from './assets/Headphone.jpg'
import Watch from './assets/Watch.jpg'
import Backpack from './assets/Backpack.jpg'
import Perfume from './assets/Perfume.jpg'
import Makeup from './assets/Makeup.jpg'
import HardBall from './assets/HardBall.jpg'
import Glasses from './assets/Glasses.jpg'
import Cart from './components/Cart'
import Footer from './components/Footer';
import About from './components/About';


  function App() {
    const[cart,setCart]=useState([]);
    let addToCart=(product)=>{
      setCart((oldCart)=>[...oldCart,product]);
    }


    function removeFromCart(indexToRemove) {
  setCart((oldCart) =>
    oldCart.filter((_, index) => index !== indexToRemove)
  )}

  return (
     <>
              <Navbar cartCount={cart.length}/>
              <Routes>
                <Route path='/' element={
                  <>
                    <Hero/>
                     <Products onAddToCart={addToCart}/>
                     <Footer/>
                  </>
                }/>
  
           <Route path='/Cart'  element={<Cart  cart={cart} onRemove={removeFromCart} />}  />
           <Route path='/about' element={<About/>}/>
           

    </Routes>

    </>
  );
}

export default App




      
   