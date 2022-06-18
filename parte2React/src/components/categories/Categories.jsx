import React from "react";
import '.././styles/style.css';
import '.././styles/category.css';
import {books} from '../BookData';
import ProductCard from '../home/ProductCard';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

function BkColor(category) {
    switch (category) {
        case 'Art':
            return "#F6BB42";
        case 'Phylosophy':
            return "#8CC152";    
        case 'Adventure':
            return "#E9573F";
        case 'Horror':
            return "black";
        case 'Romance':
            return "#F7729E";
        case 'Sci-Fi':
            return "#00B1E1";
        case 'Fantasy':
            return "#37BC9B";
        case 'Drama':
            return "#B36DED";
        default:
            return "black";
    } 
}

function Categories({category}) {

    let productCards = []
    let n=books.length;
    for (let i = 0; i < 20; i++) {
      productCards.push(<div><ProductCard product={books[i%n]}/></div>)
    }   
    return (
            <>
            <div class="title-div">
                <h1 class="category-title">
                    {category}
                </h1>
            </div>

                <div class="category-main">
                    <div class="categories-column">
                        <div class="column-title" > More Genres</div>
                        <div class="btn-category" > <a href="#">Art</a></div>
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
                        <div class="section category" id="category-div" style={{backgroundColor: BkColor(category)}}>
                            {productCards}
                        </div>
                    </div>
                </div>
            </>
    )
}

export default Categories