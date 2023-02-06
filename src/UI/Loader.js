import React from 'react'
import styled from 'styled-components'

const Loader = () => {
    return (
        <Container className="container">
            <div />
        </Container>
    )
}

export default Loader

const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: var(--bg-dark-navy);
    z-index: 10001;
    place-items: center;

    div{
        border: 16px solid #f3f3f3; /* Light grey */
        border-top: 16px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
        margin: 3rem auto 0;
    }
`