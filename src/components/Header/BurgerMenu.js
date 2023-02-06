import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { X } from 'react-feather'
import { Links } from '../../Content'
import { BlackLogo } from '../../images'

const BurgerMenu = ({ burger, CloseMenu }) => {

    const navigations = Links.map((link, index) => (
        <li className='hover-line' key={index}>
            <NavLink onClick={CloseMenu} to={link.link} aria-label={link.label}>
                <span>{link.linkText}</span>
            </NavLink>
        </li>
    ))

    return (
        <>
            <Blur show={burger} onClick={CloseMenu} />
            <InnerContainer className='transition flex-column' show={burger}>
                <X className='BurgerCloseIcon feather' onClick={CloseMenu} />
                <Logo src={BlackLogo} />
                <hr />
                <List className="flex-column">
                    {navigations}
                </List>
            </InnerContainer>
        </>
    )
}

export default BurgerMenu

const Blur = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,.5);
    display: ${props => (props.show ? 'block' : 'none')};
    z-index: 1;
`

const InnerContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0px;
    bottom: 0;
    justify-content: center;
    align-items: center;
    padding: 50px 10px;
    width: min(75vw, 300px);
    height: 100vh;
    outline: 0px;
    z-index: 10;
    background-color: rgba(255,255,255,.9);
    box-shadow: -10px 0px 30px -15px rgba(0,0,0,.7);
    transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
    transition: 300ms ease;
   
    .BurgerCloseIcon{
        position: absolute;
        top: 2.8rem;
        right: 1.5rem;
        stroke:black;
        width: 40px;
        height: 40px;
    }

    hr {
        width: 40%;
        margin: 1rem auto 0;
        border-color: rgba(0, 0, 0, 1);
    }
`

const Logo = styled.img`
  width: 4rem;
`;

const List = styled.ul`
    margin: 1rem 0;
    height: 50%;
    gap: 1.5rem;
    align-items: center;
    justify-content: space-around;
    li{
        padding-bottom: 5px;
        span{
            color: black;
            font-size: 1rem;
        }
    }
`
