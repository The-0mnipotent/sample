import PropTypes from "prop-types";
import React, { useState } from "react";

function WithButtons({ product, onAddToCart, onRemoveFromCart, cartItems }) {
  const [isAddedToCart, setIsAddedToCart] = useState(
    cartItems.includes(product.title)
  );

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    onAddToCart(product.title);
    console.log("Added to Cart:", product.title);
  };

  const handleRemoveFromCart = () => {
    setIsAddedToCart(false);
    onRemoveFromCart(product.title);
    console.log("Removed from Cart:", product.title);
  };

  return (
    <div className="product-card with-buttons">
      <img src={product.image} alt={product.title} />
      <div className="card-title-with">
        <h3>{product.title}</h3>
      </div>
      <p>Price: ${product.price}</p>
      {isAddedToCart ? (
        <button onClick={handleRemoveFromCart}>Remove from Cart</button>
      ) : (
        <button onClick={handleAddToCart}>Add to Cart</button>
      )}
      <button>Quick Shop</button>
    </div>
  );
}

WithButtons.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default WithButtons;
