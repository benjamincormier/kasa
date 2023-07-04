import React, { useState } from "react";

import leftArrow from "../../assets/arrow-back.svg";
import rightArrow from "../../assets/arrow-forward.svg";

import "./carousel.styles.scss";

const Carousel = ({ pictures, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImg = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const nextImg = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <img
          onClick={prevImg}
          src={leftArrow}
          alt="previous"
          className="carousel__prev carousel__arrow"
        />
      )}
      <img
        className="carousel__img--active"
        src={pictures[currentIndex]}
        alt={title}
      />
      {pictures.length > 1 && (
        <img
          onClick={nextImg}
          src={rightArrow}
          alt="next"
          className="carousel__next carousel__arrow"
        />
      )}
    </div>
  );
};

export default Carousel;
