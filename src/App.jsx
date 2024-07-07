import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ErrorMessage from "./Components/ErrorMessage";
import FoodItems from "./Components/FoodItems";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";
function App()
{
  const foodItems = ["apple", "papaya", "pomgranate", "grapes"];
  let [textStateVal, setTextStateVal] = useState("Food items entered by user");

  console.log(`current value is ${textStateVal}`);
  const handleOnChange = (event) =>
  {
    console.log(event.target.value);
    setTextStateVal(event.target.value);
  };

  return (
    <>
      <Container>

        <h1 className="food-heading">Healthy Foods</h1>

        <FoodInput handleOnChange={handleOnChange}>
        </FoodInput>
        {
          foodItems.length === 0 ? <ErrorMessage food={foodItems}></ErrorMessage> :
            <FoodItems food={foodItems}></FoodItems>
        }

        <p>{textStateVal}</p>

      </Container>
      {/* <Container>
        <p>Above are healthy foods that are good for your health.</p>

      </Container> */}
    </>
  );
}
export default App;
