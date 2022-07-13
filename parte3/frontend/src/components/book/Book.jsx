import React,{useEffect,useState}  from "react";
import '.././styles/style.css';
import '.././styles/book.css';
import { useLocation } from "react-router-dom";
import SectionBox from '../home/./SectionBox';

//Adiciona cada livro para o carrinho com o localStorage
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
	
	//Pegar dados dos livros ------------------------------------------
    const [bookData,setBookData]=useState([]);
    useEffect(()=>{
		fetchItems();
    },[])

	const fetchItems = async () => {
        const data = await fetch('http://localhost:4000/books');
        const items = await data.json();
        setBookData(items);
    };
	//--------------------------------------------------------------------

	//valores para os livros relacionados (só vai dar pra implementar realmente com o servidor)
	let rand=Math.floor(Math.random()*(bookData.length-4));
	let last=Math.min((rand+4),(bookData.length-1));
	const related={
		"title":"Livros Relacionados",
		"text":"",
		"products":bookData.slice(rand,last),
		"class":"section box related"
	};
	
	const {state} = useLocation();
	const book= state;
	//basicamente o html da página com a função de adicionar o item no carrinho
	return(
		<>
		<div class="div-center">
			<div style={{display: 'flex'}}>
				<div class="book-image">
					<img id="hunger-games" src={book.img}></img>
				</div>

				<div class="book-infos">
					<h1>{book.name}</h1>
					<h3>{book.author}</h3>
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