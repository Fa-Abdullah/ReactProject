import React from 'react'
import { Card } from 'react-bootstrap';
import set from '../vector/seats.png';
import lag from '../vector/lag.png';
import { Button } from 'react-bootstrap';
import { useShoppingCart } from './cartContext';
import './cars.css';

const OneCar = ({image,name,Class,description,seats,luggage }) => {
    const {increaseQuantity,decreaseQuantity,ItemsQuantity} = useShoppingCart();

    const quantity = ItemsQuantity(name);

    const imgSrc = require(`../dataImgs/${image}`);

    console.log(imgSrc)
    return (
    <Card className='Carcon' style={{}}>
        <Card.Img className='Carimg' src={imgSrc} variant='top' style={{}}/>
        <Card.Body>
            <Card.Title>
                <span className='Class' style={{}}>
                        {Class}
                </span>
            </Card.Title>
            <Card.Text>
                <span className='Carname' style={{}}>
                      {name}
                </span>
            </Card.Text>
            <Card.Text className='Text' style={{}}>
                <span className='descCar' style={{marginTop:"50px"}}>
                    {description}
                </span>
            </Card.Text>
            <div className="d-flex justify-content-between  mb-4">
                <div className='smallCon' style={{}}>
                    <div className='seatCon' style={{}}>
                        <img alt='' className='set' src={set} style={{}}/>
                        <span style={{}}>
                            {seats} seats
                        </span>
                    </div>
                    <div className='lagCon' style={{}}>
                        <img alt='' className='lag' src={lag} style={{}}/>
                        <span>
                            {luggage} luggage
                        </span>
                    </div>
                </div> 
                    <div className="d-flex justify-content-between align-items-baseline btnCon" style={{gap:"15px",marginTop:"15px"}}>
                        <button className='CarBtn1' style={{}} onClick={() => decreaseQuantity(name) }>
                            - 
                        </button>
                        <span>{quantity}</span>
                        <button className='CarBtn2' style={{}} onClick={() => increaseQuantity(name) }>
                            + 
                        </button>
                    </div>
            </div>
        </Card.Body>
    </Card>
  )
}

export default OneCar;