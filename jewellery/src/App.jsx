import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AboutPage from "./components/Pages/AboutPage";
import Contact from "./components/Pages/ContactPage";
import ProductPage from "./components/Pages/ProductPage";
import Cart from "./components/Pages/Cart";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy";
import Terms from "./components/Pages/Terms";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductPage/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />}/>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
