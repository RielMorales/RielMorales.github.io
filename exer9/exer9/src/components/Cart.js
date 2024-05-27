import React from "react";

export default function Cart(props){
    // console.log(props.data)
    return (
        <div>
            <li key={props.data.id}>{props.data.name} {props.data.qty}</li>
        </div>
    )
}