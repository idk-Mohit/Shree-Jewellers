import React from 'react'
import styled from 'styled-components'
import { SecondHero } from '../components'
import { Portfolio } from '../Content'

const Gallery = () => {
    const gallery = Portfolio.map((item, index) => (
        <Overlay bgImage={item.image}>
            <div className='flex text'>
                <h3>{item.title}</h3>
            </div>
        </Overlay>
    ))
    return (
        <Container>
            <SecondHero title="Gallery" />
            <h2>Portfolio</h2>
            <Grid className='container'>
                {gallery}
            </Grid>
        </Container>
    )
}

export default Gallery

const Container = styled.div`
    h2{
        text-align: center;
        color:black;
        font-weight: 600;
        font-size: var(--font-heading);
        margin: 4rem auto;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin: 4rem auto;

    @media(max-width:1024px){
        grid-template-columns: 1fr 1fr;
    }
    @media(max-width:768px){
        grid-template-columns: 1fr;
        padding: 1rem;
    }
`
const Overlay = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 350px;
    max-height: 400px;
    background-image: ${props => `url(${props.bgImage})`};
    background-repeat:no-repeat;
    background-position:center;
    background-size:cover;
    border-radius:4px;
    transition:300ms ease;
    
    &:hover{
        div{
            opacity:1;
        }
    }

    .text{
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        opacity:0;
        align-items: center;
        justify-content: center;
        background:rgba(0,0,0,.7);
        transition: opacity 300ms ease;
        border-radius:4px;
    }
`