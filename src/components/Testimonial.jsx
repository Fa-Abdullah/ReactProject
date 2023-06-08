import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import star from "../dataImgs/star.png";
import annieCar from "../imgs/testimonials.jpg";
import './testimonials.css';

const Testimonial = ({description,name}) => {

  return (
    
       
            <div className='small-box' style={{}}>
                <p className='pp'>
                {description}
                </p>
                <div className='img'>
                <img className='teststar' src={star} alt=''/>
                </div>
                <div className='testNameCon' style={{}}>
                <p className='testname'>
                {name}
                </p>
                <p className='las'>
                Las vegas
                </p>
                </div>
                <img src={annieCar} alt='' className='carT'/>
            </div>
       
    
  )
} 

export default Testimonial
