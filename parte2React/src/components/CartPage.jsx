import React,{useEffect,useState} from "react";
import './styles/style.css';
import './styles/admin.css';
import './styles/category.css';
import './styles/cart.css';
import './styles/book.css';
import CartProductCard from './CartProductCard';

import SectionBox from './home/SectionBox';

function CartPage() {

    const [bookData,setBookData]=useState([]);
    let cart = JSON.parse(localStorage.getItem('cart'));
    if(cart==null)
        cart=[];
    let cartItens=[];
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
        if(bookData[id]!=null){
            cartItens.push(<CartProductCard product={bookData[id]} index={i}/>)
        }
    });

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
                {(cartItens.length>0)?<div class="cart-btn compra">Finalizar Compra</div>:<></>}
            </div>
        </div>
    )
}

export default CartPage