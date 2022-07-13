import React from "react";
import './styles/cart.css';
import './styles/style.css';
/*
import CartItem from "./CartItem";
import {books} from './BookData';
import {Link} from "react-router-dom";

let cartItens;

let user = localStorage.getItem("user");

function onMouseEnter(event) {
	user = localStorage.getItem("user")
}

function Cart() {
	let cart = JSON.parse(localStorage.getItem('cart'));
	if(cart==null)
		cart=[];
	cartItens=[];
	cart.forEach((id,i)=>{cartItens.push(<CartItem item={books[id]} index={i}/>)});
	if(!cart.length){
		return(
				<div class="cart-container" onMouseOver={onMouseEnter} >
					<div class="cart-logo"><i class="fa-solid fa-cart-arrow-down"></i>
					</div>
					<h3>Carrinho Vazio</h3>
					<p>Produtos selecionados aparecerão aqui.</p>
				</div>
				)
	}else{
	return(
			<div class="cart-container" onMouseOver={onMouseEnter}>
				<div class="cart-col">
					{cartItens}
				</div>
				<Link to={ user ? "/" : "/home/account/login"}><div class="cart-btn">Finalizar Compra</div></Link>
				
			</div>
		)
	}
}*/

function Cart() {
	return(
		<div class="cart-container">
			<h1>carrinho</h1>
		</div>
	)
}

export default Cart