import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  SignUpSection,
  Hero,
  Cards,
  Testimonial,
  History,
  ContactInfo,
  BackgroundSection,
  InstagramSection,
} from "../components/index";
import { Button } from "../UI";
import { Background5 } from "../images/index";
import { postData, ShowCaseData, productData, GetinTouch } from "../Content";

const Home = () => {
  return (
    <>
      <Hero />
      <Cards data={ShowCaseData} />
      <ContactInfo />
      <History />
      <Testimonial />
      <Cards title="Top Products" data={productData} />
      <BackgroundSection bgImage={Background5}>
        <Wrapper className="flex-column container">
          <h2>
            Singular &amp; <br />
            Personal
          </h2>
          <p>
            In creating jewellery, gemstones, coins, or other precious items are
            often used, and they are typically set into precious metals. Alloys
            of nearly every metal known have been encountered
          </p>
          <Link to="/">
            <Button>READ MORE</Button>
          </Link>
        </Wrapper>
      </BackgroundSection>
      <Cards title="Recent Posts" data={postData} />
      <InstagramSection />
      <SignUpSection />
      <Cards title='GET IN TOUCH' data={GetinTouch} />
    </>
  );
};

export default Home;

const Wrapper = styled.div`
  gap: 2rem;

  h2 {
    font-size: var(--font-heading);
    font-weight: 400;
  }

  button{
    margin: 0;
  }
`