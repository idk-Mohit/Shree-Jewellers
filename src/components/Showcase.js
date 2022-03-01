import React from "react";
import { NavLink } from "react-router-dom";
import { BlackLogo } from "../images/index";
import styled from "styled-components";

const Showcase = ({ image, title, link, btn, price }) => {
  return (
    <div>
      <ShowCase>
        <div>
          {image ? <Image src={image} alt="diamond ring" /> : ""}
          <img className="small-logo" src={BlackLogo} alt="logo" />
          <h3>{title}</h3>
          {price ? <span>${price}</span> : ""}
          <hr />
          <NavLink to={`/${link}`}>
            <span>{btn}</span>
          </NavLink>
        </div>
      </ShowCase>
    </div>
  );
};

export default Showcase;

const ShowCase = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem 0.5rem;

    h3 {
      color: black;
    }

    span {
      margin: 1rem 0;
      color: rgba(0, 0, 0, 0.6);
      &:hover {
        color: rgba(0, 0, 0, 1);
      }
    }

    hr {
      border: 0.1px solid rgba(170, 168, 168, 0.4);
      width: 10rem;
      margin: 1rem 0;
    }
    .small-logo {
      margin: 0.5rem 0;
      width: 3rem;
    }
  }
`;

const Image = styled.img`
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.4);
  max-width: 20rem;
  max-height: 20rem;
  transition: 300ms;
  &:hover {
    cursor: pointer;
    box-shadow: 5px 5px 16px rgba(0, 0, 0, 0.8);
    transform: scale(1.02);
    transition: 300ms;
  }
`;
