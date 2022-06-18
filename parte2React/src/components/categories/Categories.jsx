import React from "react";
import '.././styles/style.css';
import '.././styles/category.css';
import {books} from '../BookData';
import ProductCard from '../home/ProductCard';

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
                            <li class="journey-item">Home</li>
                            <li><i class="fa-solid fa-angle-right"></i></li>
                            <li class="journey-item">Genres</li>
                            <li><i class="fa-solid fa-angle-right"></i></li>
                            <li class="journey-item">Fantasy</li>
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