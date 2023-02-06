import React from "react";
import styled from "styled-components";
import { Cards, SecondHero } from "../components/index";
import { GetinTouch } from "../Content";
import { Map } from "../UI";

const Contacts = () => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
    alert(`Message Sent`);
  };
  return (
    <Container>
      <SecondHero title="Contact Us" />
      <Map />
      <div className="container">
        <Cards data={GetinTouch} />
        <Form className="flex-column" onSubmit={formSubmitHandler}>
          <h4>Send a Message</h4>
          <InputWrapper className="flex">
            <input type="text" name="name" placeholder="Name*" required />
            <input type="email" name="email" placeholder="E-mail*" required />
          </InputWrapper>
          <textarea name="message" id="message" placeholder="Message*"></textarea>
          <div className="label flex">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label htmlFor="checkbox">I agree that my submitted data is being collected and stored.</label>
          </div>
          <button type="submit">SEND MESSAGE</button>
        </Form>
      </div>
    </Container>
  );
};

export default Contacts;

const Container = styled.div`
  iframe{
    min-height: 20rem;
  }
`
const Form = styled.form`
max-width: 700px;
gap: 1rem;
align-items: center;
margin: 4rem auto;
  h4{
    color:black;
    font-weight: 500;
    font-size: var(--font-subheading);
  }
  input:not([type=checkbox]),textarea{
    color: black;
    width: 100%;
    border: 1px solid var(--bg-gray);
  }

  .label{
    width: 100%;
    gap: 5px;
    justify-content: flex-start;
    label{
      color: black;
      font-size: 11px;
      cursor: pointer;
    }
  }

  button{
    background-color: transparent;
    color: black;
    padding: 1rem 1.5rem;
    margin-left: auto;
    border: 1px solid var(--bg-gray);
  }

`
const InputWrapper = styled.div`
  width: 100%;
  gap:1rem;

  @media (max-width:600px){
    flex-direction: column;
  }
`