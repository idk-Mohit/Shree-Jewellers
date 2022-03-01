import styled from "styled-components";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu as MenuIcon, Close as MenuClose } from "@material-ui/icons";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Nav>
      <Contact>
        <span>123-456-7890</span>|<span>info@yoursite.com</span>
      </Contact>
      <NavLink to="/">
        <Logo src="https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/06/logo2x.png" />
      </NavLink>
      <UserSection>
        <CartIcon />
        <CartButton className="header_button">CART ( 0 )</CartButton>
        <CustomMenu onClick={() => setBurgerStatus(true)}></CustomMenu>
        <BurgerMenu show={burgerStatus}>
          <CloseMenu onClick={() => setBurgerStatus(false)}></CloseMenu>
          <MenuImage src="https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/06/slider_icon.png"></MenuImage>
          <h1>MENU</h1> <hr />
          <List>
            <li>
              <NavLink to="/">
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/About">
                <span>About</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Products">
                <span>Products</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Gallery">
                <span>Gallery</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Price">
                <span>Price</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contacts">
                <span>Contacts</span>
              </NavLink>
            </li>
          </List>
        </BurgerMenu>
      </UserSection>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  padding: 4rem 2rem 2rem;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  height: 6rem;
  z-index: 999;
  box-sizing: border-box;
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
  width: 14rem;
  padding: 1rem;
  @media (max-width: 768px) {
    width: 11rem;
  }
  @media (max-width: 425px) {
    width: 9rem;
  }
`;
const UserSection = styled.div`
  display: flex;
  align-items: center;
  .MuiSvgIcon-root {
    // fill: white;
    font-size: 3rem;
  }
`;

const CartIcon = styled(ShoppingCartIcon)`
  display: none !important;
  font-size: 2rem !important;
  @media (max-width: 768px) {
    display: block !important;
  }

  &:hover {
    cursor: pointer;
  }
`;

const CartButton = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0.7rem 1.5rem;
  border-radius: 5px;
  transition: 200ms;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
    transition: 200ms;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const CustomMenu = styled(MenuIcon)`
  margin-left: 0.5rem;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 890px) {
    display: block !important;
  }
`;
const BurgerMenu = styled.div`
  h1 {
    color: white;
  }
  position: fixed;
  top: 0px;
  bottom: 0;
  right: 0;
  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.2)
  );
  width: 400px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 2rem 4rem;
  transition: 300ms ease-in;
  li {
    box-sizing: border-box;
    transition: 300ms;
    cursor: pointer;
    border-radius: 10px;
    margin: .5rem 0;
    padding: .5rem 2rem;
    :hover {
      background-color: rgba(255, 255, 255, 0.2);
      transition: 300ms ease-out;
    }
  }
  span {
    color: white;
    padding: 0.7rem 0;
    display: inline-block;
    width: 100%;
    font-size:1rem;
    box-sizing: border-box;
    font-weight:200;
  }
  .MuiSvgIcon-root {
    fill: white;
  }
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in;
  #BurgerMenuLoginBtn {
    display: none;
    border: 1px solid rgba(255, 255, 255, 0.4);
    @media (max-width: 625px) {
      display: block;
    }
  }

  hr {
    width: 40%;
    margin: 1rem auto 0;
    border-color: rgba(255, 255, 255, 0.4);
  }
  @media (max-width: 625px) {
    width: 280px;
    padding: 1.8rem 2.2rem;
  }
`;

const MenuImage = styled.img`
  width: 4.5rem;
  margin: 6rem 0 2rem;
`;

const CloseMenu = styled(MenuClose)`
  position: absolute;
  right: 2rem;
  top: 2.4rem;
  margin-left: auto;
  cursor: pointer;
  :hover {
    animation: animateDown 1.5s;
  }
`;

// const Cart = styled.button``;
const List = styled.ul``;
// const Item = styled.li``;
