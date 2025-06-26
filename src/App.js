// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar";
import Product from "./Pages/Product/Product";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("isLoggedIn")
  );

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("isLoggedIn", "true");
    } else {
      localStorage.removeItem("isLoggedIn");
    }
  }, [isLoggedIn]);
  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
