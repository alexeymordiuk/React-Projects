import React from "react";
import { Routes, Route } from "react-router-dom";

import "./index.scss";
import Home from "./pages/Home";
import Blog from './pages/Blog'
import AboutUs from "./pages/AboutUs";
import Shop from "./pages/Shop";
import Candy from "./pages/Candy";
import Cart from "./pages/Cart";
import Lunches from "./pages/Lunches";
import Order from "./pages/Order";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/candy" element={<Candy />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/lunches" element={<Lunches />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </>
  );
}

export default App;
