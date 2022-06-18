import React from "react";
import '.././styles/style.css';
import '.././styles/book.css';
import { useLocation } from "react-router-dom";
import {cartData} from '../BookData';


let readingMore=false;
function addToCart(id){
	cartData.empty=false;
	cartData.itens.push(id);
	
}
function Book() {
const {state} = useLocation();
const book= state; // Read values passed on state
	return(
	<div class="div-center">
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
				<h3>Genres</h3>
				<div class="genre-bubble" >
					<p>Young Adult</p>
				</div>
				<div class="genre-bubble" >
					<p>Fiction</p>
				</div>
				<div class="genre-bubble" >
					<p>Fantasy</p>
				</div>
				<div class="genre-bubble" >
					<p>Science Fiction</p>
				</div>
				<div class="genre-bubble" >
					<p>Romance</p>
				</div>
				<div class="genre-bubble" >
					<p>Adventure</p>
				</div>
			</div>
		</div>
    </div>
	)
}
export default Book