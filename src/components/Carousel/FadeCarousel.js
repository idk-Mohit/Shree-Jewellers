import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

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
    <Slider {...settings}>
      {props.data.map((item, index) => {
        return (
          <Item key={index} className="Carousel_Item">
            <p>{item.item}</p>
          </Item>
        );
      })}
    </Slider>
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
    @media(max-width:768px) {
      width:90%;
      font-size:14px;
    }
  }
`;
