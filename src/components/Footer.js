import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <InnerContainer className="container flex">
        <div className="flex-column logo-terms">
          <img src="https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/06/logo2x.png" alt="MainLogo" />
          <p>Shree Jewellers © 2023.<br /> All rights reserved.</p>
        </div>
        <div className="flex links">
          <List>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/About'>About</NavLink></li>
            <li><NavLink to='/Service'>Service</NavLink></li>
            <li><NavLink to='/Gallery'>Gallery</NavLink></li>
          </List>
          <List>
            <li><NavLink to='/Gallery'>Portfolio</NavLink></li>
            <li><NavLink to='/Price'>Price</NavLink></li>
            <li><NavLink to='/Blog'>Blog</NavLink></li>
            <li><NavLink to='/Contacts'>Contacts</NavLink></li>
          </List>
        </div>
      </InnerContainer>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  background-color: rgba(0, 0, 0, 0.85);
  
`;
const InnerContainer = styled.div`
    padding: 5rem 0;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    p{
      font-size: 14px;
      color: gray
    }
    .logo-terms{
    width: 15rem;
    gap:2rem;
    text-align: center;
  }
  .links {
    justify-content: space-evenly;
  }
  @media (max-width:600px) {
      gap: 2rem;
      flex-direction: column;
      flex-flow: column-reverse;
  }
`
const List = styled.ul`
  display: flex;
  flex-direction: column;
  /* margin-right:3rem; */
  align-items: center;
  li {
    padding:1rem;
  }
`;
