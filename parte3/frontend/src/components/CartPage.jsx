import React,{useEffect,useState} from "react";
import './styles/style.css';
import './styles/admin.css';
import './styles/category.css';
import './styles/cart.css';
import './styles/book.css';
import CartProductCard from './CartProductCard';
import {Link} from "react-router-dom";

import SectionBox from './home/SectionBox';

function CartPage() {

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
            if(book._id==id)
                cartItens.push(<CartProductCard product={book} index={i}/>)
        });
    });
    console.log(bookData);
    return (
        <div>
            <div class="title-div">
                <h1 class="category-title" style={{ 
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
            <div class="cart-base">
                <div class={(cartItens.length>0)?"section box cart-section":"section box cart-empty-section"}>
                    {(cartItens.length>0)?cartItens:<>
                            <div style={{margin:'50px'}}>
                            <i  style={{fontSize:'100px',color:'#FFFFFF88'}}class="fa-solid fa-cart-arrow-down"></i>
                            </div></>}
                </div>
                {(cartItens.length>0)?<Link to="/purchase" class="cart-btn compra">Purchase</Link>:<></>}
            </div>
        </div>
    )
}

export default CartPage