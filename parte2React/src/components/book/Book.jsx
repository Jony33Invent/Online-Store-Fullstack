import React from "react";
import '.././styles/style.css';
import '.././styles/book.css';
import { useLocation } from "react-router-dom";
import {cartData} from '../BookData';
import SectionBox from '../home/./SectionBox';
import {books} from '../BookData';


let readingMore=false;
function addToCart(id){
	let cart = JSON.parse(localStorage.getItem('cart'));
	if(cart==null)
		cart=[];
	cart.push(id);
	localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload(false)
    window.scrollTo(0, 0);
}
function Book() {
let rand=Math.floor(Math.random()*(books.length-4));
let last=Math.min((rand+4),(books.length-1));
    const related={
        "title":"Livros Relacionados",
        "text":"",
        "products":books.slice(rand,last),
        "class":"section box related"
    };
const {state} = useLocation();
const book= state; // Read values passed on state
	return(
	<><div class="div-center">
		<div style={{display: 'flex'}}>
			<div class="book-image">
				<img id="hunger-games" src={book.img}></img>
			</div>

			<div class="book-infos">
				<h1>{book.name}</h1>
				<h3>{book.author}</h3>
				<img id="#review-stars"src={require("../../img/5stars.png")}></img>
				<p><b>{book.descriptionTitle}</b></p>
				<p>{book.descriptionText}</p>
			</div>
		</div>
		
		<div style={{display: 'flex'}}>
			<div class="book-buy">
				<h2>R$ {book.price.toFixed(2)}</h2>
				<div class="book-buy-button">
					<button id="comprar"onClick={()=>addToCart(book.id)}> <i class="icon-link fa-solid fa-cart-shopping" ></i> Comprar Agora</button>
				</div>
			</div>

			<div class="book-genres">
				<h3>Genre</h3>
				<div class="genre-bubble" >
					<p>{book.genre}</p>
				</div>
			</div>
		</div>
    </div>

        <SectionBox section={related}></SectionBox>
        </>
	)
}
export default Book