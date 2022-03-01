import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { jewelryMaking } from "../../images/index";
import { Button } from "../index";

const FadeCarousel = (props) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    appendDots: (dots) => (
      <div className="dots-container">
        <ul className="dots-list"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="carousel_number">
        {i + 1} <hr className="carousel-line" />{" "}
      </div>
    ),
  };
  return (
    <CarouselContainer bgImage={jewelryMaking}>
      <TextContainer className="carousel_text-container">
        <h1>Brand's History</h1>
        <Slider {...settings}>
          {props.data.map((item, index) => {
            return (
              <Item key={index} className="Carousel_Item">
                <p>{item.item}</p>
              </Item>
            );
          })}
        </Slider>
        <Button>Read More</Button>
      </TextContainer>
    </CarouselContainer>
  );
};

export default FadeCarousel;

const Item = styled.div`
  position: relative;
  display: flex;
  padding: 1rem 1rem 0 0;
  width: 80% !important;
  height: auto;
  p {
    font-weight: 300;
    font-size: 18px;
    letter-spacing: 1px;
    line-height: 150%;
    width: 70%;
    height: auto;
    @media (max-width: 768px) {
      width: 90%;
      font-size: 14px;
    }
  }
`;

const CarouselContainer = styled.div`
  background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.4)
    ),
    ${(props) => `url(${props.bgImage})`};
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  // height: 30rem;
  position: relative;
  box-sizing: border-box;
`;

const TextContainer = styled.div`
  position: relative;
  padding: 10rem 0;
  width: 50%;
  margin-left: auto;
  h1 {
    font-size: 4rem;
    font-weight: 300;
  }
  @media (max-width: 1024px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }
`;
