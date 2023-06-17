import { /*Children,*/ createContext, useContext, useEffect, useState } from "react";
import React from 'react';
import ShoppingCart from './shoppingCarts';
//import opinions from '../data/data2.json'
// import CartItem from "./cartItems";

    const intialCartItems =localStorage.getItem("shoppingCart")?JSON.parse(localStorage.getItem("shoppingCart")) : [];

const CartContext = createContext({});

const CartProvider = ( {children} ) => {

    const [isopen , setIsOpen] = useState(false);

    const openCart = () => {
        setIsOpen(true);
    }
 
    const closeCart = () => {
        setIsOpen(false);
    }

    const [cartItems, setCartItems] = useState(intialCartItems);

    useEffect(() => {
        localStorage.setItem("shoppingCart", JSON.stringify(cartItems));
    }, [cartItems]);

    const cartQuantity = cartItems.reduce((total, item) => {
        if (item.quantity != null) {
          return total + item.quantity;
        } else {
          return total;
        }
      }, 0);

    const getItemsQuantity = (name) =>{
        return(
            cartItems.find((item) => item.name === name)?.quantity || 0
        );
    };

    const ItemsQuantity = (name) =>{
        const item = cartItems.find((item) => item.name === name);
        return item ? item.quantity : 0;
    };

    const increaseQuantity = (name) => {
        setCartItems((currentItems) => {
          const itemIndex = currentItems.findIndex((item) => item.name === name);
          if (itemIndex === -1) {
            return [...currentItems, { name, quantity: 1 }];
          } else {
            const updatedItems = [...currentItems];
            updatedItems[itemIndex] = {
              ...updatedItems[itemIndex],
              quantity: updatedItems[itemIndex].quantity + 1,
            };
            return updatedItems;
          }
        });
      };

    const decreaseQuantity = (name) =>{
        setCartItems((currentItems) => {
            if(currentItems.find(item => item.name === name) == null){
                return currentItems.filter((item) => item.name !== name )
            }
            else return(
                currentItems.map((item)=>{
                    if(item.name === name)
                    return { ...item ,quantity : item.quantity - 1 }
                    else return item;
                })
            );
        })
    };

    const remove = (name) =>{
        setCartItems((currentItems) => currentItems.filter((item) => item.name !== name ) )
    };

    const removeAll = () =>{
        setCartItems([]);
    };

  return (
    <CartContext.Provider value={{getItemsQuantity,cartItems,increaseQuantity,decreaseQuantity,remove,removeAll,ItemsQuantity,openCart,closeCart,cartQuantity}}>
        {children}
        <ShoppingCart isOpen={isopen}/>
    </CartContext.Provider>
  )
}

export default CartProvider;

export const useShoppingCart = () => {
    return(
        useContext(CartContext)
    );
}