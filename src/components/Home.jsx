import React from "react";

// Images
import BurgerImage from "../assets/images/home-hero-img.png";

const Home = () => {
  return (
    <div className="home-main">
      <div className="home-container">
        <div className="greetings">
          <h1>
            <span>boss</span> Burger
          </h1>
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </p>
          <br />
          <br />
          <br />
          <button>Order Now!</button>
        </div>
        <img src={BurgerImage} alt="burger-home" width="300px" height="220px" />
      </div>
    </div>
  );
};

export default Home;
