import React from "react";
import "./FooterBottom.scss";
import tw from "../../assets/img/twitter.png";
import fs from "../../assets/img/facebook.png";
import fw from "../../assets/img/wifi.png";
import ins from "../../assets/img/instagram.png";
import automatic from "../../assets/img/auto.png";
const FooterBottom = () => {
  return (
    <div className="footer__bottom">
      <div className="footer__bottom-contanier">
        <div className="footer__bottom-inner">
          <div className="footer__bottom-card" style={{ width: "300px" }}>
            <img src={tw} alt="Twitter" />
            <img src={fs} alt="facebook" />
            <img src={fw} alt="Wifi" />
            <img src={ins} alt="Instagram" />
          </div>
          <div className="footer__bottom-card">
            <p>
              COPYRIGHT WOOCOMMERCE 2020 - TERMS & CONDITIONS PRIVACY POLICY
            </p>
          </div>
          <div className="footer__bottom-card">
            <img src={automatic} alt="Automatic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
