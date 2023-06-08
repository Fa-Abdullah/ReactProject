import React ,{ Component , useEffect , useRef, useState } from 'react'
import { Link , NavLink,useLocation } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Nav,Container, Navbar as NavbarBs, Button } from 'react-bootstrap';
import './navbar.css'
import "@fortawesome/free-solid-svg-icons";
import '@fortawesome/react-fontawesome';
import whiteCart from '../vector/Group.png';
import redCart from '../vector/red-Group.png';
import blueCart from '../vector/blue-Group.png';
import { useShoppingCart } from './cartContext';
import ShoppingCart from './shoppingCarts';

const Navbar = (props) => {
    const location = useLocation();
    const [url, setUrl] = useState(null);
    useEffect(() => {
      setUrl(location.pathname);
    }, [location]);

    const { openCart,cartQuantity} = useShoppingCart();

    const getActiveClass = (path) => url === path ? 'active' : '';

    const navbarClass = url === '/home' ? 'navbar navhome navbar-expand-lg' : 'navbar secNav shadow-sm navbar-expand-lg';

    const navItem =  url === '/home' ? 'homeItem' : 'secItem';

    const logo =  url === '/home' ? 'homelogo' : 'seclogo';

    // let cart = url === '/home' ? whiteCart : blueCart ;

    // if(openCart){
    //     cart = redCart;
    // }

    const [cart, setCart] = useState(url === '/home' ? whiteCart : blueCart);

    // useEffect(() => {
    //     if (props.isCartOpen) {
    //     setCart(redCart);
    //     } else {
    //     setCart(url === '/home' ? whiteCart : blueCart);
    //     }
    // }, [props.isCartOpen, url]);

    useEffect(() => {
        if (props.isCartOpen) {
          setCart(redCart);
        } else if (url === '/home' && window.innerWidth < 768) {
          setCart(blueCart);
        } else {
            setCart(url === '/home' ? whiteCart : blueCart);
        }
      }, [props.isCartOpen, url]);

    const num = url === '/home' ? 'homenum' : 'secnum' ;

  return (
    <nav className={navbarClass}> 
        <a className={logo} href='/' style={{}}>YourCar</a>
        <button className="navbar-toggler menuBtn" type="button"data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:"750px"}}>
            <ul className="navbar-nav mr-auto">
                <li className={navItem}>
                    <Nav.Link as={NavLink} smooth={true} duration={1000} offset={-70} className={`${navItem} ${getActiveClass('/home')}`} to="/home" >Home</Nav.Link>
                </li>
                <li className={navItem}>
                    <Nav.Link as={NavLink} smooth={true} duration={1000} offset={-70} className={`${navItem} ${getActiveClass('/about')}`} to='/about' >About</Nav.Link>
                </li>
                <li className={navItem}>
                    <Nav.Link as={NavLink} smooth={true} duration={1000} offset={-70} className={`${navItem} ${getActiveClass('/services')}`} to='/services' >Services</Nav.Link>
                </li>
                <li className={navItem}>
                    <Nav.Link as={NavLink} smooth={true} duration={1000} offset={-70} className={`${navItem} ${getActiveClass('/cars')}`} to='/cars' >Cars</Nav.Link>
                </li>
                <li className={navItem}>
                    <Nav.Link as={NavLink} smooth={true} duration={1000} offset={-70} className={`${navItem} ${getActiveClass('/footer')}`} to='/footer' >Contact Us</Nav.Link>
                </li>
                {/* <li className=''>
                    <Nav.Link as={NavLink} className='nav-link disabled-left' to='/testimonials'>#Testimonials</Nav.Link>
                </li> */}
                {/* <li className=''>
                    <Nav.Link as={NavLink} className='nav-link disabled-left' to='/logoes'>#Logoes</Nav.Link>
                </li>
                <li className=''>
                    <Nav.Link as={NavLink} className='nav-link disabled-left' to='/imgs'>#imgs</Nav.Link>
                </li> */}
            </ul>
            <hr/><br/><hr/>
        </div>
        <div className='navBtn' style={{position:"relative",marginLeft:"30px"}}>
                <Button className='cartBtn' style={{}} onClick={() => openCart()}>
                    <img src={cart} alt='' style={{}}/>
                </Button>
                <div className={num} style={{}}>
                        {cartQuantity}
                </div>
        </div>
        <ShoppingCart isOpen={props.isCartOpen}/>
    </nav>
  )
}

export default Navbar;