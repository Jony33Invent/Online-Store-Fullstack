import { useNavigate } from "react-router-dom";

import React from "react";
let navigate;

function clickedCard(book){
    navigate('/book', { state:book });

}
function removeItem(id){
	let cart = JSON.parse(localStorage.getItem('cart'));
	if(cart==null)
		cart=[];
	cart.splice(id, 1); 
	localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload(false)
}
function CartItem({item,index}){
    navigate=useNavigate();
	console.log("id "+item.id);

	return(
	<div class="cart-item" onClick={() => clickedCard(item)}>
		<img src={item.img} alt="item"></img>
		<p class="cart-item-title">{item.name}</p>
		<p class="cart-item-price">R$ {item.price.toFixed(2)}</p>
		<a class="delete-cart-item" onClick={() => removeItem(index)}><i class="fa-solid fa-square-xmark"></i></a>
	</div>)
}

export default CartItem