import React from 'react'
import styled from 'styled-components'
import { SecondHero } from '../components'

const NotFound = () => {
    return (
        <Container>
            <SecondHero title="404" />
            <h2>404 Page Not Found.</h2>
            <p>You may have entered the wrong url or link is broken or changed. <br />Please go through navigations to find what you are looking for.</p>
        </Container>
    )
}

export default NotFound

const Container = styled.div`
    h2,p{
        color: black;
        text-align: center;
        max-width: 1000px;
        margin: 2rem auto;
    }
    h2{
        font-size: var(--font-heading);
    }
`