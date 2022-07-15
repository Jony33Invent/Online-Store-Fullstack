import React from "react";
import AdminProductCard from './AdminProductCard';

import { useNavigate } from "react-router-dom";
let navigate;
function createBook(){
    navigate('/book/create');  
    window.scrollTo(0, 100);

}
function AdminSection({section}) {
    navigate=useNavigate();
    
    let productCards = []
    for (let i = 0; i < section.products.length; i++) {
      productCards.push(<AdminProductCard key={i} product={section.products[i]}/>)
    }   
    return (
        <>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div className={section.class}  style={{backgroundColor:"#D0D0D0"}}>
            {(productCards.length>0)?productCards:<>Loading...</>}
        </div>
         <div className="cart-btn" onClick={()=>createBook()}>Create New Book</div>
         </div>
        </>
    )
}
export default AdminSection