import React from "react";
import { useNavigate } from "react-router-dom";
import './styles/cart.css';

let navigate;

function clickedCard(book){
    navigate('/book', { state:book });  
    window.scrollTo(0, 100);

}


function removeItem(id){
    //console.log("Removeu:")
    let cart = JSON.parse(localStorage.getItem('cart'));
    if(cart==null)
        cart=[];
    cart.splice(id, 1); 
    localStorage.setItem('cart', JSON.stringify(cart));
    //console.log(id);
    //console.log(cart);
    window.location.reload(false)
}

function CartProductCard({product,index}) {
    navigate=useNavigate();
    return (
        <div className="cart-product">
        
            <div className="product-card" onClick={() => clickedCard(product)}>
                <img alt="book cover" className="product-img" src={product.img}></img>
                <h2 className="product-title">{product.name}</h2>
                <p>{product.author}</p>
                <h3>R$ {product.price.toFixed(2)}</h3>
            </div>
            <div className="cart-btn remove" onClick={()=>removeItem(index)}>Remove</div>
        </div>
    )

}
export default CartProductCard