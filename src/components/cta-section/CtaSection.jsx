import React from "react";
import "./CtaSection.scss";
import cta from "../../assets/img/cta-section.png";
const CtaSection = () => {
  return (
    <div className="cta__section">
      <div className="cta__container">
        <div className="cta__inner">
          <img src={cta} alt="CTA" />
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
