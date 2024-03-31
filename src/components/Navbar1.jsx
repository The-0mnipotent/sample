import PropTypes from "prop-types";
import React from "react";
import { FaShoppingBag } from "react-icons/fa";

function Navbar1({ cartItems, handleShowCart }) {
  return (
    <nav className="navbar1">
      <h1>Ecommerce</h1>
      <div className="navbar1-buttons">
        <button>Home</button>
        <button>About</button>
        <button onClick={handleShowCart}>
          <FaShoppingBag />
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
        </button>
        <button>Contact</button>
      </div>
    </nav>
  );
}

Navbar1.propTypes = {
  cartItems: PropTypes.array.isRequired,
  handleShowCart: PropTypes.func.isRequired,
};

export default Navbar1;
