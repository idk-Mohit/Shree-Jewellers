import React from "react";
import styled from "styled-components";
import { Showcase, Section1, Button } from "../components/index";

const Contacts = () => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
    alert(`Message Sent`);
  };
  return (
    <>
      <Section1
        bgImage={
          "https://pabloguadi.ancorathemes.com/wp-content/uploads/2016/06/home1_slide1.jpg"
        }
        title="Contacts"
        subtitle="CONTACTS"
      />
      <AddressMap>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11779.228226902611!2d77.21375271973137!3d28.63019654968136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1646113643639!5m2!1sen!2sin"
          title="map"
          loading="lazy"
        ></iframe>
      </AddressMap>
      <GetInTouch>
        <h1>GET IN TOUCH</h1>
        <Showcase
          data={[
            { title: "PHONE NUMBER", btn: "123-456-7890" },
            { title: "LOCATION", btn: "123, New Lenox Chicago,1L 60606" },
            { title: "EMAIL ADDRESS", btn: "info@yoursite.com" },
          ]}
        />
      </GetInTouch>
      <Container className="container">
        <h1>Send A Message</h1>
        <MessageForm onSubmit={formSubmitHandler} className="container">
          <input type="name" id="name" placeholder="Name" required={true} />
          <input type="email" id="email" placeholder="E-mail" required={true} />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
            required={true}
          ></textarea>
          <div className="checkbox_label">
            <input type="checkbox" name="terms" id="checkbox" required={true} />
            <label htmlFor="checkbox">
              <span>
                I agree that my submitted data is being collected and stored.
              </span>
            </label>
          </div>
          <Button type="submit">SEND MESSAGE</Button>
        </MessageForm>
      </Container>
    </>
  );
};

export default Contacts;

const AddressMap = styled.div`
  iframe {
    width: 100%;
    height: 20rem;
  }
`;

const GetInTouch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(170, 168, 168, 0.1);
  h1 {
    color: black;
    margin-top: 3rem;
  }
  div {
    padding-top: 0rem;
    background-color: rgba(0, 0, 0, 0);
  }
`;

const Container = styled.section`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem 0;
  h1 {
    font-size: 3.5rem;
    font-weight: 300;
  }
`;

const MessageForm = styled.form`
  display: flex;
  margin: 3rem 0 1rem;
  flex-direction: column;
  align-items: center;
  max-width: 30rem;
  input,
  textarea {
    margin: 0.5rem 0;
    width: 100%;
    background-color: transparent;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    transition: 300ms;
    &:hover,
    &:active,
    &:focus {
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 1);
      transform: scale(1.02);
      transition: 300ms;
    }
  }
  .checkbox_label {
    margin-top: 1rem;
    display: flex;
    height: 2rem;
    position: relative;
    input {
      width: fit-content;
      margin: 0.3rem 0.5rem 0 0;
    }
    label {
      span {
        color: rgba(200, 200, 200, 0.5);
      }
    }
  }
  button {
    margin-left: auto;
  }
`;
