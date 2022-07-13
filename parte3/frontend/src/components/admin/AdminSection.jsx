import React from "react";
import AdminProductCard from './AdminProductCard';

function AdminSection({section}) {
    
    let productCards = []
    for (let i = 0; i < section.products.length; i++) {
      productCards.push(<AdminProductCard product={section.products[i]}/>)
    }   
    return (
        <div class={section.class}>
            {productCards}
        </div>
    )
}
export default AdminSection