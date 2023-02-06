import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { TestimonialBg } from '../../images'
import { Button } from '../../UI'
import TestimonialCarousel from '../Carousel/TestimonialCarousel'

const Testimonial = () => {
    return (
        <Container className='container'>
            <Left bgImage={TestimonialBg} className="flex-column">
                <h3>Accent your style with new collection.</h3>
                <Link to={'/'}><Button>Shop Now</Button></Link>
            </Left>
            <TestimonialCarousel />
        </Container>
    )
}

export default Testimonial

const Container = styled.section`
    min-height: 50rem;
    max-width: 60rem;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 1rem;
    padding: 5rem 0;
  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`
const Left = styled.div`
     background-image: linear-gradient(
       to right,
       rgba(0, 0, 0, 0),
     rgba(0, 0, 0, 0.8)
    ),
    ${(props) => `url(${props.bgImage})`};
  background-position: center;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  justify-content:center;
  align-items:center;
  text-align:center;
  h3 {
    max-width: 80%;
    margin-bottom: 1rem;
    font-weight: 400;
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    background-position:center;
    padding: 3rem 2rem;
  }
`