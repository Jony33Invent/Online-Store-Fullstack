import React,{useEffect,useState} from "react";
import './styles/style.css';
import './styles/admin.css';
import './styles/category.css';
import './styles/cart.css';
import './styles/book.css';
import CartProductCard from './CartProductCard';
import {Link} from "react-router-dom";

function CartPage() {

let user = localStorage.getItem("user");
    const [bookData,setBookData]=useState([]);
    let cart = JSON.parse(localStorage.getItem('cart'));
    if(cart==null)
        cart=[];
    let cartItens=[];
    useEffect(()=>{
        fetchItems();
    },[])
    const fetchItems = async () => {
        const data = await fetch('http://localhost:4000/books');
        const items = await data.json();
        setBookData(items);
    };
    
    bookData.forEach((book,i)=>{
        cart.forEach((id,i)=>{
            if(book._id===id)
                cartItens.push(<CartProductCard key={i} product={book} index={i}/>)
        });
    });
    return (
        <div>
            <div className="title-div">
                <h1 className="category-title" style={{ 
      backgroundImage: `url("https://wallpaperaccess.com/full/2338264.jpg")` ,
        backgroundSize: 'cover',
        backgroundPosition:'0px 58%'
    }}>
                    Cart
                </h1>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="cart-base">
                <div className={(cartItens.length>0)?"section box cart-section":"section box cart-empty-section"}>
                    {(cartItens.length>0)?cartItens:<>
                            <div style={{margin:'50px'}}>
                            <i  style={{fontSize:'100px',color:'#FFFFFF88'}}className="fa-solid fa-cart-arrow-down"></i>
                            </div></>}
                </div>
                {(cartItens.length>0)?<Link  to={ user ? "/purchase" : "/home/account/login"} className="cart-btn compra">Purchase</Link>:<></>}
            </div>
        </div>
    )
}

export default CartPage