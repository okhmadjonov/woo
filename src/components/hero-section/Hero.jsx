import React from "react";
import W from "../../assets/img/Vector.png";

import Header from "./header/Header";
import HeroContent from "./hero-content/HeroContent";
import "./Hero.scss";
const Hero = () => {
  return (
    <div className="hero__section">
      <div className="hero__container">
        <div className="hero__background-img">
          <img src={W} alt="W" />
        </div>
        <Header />
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
