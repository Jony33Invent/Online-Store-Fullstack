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

	return(
	<div className="cart-item" onClick={() => clickedCard(item)}>
		<img src={item.img} alt="item"></img>
		<p className="cart-item-title">{item.name}</p>
		<p className="cart-item-price">R$ {item.price.toFixed(2)}</p>
		<a className="delete-cart-item" href="#self" onClick={() => removeItem(index)}><i className="fa-solid fa-square-xmark"></i></a>
	</div>)
}

export default CartItem