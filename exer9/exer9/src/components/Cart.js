import React from "react";

export default function Cart(props){
    function deleteProduct(){
        console.log(props.data[2][0])
        let tempCart = [...props.data[2]]
        let i = 0;
        while (i < props.data[2].length){
            if (props.data[2][i] == props.data[0]){
                tempCart.splice(i, 1)
                break
            }
            i = i + 1;
        }

        props.data[3](() => {
            return tempCart
        })
    }
    

    return (
        <div>
            <li className="cart-product" key={props.data[0].id}>{props.data[0].name}</li>
            <li className="cart-product-qty">{props.data[0].qty}</li>
            <button onClick={() => {deleteProduct()}}>X</button>
        </div>
    )
}