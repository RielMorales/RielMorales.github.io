import React from "react";

export default function Product({ children }) {
    let product = children[0];
    let cart = children[1];
    // console.log(product)
    return (
        <div className="product-container">
            <div className="product">
                <img src={product.image} alt={product.name} width="300px"/>
                <li key={product.id}> {product.name} </li>
                <button onClick={() => {
                    console.log("Added " + product.name + " to the cart!");
                }}>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}