import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./index";

const SignUpSection = () => {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    alert(`Updates Turn On for ${email}`);
  };
  const checkBoxHandler = (e) => {
    setChecked(!checked);
  };
  return (
    <SignUp className="container">
      <LeftSignUpDiv>
        <h1>SIGNUP FOR UPDATES</h1>
        <form onSubmit={formSubmitHandler}>
          <div className="input_button">
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Email Address"
              required={true}
              onChange={emailHandler}
            />
            <Button type="submit">SUBMIT</Button>
          </div>
          <div className="checkbox_label">
            <input
              type="checkbox"
              name="terms"
              id="termsconditions"
              onChange={checkBoxHandler}
              checked={checked}
              required={true}
            />
            <label htmlFor="termsconditions">
              <span>
                I have read and agree to the{" "}
                <Link to="/">Terms &amp; conditions</Link>
              </span>
            </label>
          </div>
        </form>
      </LeftSignUpDiv>
      <AddressMap>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11779.228226902611!2d77.21375271973137!3d28.63019654968136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1646113643639!5m2!1sen!2sin"
          title="map"
          loading="lazy"
        ></iframe>
      </AddressMap>
    </SignUp>
  );
};

export default SignUpSection;

const SignUp = styled.div`
  min-height: 50rem;
  max-width: 60rem;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 1rem;
  padding: 5rem 0;
  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;

const AddressMap = styled.div`
  iframe {
    width: 100%;
    height: 100%;
  }
`;
const LeftSignUpDiv = styled.div`
  background: rgba(0, 0, 0, 0.8);
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .input_button {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 1rem 0;
    input {
      margin: 0 0.5rem 0.5rem 0;
    }
    button {
      margin: 0;
      padding: 1.5rem;
    }
  }
  .checkbox_label {
    display: flex;
    height: 2rem;
    position: relative;
    input {
      margin-top: 0.3rem;
    }
    label {
      position: absolute;
      left: 1.2rem;
      top: 0;
      span {
        color: rgba(200, 200, 200, 0.5);
      }
    }
  }
`;
