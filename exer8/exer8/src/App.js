import './App.css';

import HomePage from "./pages/HomePage";

import Image01 from "./images/sample-product/product01.jpeg";
import Image02 from "./images/sample-product/product02.jpg";
import Image03 from "./images/sample-product/product03.jpg";
import Image04 from "./images/sample-product/product04.jpg";

const menus = [
  { name: "Appliances", url: "#", id: 1},
  { name: "Groceries", url: "#", id: 2},
  { name: "Gadgets", url: "#", id: 3},
  { name: "Clothing", url: "#", id: 4},
];

const products = [
  { name: "Asahy Power Juicer", image: Image01, id: 1 },
  { name: "Samsong Washing Machine", image: Image02, id: 2 },
  { name: "Hanabesh Electric Fan", image: Image03, id: 3 },
  { name: "ElGi Refrigerator", image: Image04, id: 4 },
];

let pushcart = [];
  

function App() {
  return (
    <HomePage menuData={ [menus, products] }/>
  );
}

export default App;
