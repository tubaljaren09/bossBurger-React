import React from "react";

// Styles
import "./styles/app.scss";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app-main">
      <Navbar />
      <Home />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
