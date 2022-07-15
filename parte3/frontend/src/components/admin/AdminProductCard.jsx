import { useNavigate } from "react-router-dom";

import React from "react";
let navigate;

function editBook(book){
    navigate('/book/edit', { state:book });  
    window.scrollTo(0, 100);

}

function AdminProductCard({product}) {
    navigate=useNavigate();
    return (
        <div>
            <div className="product-card" >
                <img alt="book cover" style={{width:"70px",height:"100px"}}className="product-img" src={product.img}></img>
                <h2 className="product-title">{product.name}</h2>
                <p>{product.author}</p>
                <p>R$ {product.price.toFixed(2)}</p>
                <h3>Quantity: {product.quantity}</h3>
                <div className="cart-btn remove" onClick={()=>editBook(product)}>Edit</div>
            </div>
        </div>
    )

}
export default AdminProductCard