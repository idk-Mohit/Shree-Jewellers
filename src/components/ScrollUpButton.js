import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./index";
import EjectIcon from "@material-ui/icons/Eject";

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
    >
      <EjectIcon />
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
  border: 1px solid white;
  background-color: rgba(0,0,0,.2);
  padding: 0.7rem 0.8rem;
  border-radius: 50px;
  transition: 300ms;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  // font-size: 10px;
  width: fit-content;
  .MuiSvgIcon-root {
    font-size:2rem;
    fill:rgba(0,0,0,.5);
  }
  &:hover {
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
    transition: 300ms;
    color: black;
    background-color: white;
    .MuiSvgIcon-root {
      fill: black !important;
    }
  }
`;
