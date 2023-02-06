import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { HeroImage } from '../../images'

const SecondHero = ({ title }) => {
    return (
        <Container bgImage={HeroImage} className="flex-column">
            <h1>{title}</h1>
            <nav className='flex'><Link to='/'>Home</Link> &gt; <span>{title}</span></nav>
        </Container>
    )
}

export default SecondHero

const Container = styled.section`
    width:100%;
    height: 35rem;
    justify-content:center;
    align-items:center;
    gap: 1.8rem;
    background-image: ${props => `url(${props.bgImage})`};
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;

    h1{
        font-size:var(--font-heading);
        color:white;
        font-weight:500;
    }
    a{
        color:var(--bg-gray);
        font-size:14px;
    }
    span {
        font-size:14px;
        letter-spacing:.5px;
    }

    nav{
        align-items:center;
        gap:.5rem;
    }
`