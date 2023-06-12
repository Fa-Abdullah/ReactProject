import React ,{ useState } from 'react';
import insta from '../carsImgs/insta.png';
import facebook from '../carsImgs/face.png';
import twitter from '../carsImgs/twitter.png';
import locatin from '../carsImgs/phone8.png';
import phone from '../carsImgs/phone.png';
import email from '../carsImgs/email.png';
import Testimonials from './testimonials';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPenNib } from '@fortawesome/free-solid-svg-icons'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import Joi from "joi-browser"
import './footer.css';
import { useShoppingCart } from './cartContext';

const Footer = (props) => {

  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSaveName = () => {
    localStorage.setItem('name', name);
  };

  const savedName = localStorage.getItem('name');
  
  // if (document.querySelector('#footer').getBoundingClientRect().top <= 200) {
  //   return null;  
  // }

  return (
    <React.Fragment>
      <div className='row footCont' id='footer' style={{}}>
      {/* 1 */}
      <div className='col focon1' style={{}}>
        <p className='titlecol1' style={{}}>
          YourCar<br/><br/>
        </p>
        <p className='p1' style={{}}>
          We are known for luxurious and <br/>
          premium chaffeur services <br/>
          worldwide. We are simply the <br/>
          best<br/>
          you can find.<br/><br/>
          we are dedicated to providing <br/>
          our customers with a first-class <br/>
          car buying, selling, and renting <br/>
          experience.<br/><br/><br/>
        </p>
      </div>
          {/* 2 */}
      <div className='col focon2' style={{}}>
          <p className='title2' style={{}}>
            News Letter<br/><br/><br/><br/>
          </p>
          <p className='p2'>
            Subscribe to our news letter for 
            updates, news and exclusive offers<br/>
          </p>
          <div style={{}}>
          {/* value={this.state.name} */}
            <div className='incon'>
              <input className='input' name='name' value={name} onChange={handleNameChange} onSaveName={handleSaveName}  type='text' placeholder='Email' style={{}}/>
              <button className='footerbtn' type='submit' style={{}} onClick={handleSaveName}>
                Subscribe
              </button>
            </div>
          </div>
          <br/><br/> 
      </div>
            {/* 3 */}
      <div className='col con3' style={{}}>
          <p className='title3' style={{}}> 
            Contact<br/><br/>
          </p>
          <div className='minCon3'>
            <div className='d-flex' style={{}}>
            <p style={{}}>
              <img className='location' src={locatin} alt='' style={{}}/>
            </p>  
              <p>
                2038 2nd Avenue, <br/>
                Las Vegas, United States
              </p>
            </div>
            <div style={{display:"flex"}}>
              <p>
              <img className='phone' src={phone} alt='' style={{}}/>
              </p>
              <p>
              01444773421423 <br/>
              01477678449405
              </p>
            </div>
            <div style={{display:"flex"}}>
                <p>
                <img className='email' src={email} alt='' style={{}}/>
                </p>
                <p>
                info@YourCar.com
                </p>      
            </div>
          </div>
      </div>
      {/* end */}
      <div className='media' style={{}}>
            <img className='mediaImg image' src={insta} alt='' style={{}}/>
            <img className='mediaImg image' src={facebook} alt='' style={{}}/>
            <img className='mediaImg' src={twitter} alt=''style={{}}/>
      </div>
      <div className='line' style={{}}></div>
      <div className='copy'>
        <p className='right'>
          <span>&copy; 2023 · </span><span style={{ color: '#12273D',fontWeight:"bold",fontSize:"16px" }}>YourCar</span><span> All rights reserved</span>
        </p>
      </div>
    </div>
    </React.Fragment>
  )
}

export default Footer;