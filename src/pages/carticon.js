// CartIcon.js
import React from 'react';
import './CartIcon.css'; // Make sure to create and import a CSS file for styling

const CartIcon = ({ count }) => {
  return (
    <div className="cart-icon-container">
      <button className="cart-button">🛒</button>
      {count > 0 && <div className="cart-count">{count}</div>}
    </div>
  );
};

export default CartIcon;
