import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./HeroSlider.css";

const Slide = ({ slide, offset }) => {
  const active = offset === 0 ? true : null;
  return (
    <div
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
        backgroundImage: `url('${slide.image}')`,
      }}
    >
      <div className="slideContent">
        <h2>{slide.title}</h2>
        <h3>{slide.description}</h3>
        {offset}
      </div>
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
      {/* keeps index 0 slide front and center */}
      <button onClick={() => dispatch({ type: "PREV" })}>›</button>

      {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}

      <button onClick={() => dispatch({ type: "NEXT" })}>‹</button>
    </div>
  );
};

export default HeroSlider;
