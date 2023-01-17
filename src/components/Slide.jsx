import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import styled from "styled-components";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slide = () => {
  return (
    <>
      <Carousel responsive={responsive}>
        <Stcard>임시</Stcard>
        <Card />
        <Card />
        <Card />
        <Card />
      </Carousel>
      ;
    </>
  );
};

export default Slide;

const Stcard = styled.div`
  border: 1px solid;
  width: 100ppx;
  height: 100px;
`;
