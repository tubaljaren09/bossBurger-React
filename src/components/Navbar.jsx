import React from "react";

// Images
import Burger from "../assets/images/burger-icon.png";
import Logo from "../assets/images/home-logo.png";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className="navbar-container">
        <img src={Logo} width="100px" height="50px" alt="logo" />
        <img src={Burger} alt="burger" width="40px" height="40px" />
      </div>
    </div>
  );
};

export default Navbar;
