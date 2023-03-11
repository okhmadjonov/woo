import React from "react";
import "./Section.scss";
import woo from "../../assets/img/union.png";
import section1 from "../../assets/img/section1.png";
import section2 from "../../assets/img/section2.png";
import section3 from "../../assets/img/section3.png";
import section4 from "../../assets/img/section4.png";
import section5 from "../../assets/img/section5.png";
import section8 from "../../assets/img/section8.png";
import peaple1 from "../../assets/img/peaple1.png";
import peaple2 from "../../assets/img/peaple2.png";
const Section = () => {
  return (
    <div className="section">
      <div className="section__container">
        <div className="section__container-inner">
          <div className="woo">
            <img src={woo} alt="woo" />
          </div>
          <div className="section__blocks">
            <div className="block">
              <div className="block__img">
                <img
                  src={section1}
                  alt="Section1"
                  style={{ marginTop: "-40px" }}
                />
              </div>
              <div
                className="block__text first"
                style={{ margin: "120px  280px 0px 0px" }}>
                <div className="block__title">
                  <h3>
                    Develop <br />
                    Without Limits
                  </h3>
                </div>
                <div className="block__subtitle">
                  <p>
                    WooCommerce is developer friendly, too. Built with a REST
                    API, WooCommerce is scalable and can integrate with
                    virtually any service. Design a complex store from scratch,
                    extend a store for a client, or simply add a single product
                    to a WordPress site—your store, your way.
                  </p>
                </div>
                <div className="block__btn">
                  <button>Read The Documentation</button>
                </div>
              </div>
            </div>
            <div className="block">
              <div
                className="block__text second"
                style={{ margin: "120px 0px 0px 300px" }}>
                <div className="block__title">
                  <h3>
                    Know our <br /> Global Community
                  </h3>
                </div>
                <div className="block__subtitle">
                  <p>
                    WooCommerce is one of the fastest-growing eCommerce
                    communities. We’re proud that the helpfulness of the
                    community and a wealth of online resources are frequently
                    cited as reasons our users love it. There are 80+ meetups
                    worldwide!
                  </p>
                </div>
                <div className="block__btn">
                  <button>Read The Documentation</button>
                </div>
              </div>
              <div className="block__img">
                <img src={section2} alt="Section2" />
              </div>
            </div>
            <div className="group7">
              <img src={section3} alt="Group7" />
            </div>
            <div className="group8">
              <img src={section5} alt="Group8" />
            </div>
            <div className="group4">
              <img src={section4} alt="Group4" />
            </div>
            <div className="section8">
              <img src={section4} alt="Section8" />
            </div>
            <div className="peaple1">
              <img src={peaple1} alt="peaple1" />
            </div>
            <div className="peaple2">
              <img src={peaple2} alt="peaple2" />
            </div>
          </div>

          {/* //Absolute  elements */}
        </div>
      </div>
    </div>
  );
};

export default Section;
