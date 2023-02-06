import React from 'react'
import styled from 'styled-components'

const BackgroundSection = ({ children, bgImage }) => {
    return (
        <Container bgImage={bgImage} className="flex">
            {children}
        </Container>
    )
}

export default BackgroundSection

const Container = styled.section`
    height: 100%;
    width: 100%;
    min-height:45rem;
    align-items: center;
    background-image: ${props => `url(${props.bgImage})`};
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
`
