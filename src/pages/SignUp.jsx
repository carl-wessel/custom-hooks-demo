import React from "react";
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";

function SignUp() {
  const nameInput = useInput();
  const emailInput = useInput();
  return (
    <>
      <h1>Signup page</h1>
      <input
        type="text"
        placeholder="Name"
        value={nameInput.inputValue}
        onChange={nameInput.handleInput}
      />
      <input
        type="text"
        placeholder="Email"
        value={emailInput.inputValue}
        onChange={emailInput.handleInput}
      />
      <Link to="/">To Home</Link>
      <h1>
        {nameInput.errorMessage} {emailInput.errorMessage}
        Name: {nameInput.inputValue} Email: {emailInput.inputValue}
      </h1>
    </>
  );
}

export default SignUp;
