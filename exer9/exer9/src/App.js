import './App.css';
import { useState } from 'react';

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

const pushcart = [];
  

function App() {
  const [cart, setCart] = useState(pushcart);
  
  function updateCart(newCart){
    let tempCart = [...cart]
    console.log(tempCart)
    let result = cart.filter(obj => obj.id === newCart.id)
    if (result.length === 0){
      console.log("No Match")
      tempCart = [...cart, newCart]
    } else if(tempCart.length == 0){
      console.log("Empty Match")
    } else {
      console.log("Match")
      let index = cart.findIndex(obj => obj.id === newCart.id)
      tempCart[index] = {...tempCart[index], qty: (tempCart[index].qty + 1) }
    }
    setCart((cart) => {
      return tempCart;
    })
  }
  return (
    <HomePage menuData={ [menus, products, updateCart, cart, setCart] }/>
  );
}

export default App;
