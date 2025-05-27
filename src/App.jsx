import { useState } from "react";
import "./Prac.css";

const Prac = () => {
  const [foods, setFoods] = useState(["Mango", "Banana", "Apple"]);

  const onKey = (e) => {
    if (e.key === "Enter") {
      const foodItem = e.target.value.trim();
      if (foodItem !== "") {
        setFoods([...foods, foodItem]);
        e.target.value = "";
      }
    }
  };

  return (
    <div className="container">
      <h1>List of Foods</h1>
      <input type="text" onKeyDown={onKey} placeholder="Enter the food name" />
      <ul>
        {foods.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
    </div>
  );
};

export default Prac;
