import React /*, { useRef }*/ from "react";
import { Routes, Route/*, Router, BrowserRouter*/ } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/navbar";
import Home from "./components/home";
import CarList from "./components/cars.jsx";
import About from "./components/about";
import CartProvider /*, { useShoppingCart }*/ from "./components/cartContext";
import Services from "./components/services";
import Footer from "./components/footer";
import Testimonials from "./components/testimonials";
import Logoes from "./components/logoes"
import Imgs from "./components/imgs";
import { Navigate /*, Switch*/} from 'react-router-dom';
//import { Link, Element } from 'react-scroll';
//import joi from 'joi-browser';
//import axios from 'axios'
//import ShoppingCart from './components/shoppingCarts';
import Display from "./components/display";


const App = () => {

  //const homeRef = useRef(null);
  //const aboutRef = useRef(null);
  //const servicesRef = useRef(null);
  //const carRef = useRef(null);
  //const footerRef = useRef(null); 

  //const {setIsOpen,isOpen} = useShoppingCart();

  return (
    <CartProvider>
      
        <Navbar />
      <Container className="container">
       
        <Routes>
            <Route path="/" element={<Navigate replace to="/home/#hero" />} />
            <Route path="/home/" element={<Home />}/>
            <Route path="/home" element={<Navigate replace to="/home/#hero" />} />
            <Route path="/reponame" element={<Navigate replace to="/home/#hero" />} />
            <Route path="/ReactProject" element={<Navigate replace to="/home/#hero" />} />
            <Route path="/about" element={<About />}/>
            <Route path="/services" element={<Services />}/>
            <Route path="/cars" element={<CarList />}/>
            <Route path="/footer" element={<Footer />}/>
            <Route path="/testimonials" element={<Testimonials />}/>
            <Route path="/logoes" element={<Logoes/>}/>
            <Route path="/imgs" element={<Imgs/>}/>
            <Route path="/display" element={<Display/>}/>
        </Routes>

       

        {/* <Display /> */}
       
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