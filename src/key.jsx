import { useState } from "react";
function Key() {
  const [foods, setFoods] = useState(["Mango", "Banana", "Apple"]);
  const onKey = (e) => {
    if (e.key === "Enter") {
      const foodItems = e.target.value.trim();
      if (foodItems !== "") {
        setFoods([...foods, foodItems]);
        e.target.value = "";
      }
    }
  };

  return;
}
export default Key;
