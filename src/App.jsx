// App.js
import React, { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { settingsContext } from "./Context";
import CatalogPage from "./pages/CatalogPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  const [setting, setSetting] = useState({
    navigationType: "NavBar1",
    productCardVariant: "Carousel",
    productCardType: "WithButtons",
  });

  return (
    <settingsContext.Provider value={{ setting, setSetting }}>
      <BrowserRouter>
        <Routes>
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </BrowserRouter>
    </settingsContext.Provider>
  );
}

export default App;
