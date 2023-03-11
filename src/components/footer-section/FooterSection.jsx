import React from "react";
import "./FooterSection.scss";
import ft1 from "../../assets/img/ft1.png";
import ft2 from "../../assets/img/ft2.png";
import ft3 from "../../assets/img/ft3.png";
import ft_logo from "../../assets/img/ft_logo.png";
const FooterSection = () => {
  return (
    <div className="footer__section">
      <div className="footer__container">
        <div className="footer__inner">
          <div className="inner__top">
            <div className="footer__top-card">
              <img src={ft1} alt="FT1" />
              <p>30 day money back guarantee</p>
            </div>
            <div className="footer__top-card">
              <img src={ft2} alt="FT2" />
              <p>Support teams across the world</p>
            </div>
            <div className="footer__top-card">
              <img src={ft3} alt="FT3" />
              <p>Safe & Secure online payment</p>
            </div>
          </div>
          <div className="footer__logo">
            <img src={ft_logo} alt="Footer Logo" />
          </div>
          <div className="footer__line"></div>
          <div className="footer__links">
            <div className="footer__links-top">
              <a href="/">WHO WE ARE</a>

              <a href="/">WOOCOMMERCE</a>

              <a href="/">OTHER PRODUCTS</a>

              <a href="/" style={{ marginRight: "38px" }}>
                SUPPORT
              </a>

              <a href="/">WE RECOMMEND</a>
            </div>
            <div className="footer__links-content">
              <ul>
                <li>About</li>
                <li>Team</li>
                <li>Work With Us</li>
              </ul>
              <ul>
                <li>Features</li>
                <li>Payments</li>
                <li>Marketing</li>
                <li>Shipping</li>
                <li>Extension Store</li>
                <li>eCommerce blog</li>
                <li>Development blog</li>
                <li>Ideas board</li>
                <li>Mobile App</li>
                <li>Community</li>
                <li>Style Guide</li>
                <li>Email Newsletter</li>
              </ul>
              <ul>
                <li>Storefront</li>
                <li>WooSlider</li>
                <li>Sensei</li>
                <li>Sensei Extensions</li>
              </ul>
              <ul>
                <li>Documentation</li>
                <li>Customizations</li>
                <li>Support Policy</li>
                <li>Contact</li>
                <li>COVID-19 Resources</li>
                <li>Privacy Notice for</li>
                <li>California Users</li>
              </ul>
              <ul>
                <li>WooExperts</li>
                <li>Hosting Solutions</li>
                <li>Pre-sales FAQ</li>
                <li>Success Stories</li>
                <li>Design Feedback Group</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
