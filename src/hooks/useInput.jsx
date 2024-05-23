import { useState, useEffect } from "react";

function useInput() {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  useEffect(() => {
    inputValue.length <= 3 && inputValue.length !== 0
      ? setErrorMessage("input is too short")
      : setErrorMessage(null);
  }, [inputValue]);

  return {
    inputValue,
    handleInput,
    errorMessage,
  };
}

export default useInput;
