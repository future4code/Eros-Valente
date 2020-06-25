import React, { useState } from "react";

const useInputValue = initialState => {
  const [inputValue, setInputValue] = useState(initialState);

  const handleInputChange = event => {
    const { value } = event.target;

    setInputValue(value);
  };

  return [inputValue, handleInputChange];
};

export default useInputValue;