import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ErrorMessage from "./Components/ErrorMessage";
import FoodItems from "./Components/FoodItems";
function App()
{

  const foodItems = ["apple", "papaya", "pomgranate", "grapes"];
  return (
    <>
      <h1 className="food-heading">Healthy Foods</h1>
      {
        foodItems.length === 0 ? <ErrorMessage food={foodItems}></ErrorMessage> :
          <FoodItems food={foodItems}></FoodItems>
      }
    </>
  );
}
export default App;
