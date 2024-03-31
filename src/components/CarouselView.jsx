import PropTypes from "prop-types";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import WithButtons from "./WithButtons";
import WithoutButtons from "./WithoutButtons";

function CarouselView({
  products,
  productCardType,
  onAddToCart,
  onRemoveFromCart,
  cartItems,
}) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const withButtonProductCards = products.map((product, index) => (
    <WithButtons
      product={product}
      onAddToCart={onAddToCart}
      onRemoveFromCart={onRemoveFromCart}
      cartItems={cartItems}
      key={index}
    />
  ));

  const withoutButtonProductCards = products.map((product, index) => (
    <WithoutButtons product={product} key={index} />
  ));

  return (
    <div className="carousel-container">
      {productCardType === "WithButtons" ? (
        <Carousel showDots={false} responsive={responsive}>
          {withButtonProductCards}
        </Carousel>
      ) : (
        <Carousel showDots={false} responsive={responsive}>
          {withoutButtonProductCards}
        </Carousel>
      )}
    </div>
  );
}

CarouselView.propTypes = {
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

export default CarouselView;
