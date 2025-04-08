import { useContext } from "react";

import "./App.css";
import Header from "./components/Header/Index";
import Home from "./modules/Home/Index";
import { Route, Router, Routes } from "react-router-dom";
import Product from "./components/Product/Index";
import ProductsPage from "./modules/Products/Index";
import ScrollToTop from "./ScrollToTop";
import CategoryProducts from "./components/CategoryProducts/Index";
import Cart from "./components/Cart/Index";
import About from "./modules/About/Index";
import Contact from "./modules/Contact/Index";
import Footer from "./components/Footer/Index";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/categories/:name" element={<CategoryProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
