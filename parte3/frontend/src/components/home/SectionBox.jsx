import React from "react";
import ProductCard from './ProductCard';

function SectionBox({section}) {
    
    let productCards = []
    for (let i = 0; i < section.products.length; i++) {
      productCards.push(<ProductCard key={section.products[i]._id} product={section.products[i]}/>)
    }   
    return (
        <div className={section.class} >
            <div>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
            </div>
            {productCards}
        </div>
    )
}
export default SectionBox