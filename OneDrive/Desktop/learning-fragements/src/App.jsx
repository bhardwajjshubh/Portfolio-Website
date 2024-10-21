import FoodItems from "./Components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
function App() {
  let foodItems = ["Sabzi", "Green vegetable", "Roti", "Salad", "Milk", "Ghee", "Oil"];
  // let foodItems = [];

  return (
    <>
    <Container>

      <h1 className="food-heading">Healthy Food </h1>
      <ErrorMessage items ={foodItems}></ErrorMessage>

      <FoodItems items={foodItems} ></FoodItems> 
      <FoodInput></FoodInput>
    </Container>


     </>
  );
}

export default App;
 