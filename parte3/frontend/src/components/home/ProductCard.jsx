import { useNavigate } from "react-router-dom";

import React from "react";
let navigate;

function clickedCard(book){
    navigate('/book', { state:book });  
    window.scrollTo(0, 100);

}

function ProductCard({product}) {
    navigate=useNavigate();
    return (
        <div className="product-card" onClick={() => clickedCard(product)}>
            <img alt="book cover" className="product-img" src={product.img}></img>
            <h2 className="product-title">{product.name}</h2>
            <p>{product.author}</p>
            <h3>R$ {product.price.toFixed(2)}</h3>
        </div>
    )

}
export default ProductCard