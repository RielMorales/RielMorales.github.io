import React from "react";

export default function Product(props) {
    let prod = props.data;
    let product = prod[0];

    function addToCart(e) {
        console.log("Added " + product.name + " to the cart!");
        props.data[1](product);
    } 

    return (
        <div className="prod-holder">
            <div className="product-container">
                <div className="product">
                    <img src={product.image} alt={product.name} />
                    <li key={product.id}> {product.name} </li>
                    <button onClick={addToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}