import React, { useState } from "react";
import "./HeroContent.scss";
import bitmap from "../../../assets/img/bitmap.png";
import group5 from "../../../assets/img/group5.png";
import group7 from "../../../assets/img/group7.png";
import group8 from "../../../assets/img/group8.png";
import group10 from "../../../assets/img/group10.png";
import safe from "../../../assets/img/safe.png";
import cart from "../../../assets/img/cart.png";
import sale from "../../../assets/img/sale.png";
import rim from "../../../assets/img/rim.png";
import paypol from "../../../assets/img/paypol.png";
import stripe from "../../../assets/img/stripe.png";
import orce from "../../../assets/img/orce.png";
const HeroContent = () => {
  const [size1, setSize1] = useState(false);
  const [size2, setSize2] = useState(false);
  const [size3, setSize3] = useState(false);
  const [size4, setSize4] = useState(false);
  const [size5, setSize5] = useState(false);
  const [count, setCount] = useState(0);
  // const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(344);
  const [isToggled, toggle] = useState(false);

  const handleSize1 = () => {
    setSize1((current) => !current);
  };
  const handleSize2 = () => {
    setSize2((current) => !current);
  };
  const handleSize3 = () => {
    setSize3((current) => !current);
  };
  const handleSize4 = () => {
    setSize4((current) => !current);
  };
  const handleSize5 = () => {
    setSize5((current) => !current);
  };

  const callback = () => {
    toggle(!isToggled);
  };
  return (
    <div className="hero__content">
      <div className="hero__content-container">
        <div className="hero__content-inner">
          <div className="hero__content_left">
            <h3 className="hero__title">
              Building exactly the eCommerce website you want.
            </h3>
            <p className="hero__subtitle">
              WooCommerce is a customizable open-source eCommerce platform built
              on WordPress. Get started quickly and make your way.
            </p>
            <div className="hero__newstart">
              <button> Start a New Store</button>
              <p className="hero__customize">
                {/* <span className="extend__or">or</span> */}
                <span className="extend__customize">
                  <img src={orce} alt="Customize or" />
                </span>
                {/* <span className="extend__icon">
                  <FaAngleRight />
                </span> */}
              </p>
            </div>
          </div>
          <div className="hero__content-right">
            <div className="hero__cart">
              <img src={cart} alt="Cart" />
            </div>
            <div className="hero__group5">
              <img src={group5} alt="group5" />
            </div>
            <div className="hero__group7">
              <img src={group7} alt="group7" />
            </div>
            <div className="hero__group8">
              <img src={group8} alt="group8" />
            </div>
            <div className="hero__group9">
              <div className="group9__item">
                <div className="company_logo">
                  <img src={stripe} alt="Stripe" />
                </div>
                <div className="company_name">
                  <p>Stripe gateway</p>
                </div>
                <div className="switch_on_of">
                  <label>
                    <input
                      type="checkbox"
                      defaultChecked={isToggled}
                      onClick={callback}
                    />
                    <span />
                  </label>
                </div>
              </div>
              <hr />
              <div className="group9__item">
                <div className="company_logo">
                  <img src={paypol} alt="Paypol" />
                </div>
                <div className="company_name">
                  <p>Paypal payments</p>
                </div>
                <div className="switch_on_of">
                  <label>
                    <input
                      type="checkbox"
                      defaultChecked={isToggled}
                      onClick={callback}
                    />
                    <span />
                  </label>
                </div>
              </div>
              <hr />
              <div className="group9__item">
                <div
                  className="company_logo"
                  style={{ paddingLeft: "30px", paddingBottom: "10px" }}>
                  <img src={rim} alt="Rim" />
                </div>
                <div className="company_name">
                  <p>Bank Transfers</p>
                </div>
                <div className="switch_on_of">
                  <label>
                    <input
                      type="checkbox"
                      defaultChecked={isToggled}
                      onClick={callback}
                    />
                    <span />
                  </label>
                </div>
              </div>
            </div>
            <div className="hero__group10">
              <img src={group10} alt="group10" />
            </div>
            <div className="safe">
              <img src={safe} alt="Safe" />
            </div>
            <div className="sale">
              <img src={sale} alt="Sale " />
            </div>
            <div className="hero__product">
              <div className="hero__product-img">
                <img src={bitmap} alt="Product shoes" />
              </div>
              <div className="hero__product-desc">
                <div className="hero__product-container">
                  <div className="product__name">
                    <p>SHOES</p>
                    <span>Adidas Originals</span>
                  </div>
                  <div className="product__title">
                    <h3>
                      Adidas Originals <br />
                      OG Sneakers
                    </h3>
                  </div>
                  <div className="product__sizes">
                    <span
                      className={size1 ? "active_size" : ""}
                      onClick={handleSize1}>
                      7
                    </span>
                    <span
                      className={size2 ? "active_size" : ""}
                      onClick={handleSize2}>
                      7.5
                    </span>
                    <span
                      className={size3 ? "active_size" : ""}
                      onClick={handleSize3}>
                      8
                    </span>
                    <span
                      className={size4 ? "active_size" : ""}
                      onClick={handleSize4}>
                      8.5
                    </span>
                    <span
                      className={size5 ? "active_size" : ""}
                      onClick={handleSize5}>
                      9
                    </span>
                  </div>
                  <div className="product__price__quantity">
                    <div className="price">
                      <span className="product__price"> ${amount}</span>
                      <span className="total__summ">$560</span>
                    </div>
                    <div className="quantity">
                      <button
                        className="minus"
                        onClick={() => {
                          if (count <= 0) {
                            return count;
                          } else {
                            setCount(count - 1);
                          }
                        }}>
                        -
                      </button>
                      <button className="quantity__amount">{count}</button>
                      <button
                        className="plus"
                        onClick={() => {
                          setCount(count + 1);
                        }}>
                        +
                      </button>
                    </div>
                  </div>
                  <div className="product__add__card">
                    <button>Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
