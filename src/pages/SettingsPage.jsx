import React, { useContext, useState } from "react";
import { settingsContext } from "../Context";
import { useNavigate } from "react-router-dom";

const SettingsPage = () => {
  const navigate = useNavigate();
  // Accessing settingsContext from parent component
  const settings = useContext(settingsContext);
  console.log(settings);
  // State variables to store form values
  const [navigationType, setNavigationType] = useState(
    settings.setting.navigationType
  );
  const [productCardVariant, setProductCardVariant] = useState(
    settings.setting.productCardVariant
  );
  const [productCardType, setProductCardType] = useState(
    settings.setting.productCardType
  );

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Update settings object with form values
    const newSettings = {
      navigationType: navigationType,
      productCardVariant: productCardVariant,
      productCardType: productCardType,
    };

    // Call setSettings function to update settingsContext
    settings.setSetting(newSettings);

    // navigate to the catalog page
    setTimeout(() => {
      navigate('/catalog')
    }, 1000)
  };

  return (
    <div>
      <h2>Settings Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Navigation Type:
            <select
              value={navigationType}
              onChange={(e) => setNavigationType(e.target.value)}
            >
              <option value="NavBar1">Navbar 1</option>
              <option value="NavBar2">Navbar 2</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Product Card Variant:
            <select
              value={productCardVariant}
              onChange={(e) => setProductCardVariant(e.target.value)}
            >
              <option value="Carousel">Carousel</option>
              <option value="ViewAll">View All</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Product Card Type:
            <select
              value={productCardType}
              onChange={(e) => setProductCardType(e.target.value)}
            >
              <option value="WithButtons">With Buttons</option>
              <option value="WithoutButtons">Without Buttons</option>
            </select>
          </label>
        </div>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
};

export default SettingsPage;
