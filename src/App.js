import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Routes path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
