import PropTypes from "prop-types";
import React from "react";

function CartModal({ cartItems, handleCloseCart }) {
  return (
    <div className="cart-modal">
      <div className="cart-modal-content">
        <h2>Cart Items</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={handleCloseCart}>Close</button>
      </div>
    </div>
  );
}

CartModal.propTypes = {
  cartItems: PropTypes.array.isRequired,
  handleCloseCart: PropTypes.func.isRequired,
};

export default CartModal;
