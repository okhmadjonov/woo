import React from "react";
import "./PeopleSection.scss";
import people__section from "../../assets/img/people-section.png";
const PeopleSection = () => {
  return (
    <div className="people__section">
      <div className="people__container">
        <div className="people__inner">
          <img src={people__section} alt="People Section" />
        </div>
      </div>
    </div>
  );
};

export default PeopleSection;
