import React from "react";

export default function Product({ children }) {
    let product = children;
    // console.log(product)
    return (
        <div>
            <img src={product.image} alt={product.name} width="300px"/>
            <li key={product.id}> {product.name} </li>
        </div>
    )
}