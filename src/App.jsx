import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ErrorMessage from "./Components/ErrorMessage";
import FoodItems from "./Components/FoodItems";
import Container from "./Components/Container";
function App()
{

  const foodItems = ["apple", "papaya", "pomgranate", "grapes"];
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
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
