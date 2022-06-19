import React from "react";
import './styles/cart.css';
import './styles/style.css';
import CartItem from "./CartItem";
import {cartData, books} from './BookData';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

let cartItens,cart;

let user = localStorage.getItem("user");

function onMouseEnter(event) {
	user = localStorage.getItem("user")
	console.log(user);
}

function Cart() {
	

	console.log(user);

	cartItens=[];
	cart=cartData;
	cart.itens.forEach(i=>{cartItens.push(<CartItem item={books[i]}/>)});
	if(cart.empty){
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
					<Link to={ user = localStorage.getItem("user") ? "/" : "/home/login"}><div class="cart-btn">Finalizar Compra</div></Link>
				</div>
			</div>
		)
	}
}

export default Cart