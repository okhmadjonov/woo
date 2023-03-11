import React from "react";
import "./FeatureSection.scss";
import card1 from "../../assets/img/card1.png";
import card2 from "../../assets/img/card2.png";
import card3 from "../../assets/img/card3.png";
import cardleft from "../../assets/img/cardleft.png";
import pay from "../../assets/img/cardL.png";
import mailch from "../../assets/img/cardcentr1.png";
import square from "../../assets/img/cardcentr2.png";
import facebookIcon from "../../assets/img/cardcenter4.png";
import jetpack from "../../assets/img/cardcenter5.png";
import googledrive from "../../assets/img/cardcentr3.png";
import last1 from "../../assets/img/1.png";
import last2 from "../../assets/img/2.png";
import last3 from "../../assets/img/3.png";
import fs1 from "../../assets/img/fs1.png";
import fs2 from "../../assets/img/fs2.png";
import fs3 from "../../assets/img/fs3.png";
const FeatureSection = () => {
  return (
    <div className="feature__section">
      <div className="feature__container">
        <div className="feature__inner">
          <div className="feature__title">
            <h3>Your eCommerce made simple</h3>
          </div>
          <div className="feature_content">
            <div className="feature__items item1">
              <div className="pay">
                <img src={pay} alt="Pay" />
              </div>
              <div className="cardleft">
                <img src={cardleft} alt="Card Left" />
              </div>
              <div className="feature__img">
                <img src={card1} alt="Card 1" />
              </div>
              <div className="fr__container">
                <div className="feature__title">
                  <h4>All You need To Start</h4>
                </div>
                <div className="feature__subtitle">
                  <p>
                    Add WooCommerce plugin to any WordPress site and set up a
                    new store in minutes.
                  </p>
                </div>
                <div className="feature__link">
                  <a href="/">
                    <img src={fs1} alt="fs1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="feature__items item2">
              <div className="square">
                <img src={square} alt="Square" />
              </div>
              <div className="facebookIcon">
                <img src={facebookIcon} alt="FF" />
              </div>
              <div className="googledrive">
                <img src={googledrive} alt="FF" />
              </div>
              <div className="jetpack">
                <img src={jetpack} alt="jetpack" />
              </div>
              <div className="mailch">
                <img src={mailch} alt="mailch" />
              </div>
              <div className="feature__img">
                <img src={card2} alt="Card 1" />
              </div>
              <div className="fr__container">
                <div className="feature__title">
                  <h4>Customize and Extend</h4>
                </div>
                <div className="feature__subtitle">
                  <p>
                    From subscriptions to gym classes to luxury cars,
                    WooCommerce is fully customizable.
                  </p>
                </div>
                <div className="feature__link">
                  <a href="/">
                    {" "}
                    <img src={fs2} alt="fs2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="feature__items item3">
              <div className="last1">
                <img src={last1} alt="last1" />
              </div>
              <div className="last2">
                <img src={last2} alt="last2" />
              </div>
              <div className="last3">
                <img src={last3} alt="last3" />
              </div>
              <div className="feature__img">
                <img src={card3} alt="Card 1" />
              </div>
              <div className="fr__container">
                <div className="feature__title">
                  <h4>Active Community</h4>
                </div>
                <div className="feature__subtitle">
                  <p>
                    WooCommerce is one of the fastest-growing eCommerce
                    communities.{" "}
                  </p>
                </div>
                <div className="feature__link">
                  <a href="/">
                    {" "}
                    <img src={fs3} alt="fs3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
