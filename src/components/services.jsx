import React from 'react'
import star from '../carsImgs/car1.png';
import hand from '../carsImgs/car2.png';
import car3 from '../carsImgs/car3.png';
import car4 from '../carsImgs/nonCar.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import './services.css'

const Services = () => {

  return (
    <React.Fragment>
      <div className="contain" ref={Services} id='services'  style={{backgroundImage:`url(${car4})`}}>
        <div className='minContain' style={{}}>
        <div className='servTitle' style={{}}>
        <p className='SERV' style={{}}>
          SERVICES
        </p>
        <p className='serv' style={{}}>
          Services
        </p>
      </div>
      <div className='row align-items-start servBody' style={{}}>
          {/* CAR SALES COLUMN 1 LEFT */}
            <div  className='col-sm servCol ser1' style={{}}>
              <img className='star' src={star} alt='' style={{}}/> 
                  <p className='servT1' style={{}}>
                    Car sales<br/><br/>
                  </p>
                  <p className='servP1' style={{}}>
                    At YourCar, we offer a wide <br/>
                    selection of luxury vehicles for <br/>
                    sale. Whether you're in the <br/>
                    market for a sleek sports car or <br/>
                    a spacious SUV, we have the <br/>
                    perfect vehicle to fit your needs.<br/>
                  </p>
            </div>
           {/* CAR RENTAL COLUMN 2 LEFT */}
            <div className='col-sm servCol ser2' style={{}}>
            <img className='star' src={hand} alt='' style={{}}/>
                <p className='servT1' style={{}}>
                  Car rental<br/><br/>
                </p>
                <p className='servP2 ' style={{}}>
                  If you're in need of a luxury car <br/>
                  rental, look no further than <br/>
                  YourCar. Our fleet of high-end <br/>
                  vehicles is regularly maintained <br/>
                  and serviced to ensure that you <br/>
                  have a safe and comfortable <br/>
                  driving experience.<br/>
                </p>
            </div>
         
           {/* CAR SELLING COLUMN 3 LEFT */}
            <div className='col-sm servCol ser3' style={{}}>
            <img className='star' src={car3} alt='' style={{}}/>
                <p className='servT1' style={{}}>
                  Car selling<br/><br/>
                </p>
                <p className='servP2' style={{}}> 
                  At YourCar, we make it easy to <br/>
                  sell your car. Simply bring your <br/>
                  vehicle in for an appraisal, and <br/>
                  we'll handle the rest. We offer <br/>
                  fair prices and a hassle-free <br/>
                  selling process, so you can get  <br/>
                  your vehicle with minimal effort.<br/>
                </p>
            </div>
          
      </div>
    </div>
      </div>
    </React.Fragment>
  )
}

export default Services