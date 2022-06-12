import React, { useRef, useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
  const [input, setInput] = useState("testing input");

  const textRef = useRef();

  const handleClick = (e) => {
    textRef.current.textContent = input;
    console.log(
      "this is our ref element text content",
      textRef.current.textContent
    );
    console.log("this is our input", input);
  };

  return (
    <form>
      <Input input={input} setInput={setInput} />
      <Button buttonText='first button' type='button' handleClick={handleClick} />
      <Button buttonText='second button' type='submit' handleClick={handleClick} />
      <div ref={textRef} className="text"></div>
    </form>
  );
};

export default Form;
