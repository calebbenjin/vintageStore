import React, { useState } from "react";
import localData from "../utils/localCart";

const CartContext = React.createContext();

const CartProvider = ({children}) => {
  const [cart, setCart] = useState(localData);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);
  
  return <CartContext.Provider value={cart, total, cartItems}>
    {children}
  </CartContext.Provider>
}

export { CartContext, CartProvider };