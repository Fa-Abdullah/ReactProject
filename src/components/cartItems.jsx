import React from 'react';
import { /*Button,*/ Stack } from 'react-bootstrap';
import cars from '../data/data.json'
import { useShoppingCart } from './cartContext'
import rabish from '../vector/rabish.png'
import './cart.css';

const CartItem = ({name ,quantity}) => {

    const {increaseQuantity,decreaseQuantity,remove/*,cartItems*/} = useShoppingCart();

    const cart = cars.find((item) => item.name === name);
    if(cart == null){return null;}
    
    const imgSrc = require(`../dataImgs/${cart.image}`);

  return (
    <Stack direction='horizontial' className='d-flex align-item-center cartContain' gap={2} style={{marginTop:"20px",marginBottom:"3px"}}>
       <div className='minCart' style={{}}>
        <div>
                <div className='cartdata' style={{}}>
                    <p className='cartClass' style={{}}>
                        {cart.Class}
                    </p>
                    <p className='cartName' style={{}}> 
                        {cart.name}
                    </p>
                    
                    <div className="d-flex justify-content-between align-items-baseline btnCont" style={{}}>
                        <button className='minusBtn' style={{}} onClick={() => decreaseQuantity(name)}>
                                - 
                        </button>
                        <span>{quantity}</span>
                        <button className='plusBtn' style={{}} onClick={() => increaseQuantity(name)}>
                                + 
                        </button>
                        <button className='remove' onClick={() => remove(name)} style={{}}>
                            <img src={rabish} alt=''/>
                        </button>
                    </div>
                </div>
            </div>
            <div style={{}}>
                <img className='cartImg' src={imgSrc} alt='cart-img' style={{}}/>
            </div>
       </div>
    </Stack>
  )
}

export default CartItem;
