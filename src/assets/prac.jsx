import { useState } from "react";
const Prac = () => {
  const [currentValue, nextValue] = useState("hello");
  return (
    <div>
      <p>Hello {currentValue}</p>
      <button onClick={() => nextValue("My name is Bibek")}>click here</button>
    </div>
  );
};
export default Prac;
