import React ,{ Component , useEffect , useRef, useState } from 'react'
import { Link , NavLink , useLocation } from 'react-router-dom';
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
import menubar from '../vector/Vectormenu.png'
import About from './about';

const Navbar = (props) => {
  const location = useLocation();
  const [url, setUrl] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setUrl(window.location.pathname);
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    if(url==='/' || url === '/home/' || url === '/home'){
      setUrl('/home/#hero')
    }
  }, [url]);
  
    const {isOpen,openCart,cartQuantity} = useShoppingCart();

    const getActiveClass = (path) => {
      if (location.pathname === path || location.pathname.startsWith(path + '/')) {
        return 'active';
      } else {
        return '';
      }
    };

    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (menuItem) => {
      setActiveItem(menuItem);
    };

    // const navbarClass = top === 0 ? 'navbar navhome navbar-expand-lg' : 'navbar secNav shadow-sm navbar-expand-lg';
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScrollY = () => {
        setScrollY(window.scrollY);
      };

      window.addEventListener('scroll', handleScrollY);

      return () => {
        window.removeEventListener('scroll', handleScrollY);
      };
    }, []);
    
    const navItem =  scrollY === 0  ? 'homeItem' : 'secItem';

    const logo =  scrollY === 0  ? 'homelogo' : 'seclogo';

    const [cart, setCart] = useState(scrollY === 0  ? whiteCart : blueCart);

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return (() => window.removeEventListener("scroll", handleScroll));
    }, []);
  
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);    
      } else {
        setIsSticky(false); 
      } 
    };

    useEffect(() => {
        if (isOpen) {
            setCart(redCart);
            setnum('activenum')
        } else if ( window.innerWidth < 768) {
            setCart(blueCart);
        } else {
            setCart(scrollY === 0  ? whiteCart : blueCart);
        }
      }, [isOpen, scrollY]);

    const [num , setnum] = useState('') 
    // let num = scrollY === 0 ? 'homenum' : 'secnum' ;

      useEffect(() => {
        if (window.innerWidth < 768 || scrollY !== 0){
          setnum('secnum');
        }else if (scrollY === 0){
          setnum('homenum');
        }
      }, [scrollY, num])

    const [showMenu, setShowMenu] = useState(false);

    const handleClickScroll = () => {
      const element = document.getElementById('about');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const cartClick = () => {
      // setCart(redCart);
      // setnum('activenum');
      openCart();
    }

    const heroActive = url === '/home/#hero' ? 'active' : navItem ;
    const aboutvActive = url === '/home/#about' ? 'active' : navItem ;
    const servActive = url === '/home/#services' ? 'active' : navItem ;
    const carsActive = url === '/home/#cars' ? 'active' : navItem ;
    const footervActive = url === '/home/#footer' ? 'active' : navItem ;

    console.log(url)
    
  return (
    <Nav className={`${scrollY === 0 ? 'navbar navhome navbar-expand-lg' : 'navbar secNav shadow-sm navbar-expand-lg'} ${isSticky && "sticky"}`}> 
        <a className={logo} href='/' style={{}}>YourCar</a>
        <button className="navbar-toggler menuBtn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShowMenu(!showMenu)}>
            <img src={menubar} alt='' />
        </button>

        <div class="offcanvas-start menu" style={{ display: showMenu ? 'block' : 'none' }}>
        <div class="offcanvas-body minMenu">
          <ul className="navbar-nav mr-auto">
          <li>
                <Nav.Link as={NavLink} className={heroActive} to={''} 
                onClick={(e) => {e.preventDefault(); window.location.replace('/home/#hero'); setShowMenu(false); setUrl('/home/#hero')}}>
                  Home
                </Nav.Link>
            </li>
            <li>
                <Nav.Link as={NavLink} className={aboutvActive} to={''} 
                onClick={(e) => {setShowMenu(false); e.preventDefault(); window.location.replace('/home/#about'); setUrl('/home/#about')}}>
                  About
                </Nav.Link>
            </li>
            <li>
                <Nav.Link as={NavLink} className={servActive} to={''} 
                onClick={(e) => {setShowMenu(false); e.preventDefault(); window.location.replace('/home/#services'); setUrl('/home/#services')}}>
                  Services
                </Nav.Link>
            </li>
            <li>
                <Nav.Link as={NavLink} className={carsActive} to={''} 
                onClick={(e) => {setShowMenu(false); e.preventDefault(); window.location.replace('/home/#cars'); setUrl('/home/#cars')}}>
                  Cars
                </Nav.Link>
            </li>
            <li>
                <Nav.Link as={NavLink} className={footervActive} to={''} 
                onClick={(e) => {setShowMenu(false); e.preventDefault(); window.location.replace('/home/#footer'); setUrl('/home/#footer')}}>
                  Contact
                </Nav.Link>
            </li>
          </ul>
        </div>
      </div>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:"750px"}}>
            <ul className="navbar-nav mr-auto">
                <li className={navItem}>
                    <Nav.Link as={NavLink} onClick={(e) => { e.preventDefault(); window.location.replace('/home/#hero'); setUrl('/home/#hero')}} 
                    className={heroActive} to={''} href='/home/#hero' >
                      Home
                    </Nav.Link>
                </li>
                <li className={navItem}>
                <Nav.Link as={NavLink} onClick={(e) => { e.preventDefault(); window.location.replace('/home/#about'); setUrl('/home/#about')}} 
                className={aboutvActive} to={''} href='/home/#about' >
                  About
                </Nav.Link>
                </li>
                <li className={navItem}>
                    <Nav.Link as={NavLink} onClick={(e) => { e.preventDefault(); window.location.replace('/home/#services'); setUrl('/home/#services')}} 
                    className={servActive} to={''} href='/home/#services' >
                      Services
                    </Nav.Link>
                </li>
                <li className={navItem}>
                    <Nav.Link as={NavLink} onClick={(e) => { e.preventDefault(); window.location.replace('/home/#cars'); setUrl('/home/#cars')}} 
                    className={carsActive} to={''} href='/home/#cars' >
                      Cars
                    </Nav.Link>
                </li>
                <li className={navItem}>
                    <Nav.Link as={NavLink} onClick={(e) => { e.preventDefault(); window.location.replace('/home/#footer'); setUrl('/home/#footer')}} 
                    className={footervActive} to={''} href='/home/#footer' >
                      Contact Us
                    </Nav.Link>
                </li>
            </ul>
          </div> 
        <div className='navBtn' style={{position:"relative",marginLeft:"30px"}}>
                <Button className='cartBtn' style={{}} onClick={cartClick}>
                    <img src={cart} alt='' style={{}}/>
                </Button>
                <div className={num} style={{}}>
                        {cartQuantity}
                </div>
        </div>
    </Nav>
  )
}

export default Navbar;