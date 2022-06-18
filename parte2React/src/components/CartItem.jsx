import React from "react";

function CartItem({item}){
	return(
	<div class="cart-item">
		<img src={item.img}></img>
		<p class="cart-item-title">{item.name}</p>
		<p class="cart-item-price">R$ {item.price.toFixed(2)}</p>
	</div>)
}

export default CartItem