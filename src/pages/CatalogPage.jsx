import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { useContext } from "react";
import CarouselView from "../components/CarouselView";
import CartModal from "../components/CartModal";
import Navbar1 from "../components/Navbar1";
import Navbar2 from "../components/Navbar2";
import ViewAll from "../components/ViewAll";
import { settingsContext } from "../Context";

function CatalogPage() {
  const settings = useContext(settingsContext);
  console.log(settings);
  // const settings = useSelector((state) => state.settings);
  // console.log(settingsContext);
  const { navigationType, productCardVariant, productCardType } =
    settings.setting;
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [settingsValue, setSettingsValue] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  useEffect(() => {
    setSettingsValue(settings.setting);
    // navigationType = settingsValue?.navigationType
  }, [settings]);

  // useEffect(() => {
  //   console.log("Settings updated. Refreshing products...");
  //   // Fetch products again when settings change
  //   fetchProducts();
  // }, [settings]);

  // const fetchProducts = async () => {
  //   try {
  //     const response = await axios.get("https://fakestoreapi.com/products");
  //     setProducts(response.data);
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   }
  // };

  const handleAddToCart = (title) => {
    setCartItems((prevCartItems) => [...prevCartItems, title]);
  };

  const handleRemoveFromCart = (title) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item !== title)
    );
  };

  useEffect(() => {
    console.log("Cart Items:", cartItems);
  }, [cartItems]);

  const handleShowCart = () => {
    setShowCartModal(true);
  };

  const handleCloseCart = () => {
    setShowCartModal(false);
  };

  const renderProductList = () => {
    if (settingsValue?.productCardVariant === "Carousel") {
      return (
        <CarouselView
          products={products}
          productCardType={productCardType}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          cartItems={cartItems}
        />
      );
    } else if (productCardVariant === "ViewAll") {
      return (
        <ViewAll
          products={products}
          productCardType={productCardType}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          cartItems={cartItems}
        />
      );
    }
  };

  return (
    <>
      <h1>Catalog Page</h1>
      <div className="catalog-page">
        <div className="navbar">
          {settingsValue?.navigationType === "NavBar1" ? (
            <Navbar1 cartItems={cartItems} handleShowCart={handleShowCart} />
          ) : (
            <Navbar2 cartItems={cartItems} handleShowCart={handleShowCart} />
          )}
        </div>
        <div className="product-list">{renderProductList()}</div>
        {showCartModal && (
          <CartModal cartItems={cartItems} handleCloseCart={handleCloseCart} />
        )}
      </div>
    </>
  );
}

export default CatalogPage;
