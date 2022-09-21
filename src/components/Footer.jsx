import React from "react";

// Images
import Logo from "../assets/images/home-logo.png";
import FB from "../assets/images/footer-fb-icon.png";
import YT from "../assets/images/footer-youtube-icon.png";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-container">
        <div>
          <h4>ABOUT</h4>
          <br />
          <p>FAQs Terms & Conditions</p>
        </div>
        <img src={Logo} alt="burger-logo" />
        <div>
          <h4>CONTACTS</h4>
          <br />
          <p>(+63)9123456789</p>
          <br />
          <img src={FB} alt="FB-icon" width="30px" height="30px" />
          <img src={YT} alt="YT-icon" width="30px" height="30px" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
