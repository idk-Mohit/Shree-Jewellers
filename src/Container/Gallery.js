import React from "react";
import styled from "styled-components";
import { Section1 } from "../components/index";
import {
  Background1,
  Background2,
  Background3,
  Background4,
  TestimonialBg,
  jewelryMaking,
  diamond1,
  diamond2,
  diamond_earring,
} from "../images/index";

const Gallery = () => {
  return (
    <>
      <Section1
        bgImage={
          "https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/06/home1_slide1.jpg"
        }
        title="Gallery"
        subtitle="GALLERY"
      />
      <Portfolio className="container">
        <h1>Our Portfolio</h1>
        <InnerDiv>
          <Container>
            <Image bgImage={Background1} />
            <Overlay className="overlay">
              <Text>Greatest Gifts</Text>
            </Overlay>
          </Container>
          <Container>
            <Image bgImage={Background2} />
            <Overlay className="overlay">
              <Text>Beautiful Wedding Rings</Text>
            </Overlay>
          </Container>
          <Container>
            <Image bgImage={Background3} />
            <Overlay className="overlay">
              <Text>Sapphires &amp; Purls</Text>
            </Overlay>
          </Container>
          <Container>
            <Image bgImage={Background4} />
            <Overlay className="overlay">
              <Text>The Best Artists</Text>
            </Overlay>
          </Container>
          <Container>
            <Image bgImage={TestimonialBg} />
            <Overlay className="overlay">
              <Text>Earring Design</Text>
            </Overlay>
          </Container>
          <Container>
            <Image bgImage={jewelryMaking} />
            <Overlay className="overlay">
              <Text>Perfection &amp; Quality</Text>
            </Overlay>
          </Container>
          <Container>
            <Image bgImage={diamond_earring} />
            <Overlay className="overlay">
              <Text>Gold &amp; Silver Combined</Text>
            </Overlay>
          </Container>
          <Container>
            <Image bgImage={diamond1} />
            <Overlay className="overlay">
              <Text>Sophisticated Jewelry</Text>
            </Overlay>
          </Container>
          <Container>
            <Image bgImage={diamond2} />
            <Overlay className="overlay">
              <Text>Unique Materials</Text>
            </Overlay>
          </Container>
        </InnerDiv>
      </Portfolio>
    </>
  );
};

export default Gallery;

const Portfolio = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  h1 {
    color: black;
    font-size: 3.5rem;
    margin-bottom: 2rem;
  }
`;

const InnerDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Image = styled.div`
  width: 20rem;
  height: 20rem;
  background-image: ${(props) => `url(${props.bgImage})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.7);
  display: block;
`;

const Container = styled.div`
  position: relative;
  // width: 50%;
  margin: 1rem;
  &:hover .overlay {
    height: 100%;
  }
`;
const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
  border-radius: 5px;
`;
const Text = styled.div`
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  text-transform: uppercase;
`;
