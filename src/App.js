import React from "react";
import { Routes } from "react-router";
import "./App.css";
import { Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import AuthPage from "./pages/auth/auth.component";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="signin" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
