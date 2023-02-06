import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Map } from "../UI/index";

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
      <Map />
    </SignUp>
  );
};

export default SignUpSection;

const SignUp = styled.div`
  max-width: 1000px;
  display: grid;
  grid-template-columns: 50% auto;
  grid-gap: 1rem;
  padding: 5rem 0;
  @media (max-width: 768px) {
    grid-template-columns: 100%;
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
      width: 100%;
      margin: 0 0.5rem 0.5rem 0;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
      transition: 300ms ease;
      &:hover,
      &:active,
      &:focus {
        box-shadow: 5px 5px 10px rgba(0, 0, 0, .5);
        transition: 300ms ease;
      }
    }
    button {
      margin: 0;
      padding: 1rem 1.5rem;
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
