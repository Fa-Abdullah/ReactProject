import React /*,{ useState }*/ from 'react'
import backgroundImage from '../carsImgs/background.png';
import './home.css'
//import { Link } from 'react-router-dom';
import About from './about';
import Services from './services';
import CarList from './cars';
import Imgs from './imgs';
import Testimonials from './testimonials';
import Logoes from './logoes';
import Footer from './footer';
//import { Button, Nav } from 'react-bootstrap';

const Home = () => {
 
  //const [showcars, setShowcars] = useState(false);
  
  return (
    <React.Fragment>
      <div id='hero' className='homeCon'  style={{}}>
      <div className='homeminCon' style={{backgroundImage:`url(${backgroundImage})`,}}>
       <div className='pa1Con' style={{}}>
        <p className='pa1' style={{}}>
            Find the perfect car <br/>for you at YourCar.<br/><br/><br/>
        </p>
       </div>
        <div className='.pa2Con' style={{}}>
          <p className='pa2' style={{}}>
              We offer a wide range of 
              cars that cater to your 
              needs and budget. Visit 
              us today and drive away 
              with your dream car!<br/>
          </p>
          </div>
          <div className='btnDivHome' style={{}}>
            <div className='homebtn' onClick={(e) => {e.preventDefault(); window.location.replace("/home/#cars")}}>
              <span>Discover ↗</span>
            </div>
          </div>     
      </div>
          <React.StrictMode>
            <About/>
            <Services/>
            <CarList/>
            <Imgs/>
            <Testimonials/>
            <Logoes/>
            <Footer/>
          </React.StrictMode>
      </div>

    </React.Fragment>

  )
}

export default Home;