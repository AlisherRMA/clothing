import React from "react";
import { Routes } from "react-router";
import "./App.css";
import { Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="shop" element={<ShopPage />} />
    </Routes>
  );
}

export default App;
