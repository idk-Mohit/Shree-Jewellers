import React, { useState } from "react";
import styled from "styled-components";
import { ArrowUpCircle } from "react-feather";

const ScrollUpButton = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <ScrollBtn
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
      className="flex"
    >
      <ArrowUpCircle className="feather scrollUp" />
    </ScrollBtn>
  );
};

export default ScrollUpButton;

const ScrollBtn = styled.button`
  position: fixed;
  right: 1rem;
  bottom: 10px;
  z-index: 1;
  cursor: pointer;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  background-color: transparent;
  transition: 300ms ease;
  
  .scrollUp {
    stroke: gray;
    transition: 300ms ease;
    width: inherit;
    height: inherit;
  }

  &:hover{
    .scrollUp{
      transform: scale(1.3) translateY(-5px);
      stroke: black;
      transition: 300ms ease;
    }
  }
`;
