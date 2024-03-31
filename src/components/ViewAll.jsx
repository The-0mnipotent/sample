import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import WithButtons from "./WithButtons";
import WithoutButtons from "./WithoutButtons";

function ViewAll({
  products,
  productCardType,
  onAddToCart,
  onRemoveFromCart,
  cartItems,
}) {
  const [lastVisibleIndex, setLastVisibleIndex] = useState(9);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    loadMoreProducts();
  };

  const loadMoreProducts = () => {
    setLastVisibleIndex((prevIndex) => prevIndex + 10);
  };

  return (
    <div className="view-all-container">
      <div className="view-all">
        {products.slice(0, lastVisibleIndex + 1).map((product) => (
          <div key={product.id} className="view-all-item">
            {productCardType === "WithButtons" ? (
              <WithButtons
                product={product}
                onAddToCart={onAddToCart}
                onRemoveFromCart={onRemoveFromCart}
                cartItems={cartItems}
              />
            ) : (
              <WithoutButtons product={product} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

ViewAll.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  productCardType: PropTypes.oneOf(["WithButtons", "WithoutButtons"])
    .isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ViewAll;
