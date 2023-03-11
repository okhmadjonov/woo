import React, { useState } from "react";
import "./Carousel.scss";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import slideData from "./slideData";
import Card from "./Card";
const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if ((slideData.length - 1) * 590 > current)
      setCurrent((prev) => prev + 590);
    if (slideIndex !== slideData.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === slideData.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (current > 0) setCurrent((prev) => prev - 590);
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(slideData.length);
    }
  };

  return (
    <div className="carusel__primary">
      <div className="box">
        <div
          className="carusel__card"
          style={{
            transform: `translateY(-${current}px)`,
            gridTemplateRows: `repeat(${slideData.length},520px)`,
          }}>
          {slideData.map((item) => {
            return <Card key={item.id} childData={item.content} />;
          })}
        </div>
      </div>

      <div className="card__btns">
        <button>
          <FaLongArrowAltLeft onClick={prevSlide} />
        </button>
        <button>
          <FaLongArrowAltRight onClick={nextSlide} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
