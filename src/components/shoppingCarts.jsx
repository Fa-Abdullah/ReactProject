import React from 'react'
import { Button, Offcanvas } from 'react-bootstrap'
import { useShoppingCart } from './cartContext'
import CartItem from './cartItems';
import './cart.css';

const ShoppingCart = ({isOpen}) => {
  const {cartItems,removeAll,closeCart} = useShoppingCart();

  console.log(cartItems)

  return (
    <Offcanvas className="offc" show={isOpen} placement='end' onHide={closeCart}>
        <Offcanvas.Body className='cartcon' style={{}}>
            {Array.from(cartItems).map((item)=> (
                <CartItem key={item.name} name={item.name} quantity={item.quantity} {...item}/>
            ))}
            <br/><br/><br/>
            <Button className='deleteAll' style={{}} onClick={() => removeAll(cartItems)}>
                Delete All
            </Button>
        </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ShoppingCart
