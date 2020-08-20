import React from "react";
import "./slider.scss";

const Carousel = () => {
  let sliderArr = [1, 2, 3, 4, 5];

  return (
    <div className="sliderContain">
      <div className="slider">
        {sliderArr.map((item, index) => {
          return (
            <div key={index} className="slide">
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
