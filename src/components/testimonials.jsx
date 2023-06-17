import React, {useState/*,useEffect*/} from 'react';
import './testimonials.css';
//import star from "../dataImgs/star.png";
//import annieCar from "../imgs/testimonials.jpg";
import opinions from '../data/data2.json';
//import point from "../dataImgs/test-point.png";
//import Footer from './footer';
//import { useShoppingCart } from './cartContext';
import { Button /*, Col, Row */} from 'react-bootstrap';
import Testimonial from './Testimonial';
import right from '../carsImgs/last-right.png'
import left from '../carsImgs/last-left.png'

const Testimonials = (props) => {

  const [start , setStart] =useState(0);
  
  const [end , setEnd] =useState(1);
  
  const display = opinions.slice(start, end);
  
  const [slideIndex, setSlideIndex] = useState(0)
  
  const handleNextClick = () => {
    const newStart = start + 1;
    const newEnd = end + 1;
    if (newEnd <= opinions.length) {
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

  const dots = Array.from({ length: 4 }, (_, index) => index);

  const dotClassName = "dot";
  
  return (
    <React.Fragment>
     <div className='conta' style={{}}>
     <div className='testminCont' style={{}}>
      <div style={{marginLeft: "500px"}}>
        <p className='TestC' style={{}}>
        TESTIMONIALS
        </p>
        <p className='Test' style={{}}>
        Testimonials<br/><br/> 
        </p>
      </div>
      <div className='d-flex'>

        <Button className='testBtn testBtn1' onClick={handleNextClick} style={{}}>
          <img src={left} alt='' style={{width: "8.49px"}}/>
        </Button>

              {display.map(item => (
                  <Testimonial {...item}/>
              ))}

        <Button className='testBtn testBtn2' onClick={handlePreviousClick} style={{}}>
          <img src={right} alt='' style={{width: "8.49px"}}/>
        </Button>

      </div>

      <div className='testDots d-flex' style={{}}>
          {dots.map((dot, index) => (
            <div 
              key={index}
              className={`${dotClassName} ${index === slideIndex ? "testdotActive" : ""}`}
            >
            </div>
          ))}
      </div>
      
     </div>
    </div>
    </React.Fragment>
  )
}

export default Testimonials;