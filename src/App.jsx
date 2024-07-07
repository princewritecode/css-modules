import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ErrorMessage from "./Components/ErrorMessage";
import FoodItems from "./Components/FoodItems";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";
function App()
{
  let [foodItems, setFoodItems] = useState(["apple", "papaya", "pomgranate"]);
  const onKeyDown = (event) =>
  {
    console.log(event);
    if (event.key === "Enter")
    {
      let newFoodItem = event.target.value;
      console.log(newFoodItem, event.target.value);
      event.target.value = "";
      let newFoodItems = [...foodItems, newFoodItem];
      setFoodItems(newFoodItems);
    }
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <FoodInput onKeyDown={onKeyDown}>
        </FoodInput>
        {
          foodItems.length === 0 ? <ErrorMessage food={foodItems}></ErrorMessage> :
            <FoodItems food={foodItems}></FoodItems>
        }
      </Container>
      {/* <Container>
        <p>Above are healthy foods that are good for your health.</p>

      </Container> */}
    </>
  );
}
export default App;
