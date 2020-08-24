import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./HeroSlider.css";

const Slide = ({ slide, offset }) => {
  const active = offset === 0 ? true : null;
  return (
    <div className="slide" data-active={active} style={{ "--offset": offset }}>
      {slide.title} {offset}
    </div>
  );
};

const HeroSlider = ({ slides }) => {
  const slidesReducer = (state, event) => {
    if (event.type === "NEXT") {
      return {
        ...state,
        slideIndex: (state.slideIndex + 1) % slides.length,
      };
    }

    if (event.type === "PREV") {
      return {
        ...state,
        slideIndex:
          state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
      };
    }
  };

  const initialState = {
    slideIndex: 0,
  };
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);
  return (
    <div className="slides">
      {slides.map((slide, i) => {
        return <Slide slide={slide} offset={state.slideIndex - i} />;
      })}

      <button onClick={() => dispatch({ type: "PREV" })}>Previous</button>
      <button onClick={() => dispatch({ type: "NEXT" })}>Next</button>
    </div>
  );
};

export default HeroSlider;
