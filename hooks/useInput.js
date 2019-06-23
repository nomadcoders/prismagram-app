import React, { useState } from "react";

const useInput = intialValue => {
  const [value, setValue] = useState(intialValue);
  const onChange = text => {
    setValue(text);
  };
  return { value, onChange };
};

export default useInput;
