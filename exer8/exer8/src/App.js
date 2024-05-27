import './App.css';

import HomePage from "./pages/HomePage";

const menus = [
  { name: "Appliances", url: "#", id: 1},
  { name: "Groceries", url: "#", id: 2},
  { name: "Gadgets", url: "#", id: 3},
  { name: "Clothing", url: "#", id: 4},
];

let pushcart = [];
  

function App() {
  return (
    <HomePage menuData={ menus }/>
  );
}

export default App;
