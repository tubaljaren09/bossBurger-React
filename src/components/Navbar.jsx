import React, { useState } from "react";

// Images
import Burger from "../assets/images/solid-bars.png";
import Logo from "../assets/images/home-logo.png";
import Close from "../assets/images/close-icon.png";
import Cart from "../assets/images/home-cart-icon.png";
import Admin from "../assets/images/home-admin-icon.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar-main">
      <div className="navbar-container">
        <img src={Logo} width="100px" height="50px" alt="logo" />
        <div className="burger-icon" onClick={toggleNav}>
          {!nav ? (
            <img src={Burger} alt="burger-icon" width="30px" height="25px" />
          ) : (
            <img src={Close} alt="close-icon" width="25px" height="25px" />
          )}
        </div>
        <ul className="navbar">
          <li>Home</li>
          <li>Products</li>
          <li>Contacts</li>
          <hr />
          <img src={Cart} alt="cart-icon" width="25px" height="20px" />
          <img src={Admin} alt="admin-icon" width="30px" height="20px" />
        </ul>
      </div>
      <ul className={!nav ? "menu-close" : "menu-show"}>
        <li>Home</li>
        <li>Products</li>
        <li>Contacts</li>
      </ul>
    </div>
  );
};

export default Navbar;
