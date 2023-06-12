
import React, { useState } from 'react';
import './cars.css';
import { Link } from 'react-router-dom';
import { Button, Col, Row ,Range } from "react-bootstrap";
import cars from "../data/data.json";
import OneCar from './Car';
import right from '../carsImgs/last-right.png'
import left from '../carsImgs/last-left.png'

const CarList = () => {

  const [start , setStart] =useState(0);
  
  const [end , setEnd] =useState(3);

  const [slideIndex, setSlideIndex] = useState(0)
  
  const display = cars.slice(start, end);

  const handleNextClick = () => {
    const newStart = start + 1;
    const newEnd = end + 1;
    if (newEnd <= cars.length) {
      setStart(newStart);
      setEnd(newEnd);
      setSlideIndex(slideIndex + 1);
    }
  }
  
  const handlePreviousClick = () =>{
    const newStart = start - 1;
    const newEnd = end - 1;
    if (newStart >= 0) {
      setStart(newStart);
      setEnd(newEnd);
      setSlideIndex(slideIndex - 1);
    }
  }

  // const [slideIndex, setSlideIndex] = useState(0);
  
  // const display = [cars[slideIndex]];

  // const handleNextClick = () => {
  //   if (slideIndex < cars.length - 1) {
  //     setSlideIndex(slideIndex + 1);
  //   }
  // }
  
  // const handlePreviousClick = () =>{
  //   if (slideIndex > 0) {
  //     setSlideIndex(slideIndex - 1);
  //   }
  // }

   const carsdots = Array.from({ length: 4 }, (_, index) => index);
  // const carsdots = Array.from({ length: cars.length }, (_, index) => index);

  const dotClassName = "dot";

  return (
    <React.Fragment>
     <>
     <div className='cont' id='cars' style={{}}>
        <div style={{marginLeft:"780px"}}>
          <p className='CARS'>
            CARS
          </p>
          <p className='Cars'>
            Cars
          </p>
        </div>
        <div className='d-flex'>
     
        <Button className='lapBtn carsBtn' onClick={handlePreviousClick} style={{}}>
          <img src={right} alt='' style={{width: "8.49px"}}/>
        </Button>
       
          <Row className='lapRow g-4' style={{}}>
            {display.map(item => (
              <Col className='carCols' key={item.name} style={{}}>
                <OneCar {...item}/>
              </Col>
            ))}
          </Row>

          <Row className='phoneRow' style={{}}>
            {cars.map(item => (
              <Col className='carCols' key={item.name} style={{}}>
                <OneCar {...item}/>
              </Col>
            ))}
          </Row>

        <Button className='lapBtn carsBtn' onClick={handleNextClick} style={{}}>
          <img src={left} alt='' style={{width: "8.49px"}}/>
        </Button>
 
        </div>

        <div className='carsDots d-flex' style={{}}>
            {carsdots.map((dot, index) => (
              <div 
                key={index}
                className={`${dotClassName} ${index === slideIndex ? "dotActive" : ""}`}
              >
              </div>
            ))}
        </div>

      </div>
     </>
    </React.Fragment>

  )
}

export default CarList;


