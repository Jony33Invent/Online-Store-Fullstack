import React from "react";
import '.././styles/style.css';
import '.././styles/category.css';
import {books} from '../BookData';
import ProductCard from '../home/ProductCard';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

const colors=["#0b5351","#00a9a5","#101010","#121025","#90c2e7","#3f32a6","#262051","#4e8098","#a29fdb"];

function BkColor(id) {
    if(id<0 || id>=colors.length)
        return 'black';
    return colors[id];
}

const r = document.querySelector(':root');
function Categories({category,index}) {
const bkColor=BkColor(index);
 r.style.setProperty('--category-color', bkColor);
 r.style.setProperty('--category-section-color', bkColor+"DC");
    let productCards = []
    let n=books.length;
    for (let i = 0; i < 20; i++) {
      productCards.push(<div><ProductCard product={books[i%n]}/></div>)
    }   
    return (
            <>
            <div class="title-div">
                <h1 class="category-title"  key={category}>
                    {category}
                </h1>
            </div>

                <div class="category-main">
                    <div class="categories-column">
                        <div class="column-title" > More Genres</div>
                        <div class="btn-category" > <a href="#">Phylosophy</a></div>
                        <div class="btn-category" > <a href="#">Adventure</a></div>
                        <div class="btn-category" > <a href="#">Horror</a></div>
                        <div class="btn-category" > <a href="#">Romance</a></div>
                        <div class="btn-category" > <a href="#">Sci-Fi</a></div>
                        <div class="btn-category" > <a href="#">Fantasy</a></div>
                        <div class="btn-category" > <a href="#">Drama</a></div>
                    </div>
                    <div>
                        <ul class="user-journey">
                            <Link to="/"><li class="journey-item">Home</li></Link>
                            <li><i class="fa-solid fa-angle-right"></i></li>
                            <li class="journey-item">Genres</li>
                            <li><i class="fa-solid fa-angle-right"></i></li>
                            <li class="journey-item">{category}</li>
                        </ul>
                        <div class="section category" id="category-div">
                            {productCards}
                        </div>
                    </div>
                </div>
            </>
    )
}

export default Categories