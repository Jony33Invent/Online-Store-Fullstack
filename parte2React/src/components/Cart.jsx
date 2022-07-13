import React,{useEffect,useState} from "react";
import './styles/cart.css';
import './styles/style.css';
import CartItem from "./CartItem";
import {Link} from "react-router-dom";

let cartItens;

let user = localStorage.getItem("user");

function onMouseEnter(event) {
	user = localStorage.getItem("user")
}

function Cart() {
	let cart = JSON.parse(localStorage.getItem('cart'));
    const [bookData,setBookData]=useState([]);
	if(cart==null)
		cart=[];
	cartItens=[];
    useEffect(()=>{
        fetch("/books").then(
            response=>response.json()
            ).then(
                data=>{
                    setBookData(data)
                }
            )
    },[])
	cart.forEach((id,i)=>{
		if(bookData[id]!=null)
		cartItens.push(<CartItem item={bookData[id]} index={i}/>)
	});
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
				<Link to={ user ? "/purchase" : "/home/account/login"}><div class="cart-btn">Finalizar Compra</div></Link>
				
			</div>
		)
	}
}

export default Cart