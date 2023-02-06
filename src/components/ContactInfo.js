import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Logo, Signature } from "../images";

const ContactSection = () => {
  return (
    <Container className="container grid">
      <Content className="flex-column">
        <Para className="flex-column">
          <h2>Created for Love</h2>
          <p>Jewellery may be made from a wide range of materials. Gemstones and similar materials such as amber and coral, precious metals, beads, and shells have been widely used, and enamel has been important.
          </p>
          <img className="sign" src={Signature} alt="" />
        </Para>
        <Contact className="flex-column">
          <img src={Logo} alt="" />
          <h5 className="after-line">CONTACT ME</h5>
          <Link to="/">123-456-7890</Link>
          <Link to="/">infor@yoursite.com</Link>
        </Contact>
      </Content>
      <Image />
    </Container>
  );
};

export default ContactSection;

const Container = styled.div`
  max-width: 1000px;
  margin: 4rem auto;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width:768px) {
    grid-template-columns: 1fr;
  }
`
const Content = styled.div`
  gap: 1rem;
`
const Para = styled.div`
  border-radius: 4px;
  padding:3rem 2rem;
  background-color: var(--bg-lightgray);
  gap: 1rem;
  h2{
    color: black;
    font-size: var(--font-heading);
    font-weight: 300;
  }
  p{
    color: gray;
    line-height: 150%;
    font-size: 14px;
    letter-spacing: .8px;
  }
  .sign{
    width: 8rem;
  }
`
const Contact = styled.div`
  padding:3rem 2rem;
  background-color: black;
  color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  border-radius: 4px;
  h5{
    position: relative;
    font-size: var(--font-smallheading);
    font-weight: 400;
    padding-bottom: 10px;
    ::after{
      background: gray;
    }
  }
  img{
    width: 3rem;
  }
`
const Image = styled.div`
  border-radius: 4px;
  background-image: url("https://images.pexels.com/photos/5475580/pexels-photo-5475580.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;

  @media (max-width:768px) {
    display: none;
  }
`