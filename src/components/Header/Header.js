import styled from "styled-components";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import { Menu, ShoppingCart } from "react-feather";
import { useEffect } from "react";
import sr, { srConfig } from '../../utils/srConfig'
import navbarHelper from "../../utils/navbarHelper";

const Header = () => {
  const revealContainer = useRef(null)
  const revealLogo = useRef(null)
  const [burgerStatus, setBurgerStatus] = useState(false);
  const OpenMenuHandler = () => {
    setBurgerStatus(true)
  }
  const CloseMenuHandler = () => {
    setBurgerStatus(false)
  }
  useEffect(() => {
    sr.reveal(revealLogo.current, srConfig(200, "top"))
    sr.reveal(revealContainer.current, srConfig(400, "right"))
    navbarHelper()
    return () => document.removeEventListener("scroll", navbarHelper);
  }, [])
  return (
    <Nav className="main-header">
      <Contact>
        <span>123-456-7890</span>|<span>info@yoursite.com</span>
      </Contact>
      <Link to="/#">
        <Logo ref={revealLogo} src="https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/06/logo2x.png" />
      </Link>
      <UserSection ref={revealContainer}>
        <CartButton className="header_button flex"><ShoppingCart /> ( 0 )</CartButton>
        <Menu className="feather BurgerOpenMenu" onClick={OpenMenuHandler} />
      </UserSection>
      <BurgerMenu className="BurgerMenuIcon" burger={burgerStatus} CloseMenu={CloseMenuHandler} />
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  padding:2rem;
  display: flex;
  position: fixed;
  height: 100px;
  top: 0;
  left: 0;
  right: 0;
  /* backdrop-filter: blur(4px); */
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  box-sizing: border-box;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  @media (max-width: 425px) {
    padding:2rem 1rem;
  }
`;
const Contact = styled.div`
  span {
    margin: 0 0.2rem;
    padding: 0 0.5rem;
    &:hover {
      color: rgba(255, 255, 255, 0.4);
      cursor: pointer;
    }
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;
const Logo = styled.img`
  width: 10rem;
  @media (max-width: 768px) {
    width: 8rem;
  }
  @media (max-width: 425px) {
    width: 7rem;
  }
`;
const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 1;
  .BurgerOpenMenu{
    width: 30px;
    height: 30px;
    stroke-width: 1.5px;
  }
`;

const CartButton = styled.button`
  border: none;
  align-items: center;
  gap: 5px;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0.7rem 1rem;
  border-radius: 5px;
  transition: 200ms;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
    transition: 200ms;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
