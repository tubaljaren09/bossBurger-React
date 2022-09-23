import React from "react";

// Images
import Classic from "../assets/images/products-classic-burger.png";
import BBQ from "../assets/images/products-bbq-burger.png";
import Crispy from "../assets/images/products-crispy-burger.png";
import Flame from "../assets/images/products-flame-grilled-burger.png";
import Grill from "../assets/images/products-grill-burger.png";
import Grilled from "../assets/images/products-grilled-burger.png";
import Cart from "../assets/images/products-cart-icon.png";

const Products = () => {
  return (
    <div className="products-main">
      <div className="products-container">
        <h1>
          START YOUR ORDER <span>TODAY</span>
        </h1>
        <div className="burger-container">
          <div className="burger">
            <div>
              <img src={Classic} alt="Classic-Burger" />
              <p>Classic Burger</p>
            </div>
            <br />
            <br />
            <div className="price">
              <p>PHP 45.00</p>
              <img src={Cart} alt="Cart-Icon" />
            </div>
          </div>
          <div className="burger">
            <div>
              <img src={Classic} alt="Classic-Burger" />
              <p>Classic Burger</p>
            </div>
            <br />
            <br />
            <div className="price">
              <p>PHP 45.00</p>
              <img src={Cart} alt="Cart-Icon" />
            </div>
          </div>
          <div className="burger">
            <div>
              <img src={BBQ} alt="BBQ-Burger" />
              <p>BBQ Burger</p>
            </div>
            <br />
            <br />
            <div className="price">
              <p>PHP 60.00</p>
              <img src={Cart} alt="Cart-Icon" />
            </div>
          </div>
          <div className="burger">
            <div>
              <img src={Crispy} alt="Crispy-Burger" />
              <p>Crispy Burger</p>
            </div>
            <br />
            <br />
            <div className="price">
              <p>PHP 50.00</p>
              <img src={Cart} alt="Cart-Icon" />
            </div>
          </div>
          <div className="burger">
            <div>
              <img src={Flame} alt="Flame-Burger" />
              <p>Flame grilled Burger</p>
            </div>
            <br />
            <br />
            <div className="price">
              <p>PHP 60.00</p>
              <img src={Cart} alt="Cart-Icon" />
            </div>
          </div>
          <div className="burger">
            <div>
              <img src={Grill} alt="Grill-Burger" />
              <p>Grill Burger</p>
            </div>
            <br />
            <br />
            <div className="price">
              <p>PHP 40.00</p>
              <img src={Cart} alt="Cart-Icon" />
            </div>
          </div>
          <div className="burger">
            <div>
              <img src={Grilled} alt="Grilled-Burger" />
              <p>Grilled Burger</p>
            </div>
            <br />
            <br />
            <div className="price">
              <p>PHP 60.00</p>
              <img src={Cart} alt="Cart-Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
