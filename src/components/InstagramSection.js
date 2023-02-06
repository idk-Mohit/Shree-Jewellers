import React from 'react'
import styled from 'styled-components';
import { Button } from '../UI';
import { Instagram1, Instagram2, Instagram3, Instagram4, Instagram5 } from '../images';

const InstagramSection = () => {
  const InstaList = [Instagram1, Instagram2, Instagram3, Instagram4, Instagram5];
  const Items = InstaList.map((photo, index) => (
    <li key={index}>
      <img src={photo} alt="" />
    </li>
  ));
  return (
    <Container className='flex-column'>
      <h3>Follow On Instagram #shreeJewellers</h3>
      <a href="/#" target="_blank" rel="noopener noreferrer">
        <Button>VISIT INSTAGRAM PAGE</Button>
      </a>
      <List className='flex'>
        {Items}
      </List>
    </Container>
  )
}

export default InstagramSection

const Container = styled.section`
  align-items: center;
  gap: 2rem;
  padding-top: 4rem;

  h3{
    color: black;
    font-size: var(--font-heading);
    text-align: center;
    font-weight: 400;
  }
  
  button {
    background-color: rgba(0, 0, 0, 0.8);
    border: 1px solid black;
    &:hover {
      border: 1px solid black;
    }
  }
`;

const List = styled.ul`
  width: 100%;
  flex-wrap: nowrap;
  max-height:20rem;
  height: 100%;
  li {
    width: 20%;

    img{
      width: 100%;
      max-width: 100%;
      height: auto;
    }
  }
`

