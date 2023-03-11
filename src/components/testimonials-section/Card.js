import React from "react";
import "./Card.scss";
const Card = ({ childData }) => {
  return (
    <div className="card__wrapper">
      <div className="pragrph">
        <p className="card_subtitle ">{childData}</p>
      </div>
    </div>
  );
};

export default Card;
