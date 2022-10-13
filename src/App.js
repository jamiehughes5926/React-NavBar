import React from "react";
import NavBar from "./NavBar";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";
import { Route, Routes } from "react-router-dom";

function App() {
  let component;

  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
