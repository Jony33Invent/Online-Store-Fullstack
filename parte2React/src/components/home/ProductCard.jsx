import { useNavigate } from "react-router-dom";

import React from "react";
let navigate;

function clickedCard(book){
    navigate('/book', { state:book });

}

function ProductCard({product}) {
    navigate=useNavigate();
    return (
        <div class="product-card" onClick={() => clickedCard(product)}>
            <img class="product-img" src={product.img}></img>
            <h2 class="product-title">{product.name}</h2>
            <p>{product.author}</p>
            <h3>R$ {product.price.toFixed(2)}</h3>
        </div>
    )

}
export default ProductCard