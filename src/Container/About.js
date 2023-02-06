import React from 'react';
import styled from 'styled-components';
import { Cards, SecondHero, ContactInfo, History, SignUpSection } from '../components';
import { GetinTouch, ShowCaseData, TeamData } from '../Content';

const About = () => {
  return (
    <Container>
      <SecondHero title='About Us' />
      <Cards data={ShowCaseData} />
      <ContactInfo />
      <History />
      <Cards data={TeamData} title="Our Team" />
      <SignUpSection />
      <Cards title='GET IN TOUCH' data={GetinTouch} />
    </Container>
  )
}

export default About

const Container = styled.div``