import React from "react";
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";

function Home() {
  const { inputValue, handleInput } = useInput();

  return (
    <>
      <h1>Home page</h1>
      <input type="text" value={inputValue} onChange={handleInput} />

      <h1>{inputValue}</h1>
      <Link to="/signup">To Signup</Link>
    </>
  );
}

export default Home;
