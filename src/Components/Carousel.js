/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";
import CarouselContent from "./CarouselContent";
import Slide from "./Slide";
import Arrow from "./Arrow";

/**
 * @function Carousel
 */
const Carousel = ({ slides }) => {
  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition, activeIndex } = state;

  const nextSlide = () => {
    if (activeIndex === slides.length - 1) {
      return setState({
        ...state,
        transition: 0,
        activeIndex: 0,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth(),
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (slides.length - 1) * getWidth(),
        activeIndex: slides.length - 1,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth(),
    });
  };

  return (
    <div css={CarouselCSS}>
      <CarouselContent
        translate={translate}
        transition={transition}
        width={getWidth() * slides.length}
      >
        {slides.map((slide, i) => (
          <Slide key={slide + i} content={slide} />
        ))}
      </CarouselContent>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
    </div>
  );
};

const CarouselCSS = css`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`;
export default Carousel;
