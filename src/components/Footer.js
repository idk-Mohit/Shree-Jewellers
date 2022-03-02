import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <div className="container">
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
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  background-color: rgba(0, 0, 0, 0.85);
  div.container {
    display: flex;
    padding: 5rem 0;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-right:3rem;
  li {
    padding:1rem;
  }
`;
