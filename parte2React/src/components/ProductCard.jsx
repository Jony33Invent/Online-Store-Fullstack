import React from "react";
import './styles/style.css';

function ProductCard({product}) {
    return (
        <div class="product-card">
            <img class="product-img" src={product.img}></img>
            <h2 class="product-title">{product.name}</h2>
            <p>{product.author}</p>
            <h3>R$ {product.price.toFixed(2)}</h3>
        </div>
    )
}
export default ProductCard