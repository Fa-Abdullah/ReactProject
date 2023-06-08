import React, { useRef } from "react";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/navbar";
import Home from "./components/home";
import CarList from "./components/cars.jsx";
import About from "./components/about";
import CartProvider, { useShoppingCart } from "./components/cartContext";
import Services from "./components/services";
import Footer from "./components/footer";
import Testimonials from "./components/testimonials";
import Logoes from "./components/logoes"
import Imgs from "./components/imgs";
import { Navigate , Switch} from 'react-router-dom';
import { Link, Element } from 'react-scroll';
//import joi from 'joi-browser';
import axios from 'axios'
import ShoppingCart from './components/shoppingCarts';


const App = () => {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const carRef = useRef(null);
  const footerRef = useRef(null); 

  const {setIsOpen,isOpen} = useShoppingCart();

  return (
    <CartProvider>
      {/* <> */}
        <Navbar />
      <Container className="container">

       <Routes>
          <Route path="/home" element={<Home ref={homeRef} />}/>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/about" element={<About ref={aboutRef} />}/>
          <Route path="/services" element={<Services ref={servicesRef} />}/>
          <Route path="/cars" element={<CarList ref={carRef} />}/>
          <Route path="/footer" element={<Footer ref={footerRef} />}/>
          <Route path="/testimonials" element={<Testimonials />}/>
          <Route path="/logoes" element={<Logoes/>}/>
          <Route path="/imgs" element={<Imgs/>}/>
       </Routes>

        {/* <React.StrictMode>
          <Home/>
          <About/>
          <Services/>
          <CarList/>
          <Footer/>
        </React.StrictMode> */}
                    
      </Container>
      {/* </> */}
    </CartProvider>
  );
};

export default App;