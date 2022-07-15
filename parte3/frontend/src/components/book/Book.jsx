import React,{useEffect,useState}  from "react";
import '.././styles/style.css';
import '.././styles/book.css';
import { useLocation } from "react-router-dom";
import SectionBox from '../home/./SectionBox';

//Adiciona cada livro para o carrinho com o localStorage
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
	const {state} = useLocation();
	const book= state;

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

	const relatedBooks = bookData.filter(item => {
        if((item.author == book.name || item.genre == book.genre) && (item.name != book.name)){return item}
        	return null;
    })

	function compare( a ) {
		if ( a.author == book.author ){
		  return -1;
		}
		if ( a.genre == book.genre ){
		  return 1;
		}
		return 0;
	}
	  
	relatedBooks.sort( compare );


	const related={
		"title":"Livros Relacionados",
		"text":"",
		"products":relatedBooks,
		"class":"section box related"
	};
	
	//basicamente o html da página com a função de adicionar o item no carrinho
	return(
		<>
		<div className="div-center">
			<div style={{display: 'flex'}}>
				<div className="book-image">
					<img alt="book cover" id="hunger-games" src={book.img}></img>
				</div>

				<div className="book-infos">
					<h1>{book.name}</h1>
					<h3>{book.author}</h3>
					<p><b>{book.descriptionTitle}</b></p>
					<p>{book.descriptionText}</p>
				</div>
			</div>
			
			<div style={{display: 'flex'}}>
				<div className="book-buy">
					<h2>R$ {book.price.toFixed(2)}</h2>
					<div className="book-buy-button">
						<button id="comprar"onClick={()=>addToCart(book._id)}> <i className="icon-link fa-solid fa-cart-shopping" ></i> Comprar Agora</button>
					</div>
				</div>

				<div className="book-genres">
					<h3>Genre</h3>
					<div className="genre-bubble" >
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