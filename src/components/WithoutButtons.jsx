import PropTypes from "prop-types";
import React from "react";

function WithoutButtons({ product }) {
  return (
    <div className="product-card without-buttons">
      <img src={product.image} alt={product.title} />
      <div className="card-title-without">
        <h3>{product.title}</h3>
      </div>
      <p>Price: ${product.price}</p>
    </div>
  );
}

WithoutButtons.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default WithoutButtons;
