import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BlackLogo } from '../../images'

const Cards = ({ data, title }) => {
    const Items = data.map((item, index) => (
        <Card key={index} className="flex-column">
            <ImageContainer>
                {item.image && <img src={item.image} alt={item.title} />}
            </ImageContainer>
            <Content className="flex-column">
                <img src={BlackLogo} alt="Black Logo" />
                {item.title && <h5>{item.title}</h5>}
                {item.amount && <span>{item.amount}</span>}
                {item.link && <Link className='before-line' to={item.link}>
                    {item.linkText}
                </Link>}
            </Content>
        </Card>
    ))
    return (
        <Container className='flex-column'>
            {title && <h4>{title}</h4>}
            <Wrapper className='flex container'>
                {Items}
            </Wrapper>
        </Container>
    )
}

export default Cards

const Container = styled.section`
    align-items:center;
    padding: 4rem 0;
    background:var(--bg-lightgray);
    gap: 2rem;
    h4{
        color: black;
        font-size: var(--font-subheading);
        font-weight: 500;
    }
`
const Wrapper = styled.div`
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
`
const Card = styled.li`
    justify-content: center;
    align-items: center;
    gap: 1rem;
`
const ImageContainer = styled.div`
    width: 100%;
    max-width: 20rem;
    max-height: 15rem;
    img{
        width: inherit;
        max-width: inherit;
        max-height:inherit;
        box-shadow: var(--boxshadow-light);
        transition: var(--transition);
        &:hover{
            cursor: pointer;
            transition: var(--transition);
            transform: scale(1.02);
            box-shadow: var(--boxshadow-dark);
        }
    }
`
const Content = styled.div`
    align-items: center;
    gap:1rem;
    text-align: center;
    img{
        width:3.5rem;
    }
    a{
     color:var(--bg-darkgray);
     padding: 1rem;
     font-size:14px;
    }
    h5{
        font-size: 16px;
        font-weight: 400;
        color:black;
    }
    span{
        color:black;
    }
`
