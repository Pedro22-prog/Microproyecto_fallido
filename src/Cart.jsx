import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems, addItem, removeItem } = useContext(CartContext);
  
  const handleCheckout = () => {
    // Add checkout logic here, e.g., redirect to payment page
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item, index) => (
            <div key={index}>
              <p>{item.name} - {item.price}</p>
              <button onClick={() => removeItem(item)}>Remove</button>
            </div>
          ))}
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
