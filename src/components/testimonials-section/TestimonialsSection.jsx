import React from "react";
import "./TestimonialsSection.scss";
import left1 from "../../assets/img/left1.png";
import left2 from "../../assets/img/left2.png";
import left3 from "../../assets/img/left3.png";
import right1 from "../../assets/img/right1.png";
import right2 from "../../assets/img/right2.png";
import right3 from "../../assets/img/right3.png";
import groupBg1 from "../../assets/img/grupBg1.png";
import section5 from "../../assets/img/section5.png";

import Carousel from "./Carousel";

const TestimonialsSection = () => {
  return (
    <div className="testimonials__section">
      <div className="testimonials__container">
        <div className="testimonials__inner">
          <div className="testimonial__title">
            <h3>
              Trusted by Agencies <br />& Store Owners
            </h3>
          </div>
          <div className="testimonial__slider">
            <Carousel />

            <div className="card2">
              <p className="card_subtitle ">
                No other eCommerce platform allows people to start for free and
                grow their store as their business grows. More importantly,
                WooCommerce doesn't charge you a portion of your profits as your
                business grows!
              </p>
            </div>
            <div className="card3">
              <p className="card_subtitle">
                No other eCommerce platform allows people to start for free and
                grow their store as their business grows. More importantly,
                WooCommerce doesn't charge you a portion of your profits as your
                business grows!
              </p>
            </div>

            <div className="left1">
              <img src={left1} alt="Left1" />
            </div>
            <div className="left2">
              <img src={left2} alt="Left2" />
            </div>
            <div className="left3">
              <img src={left3} alt="Left3" />
            </div>
            <div className="right1">
              <img src={right1} alt="Right1" />
            </div>
            <div className="right2">
              <img src={right2} alt="Right2" />
            </div>
            <div className="right3">
              <img src={right3} alt="Right3" />
            </div>
            <div className="group5">
              <img src={groupBg1} alt="Group[ Bg1" />
            </div>
            <div className="group6">
              <img src={section5} alt="Section5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
