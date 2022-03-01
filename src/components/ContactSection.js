import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Signature, Logo } from "../images/index";

const ContactSection = () => {
  return (
    <ContactInfoSection className="container">
      <ContactText>
        <h1>Created for Love</h1>
        <p>
          Jewellery may be made from a wide range of materials. Gemstones and
          similar materials such as amber and coral, precious metals, beads, and
          shells have been widely used, and enamel has been important.
        </p>
        <img src={Signature} alt="Sign" />
      </ContactText>
      <ContactImage></ContactImage>
      <ContactInnerDiv>
        <img src={Logo} alt="logo" />
        <h4>CONTACT ME</h4>
        <hr />
        <div>
          <Link to="/">
            <span>123-456-7890</span>
          </Link>
          <Link to="/">
            <span>info@yoursite.com</span>
          </Link>
        </div>
      </ContactInnerDiv>
    </ContactInfoSection>
  );
};

export default ContactSection;

const ContactInfoSection = styled.div`
  color: black;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  grid-template-areas:
    "text image"
    "info image";
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "text"
      "info";
  }
`;

const ContactText = styled.div`
  padding: 2rem;
  max-width: 40rem;
  grid-area: text;
  background: rgba(200, 200, 200, 0.3);
  h1 {
    color: black;
    font-size: 4rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }
  p {
    color: black;
    font-weight: 400;
    letter-spacing: 1px;
    color: gray;
    line-height: 110%;
  }
  img {
    margin: 2rem 0;
  }
`;
const ContactInnerDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  img {
    width: 4rem;
    margin-bottom: 1.5rem;
  }
  hr {
    margin: 1rem 0;
    width: 8rem;
  }

  div {
    grid-area: info;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ContactImage = styled.div`
  grid-area: image;
  height: 50rem;
  max-width: 40rem;
  background-image: url(https://images.pexels.com/photos/5475580/pexels-photo-5475580.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.6);
  @media (max-width: 768px) {
    display: none;
  }
`;
