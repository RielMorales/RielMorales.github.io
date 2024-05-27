import React from "react";

export default function Cart(props){
    // console.log(props.data)
    return (
        <div>
            <li className="cart-product" key={props.data.id}>{props.data.name}</li>
            <li className="cart-product-qty">{props.data.qty}</li>
            <button>X</button>
        </div>
    )
}