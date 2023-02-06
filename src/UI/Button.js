import React from "react";
import styled from "styled-components";

const Btn = ({ children, type }) => {
  return <Button type={type}>{children}</Button>;
};

export default Btn;

const Button = styled.button`
  border: 1px solid white;
  margin: 2rem 0;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 2rem 3rem;
  transition: 300ms;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  letter-spacing: 4px;
  font-size: 10px;
  font-weight: 600;
  width: fit-content;
  line-height:180%;
  &:hover {
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
    transition: 300ms;
    color: black;
    background-color: white;
  }
`;
