import PropTypes from "prop-types";
import React from "react";
import { FaShoppingBag } from "react-icons/fa";

function Navbar2({ cartItems, handleShowCart }) {
  return (
    <nav className="navbar2">
      <div className="navbar2-header">
        <h1>Ecommerce</h1>
      </div>
      <div className="navbar2-buttons">
        <div className="navbar2-button">
          <button>Home</button>
        </div>
        <div className="navbar2-button">
          <button>About</button>
        </div>
        <div className="navbar2-button">
          <button onClick={handleShowCart}>
            <FaShoppingBag />
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </button>
        </div>
        <div className="navbar2-button">
          <button>Contact</button>
        </div>
      </div>
    </nav>
  );
}

Navbar2.propTypes = {
  cartItems: PropTypes.array.isRequired,
  handleShowCart: PropTypes.func.isRequired,
};

export default Navbar2;
