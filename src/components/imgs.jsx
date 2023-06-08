import React ,{Component}from 'react';
import car11 from '../imgs/car11.jpg';
import car21 from '../imgs/car21.jpg';
import car31 from '../imgs/car31.jpg';
import car12 from '../imgs/car12.jpg';
import car22 from '../imgs/car22.jpg';
import car32 from '../imgs/car32.jpg';
import car13 from '../imgs/car13.jpg';
import car23 from '../imgs/car23.jpg';
import car33 from '../imgs/car33.jpg';
import { Link } from 'react-router-dom';
import './imgs.css'
import { Nav } from 'react-bootstrap';

const Imgs = () => {
  return (
    <React.Fragment>
      <div className='images' style={{maxWidth:"100%",height:"810px"}}>
        <div style={{margin:"0px",padding:"0px",flexGrow:"1",flex:"1",width:"100%"}}>
            <div style={{display:"flex"}}>
              <div style={{backgroundImage:`url(${car11})`}} className='car not'></div>
              <div style={{backgroundImage:`url(${car21})`}} className='car car1'></div>   
              <div style={{backgroundImage:`url(${car31})`}} className='car not'></div>
            </div>
            <div style={{display:"flex"}}>
              <div style={{backgroundImage:`url(${car12})`}} className='car not'></div>
              <div style={{backgroundImage:`url(${car22})`,textAlign:"center",alignItems:"center"}} className='carWrite car2'>
                <div className='write'>
                  <p className='title'>
                    Tesla Model 3
                  </p>
                  <p className='ps'>
                    Disruptive, avant-garde, futuristic, innovative.
                  </p>
                  <Link to='/footer' className='but' type='button'>Contact</Link>
                </div>
              </div>
              <div style={{backgroundImage:`url(${car32})`}} className='car not'></div>
            </div>
            <div style={{display:"flex"}}>
                <div style={{backgroundImage:`url(${car13})`}} className='car not'></div>
                <div style={{backgroundImage:`url(${car23})`}} className='car car3'></div>
                <div style={{backgroundImage:`url(${car33})`}} className='car not'></div>
            </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Imgs;