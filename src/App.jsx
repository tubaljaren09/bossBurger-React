import React from "react";

// styles
import "./styles/app.scss";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Products from "./components/Products";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app-main">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
