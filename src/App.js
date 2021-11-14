import React from "react";
import { Routes } from "react-router";
import "./App.css";
import { Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => <h1>Hats Page</h1>;

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="hats" element={<HatsPage />} />
    </Routes>
  );
}

export default App;
