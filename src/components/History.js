import React from 'react'
import styled from 'styled-components'
import { jewelryMaking } from '../images'
import VerticalCarousel from './Carousel/VerticalCarousel'

const History = () => {
    return (
        <Container className='flex' bgImage={jewelryMaking}>
            <VerticalCarousel />
        </Container>
    )
}

export default History

const Container = styled.section`
    background-image: linear-gradient(to left, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)),${props => `url(${props.bgImage})`};
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    width:100%;
    height:45rem;
    align-items:center;
`