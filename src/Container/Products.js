import React from 'react';
import styled from 'styled-components';
import { Cards, SecondHero, InstagramSection } from '../components';
import { TopProducts } from '../Content';

const Products = () => {
    return (
        <Container>
            <SecondHero title='Top Products' />
            <Cards data={TopProducts} />
            <InstagramSection />
        </Container>
    )
}

export default Products

const Container = styled.div``