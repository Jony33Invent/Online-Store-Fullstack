import React from "react";
import AdminProductCard from './AdminProductCard';

import { useLocation,useNavigate } from "react-router-dom";
let navigate;
function createBook(){
    navigate('/book/create');  
    window.scrollTo(0, 100);

}
function AdminSection({section}) {
    navigate=useNavigate();
    
    let productCards = []
    for (let i = 0; i < section.products.length; i++) {
      productCards.push(<AdminProductCard product={section.products[i]}/>)
    }   
    return (
        <>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div class={section.class}>
            {productCards}
        </div>
         <div class="cart-btn" onClick={()=>createBook()}>Create New Book</div>
         </div>
        </>
    )
}
export default AdminSection