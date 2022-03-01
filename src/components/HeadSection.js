import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeadSection = (props) => {
  return (
    <Section1 bgImage={props.bgImage}>
      <TextContainer>
        <h1>{props.title}</h1>
        <div>
          <span className="home_link">
            <Link to="/">HOME</Link>
          </span>
          &gt; <span>{props.subtitle}</span>
        </div>
      </TextContainer>
    </Section1>
  );
};

export default HeadSection;

const Section1 = styled.section`
  background-image: ${(props) => `url(${props.bgImage})`};
  height: 35rem;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 3.5rem;
    font-weight: 200;
  }
  div {
    margin: 1rem 0;
    font-weight: 600;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    span {
      font-weight: 500;
      font-size: 13px;
      margin: 0 1rem;
    }
    .home_link {
      &:hover {
        color: rgba(200, 200, 200, 0.5);
      }
    }
  }
`;
