import React from "react";
import { pushcart } from "../App";

export default function Product({ children }) {
    let product = children;
    // console.log(product)
    return (
        <div className="product-container">
            <div className="product">
                <img src={product.image} alt={product.name} width="300px"/>
                <li key={product.id}> {product.name} </li>
                <button onClick={() => {
                    console.log("Added " + product.name + " to the cart!");
                    pushcart.push(product);                
                }}>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}