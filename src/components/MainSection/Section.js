import { useState } from "react";
import styled from "styled-components";
import { SliderData } from "./SliderData";
import { Button } from "../index";
import { Logo } from "../../images";
import { Bounce, Fade } from "react-reveal";

const Section = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  setTimeout(() => nextSlide(), 10000);

  if (!Array.isArray(slides) || slides.length === 0) {
    return null;
  }

  return (
    <Container>
      {nextSlide}
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <Image bgImage={slide.image} alt="">
                <Data>
                  <Fade left>
                    <img src={Logo} alt="" />
                    <h1>
                      {slide.title1} <br /> {slide.title2}
                    </h1>
                    <hr />
                    <span>{slide.subtitle}</span>
                  </Fade>
                  <Bounce right>
                    <Button>SHOP NOW</Button>
                  </Bounce>
                </Data>
              </Image>
            )}
          </div>
        );
      })}
    </Container>
  );
};

export default Section;

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.bgImage})`};
  height: 100vh;
  min-height:50rem;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 4.5rem;
    @media(max-width:768px){
      font-size:3rem;
    }
  }
  hr {
    width: 12rem;
    margin: 2rem 0;
    // background-color:black;
    // color:black;
    height: 1px;
    border: 0.2px solid rgba(255, 255, 255, 0.6);
    border-radius: 5px;
  }
  span {
    font-weight: 600;
  }
  img {
    margin: 1rem 0;
  }
  @media(max-width:768px) {
    width:90%;
    margin:auto;
  }
`;
