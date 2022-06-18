import React from "react";
import './styles/cart.css';
import './styles/style.css';
import CartItem from "./CartItem";
import {cartData, books} from './BookData';

let cartItens,cart;

function Cart() {
	cartItens=[];
	cart=cartData;
	cart.itens.forEach(i=>{cartItens.push(<CartItem item={books[i]}/>)});
	if(cart.empty){
		return(
				<div class="cart-container">
					<div class="cart-logo"><i class="fa-solid fa-cart-arrow-down"></i>
					</div>
					<h3>Carrinho Vazio</h3>
					<p>Produtos selecionados aparecerão aqui.</p>
				</div>
				)
	}else{
	return(
			<div class="cart-container">
				<div class="cart-col">
					{cartItens}
					<div class="cart-btn">Finalizar Compra</div>
				</div>
			</div>
		)
	}
}

export default Cart