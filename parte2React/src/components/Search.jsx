import React from "react";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import { useLocation } from "react-router-dom";
import './styles/style.css';
import './styles/category.css';
import Data from './BookData';
import ProductCard from './home/./ProductCard';


const r = document.querySelector(':root');
function Search() {
const {state} = useLocation();
const search=state;                          
const itens=Data.filter(item => {
        if(search === ""){
            return item;
        }
        else if(item.name.toLowerCase().includes(search.toLowerCase())){return item}
    }).map((item) => ( <div><ProductCard product={item}/></div>));

 r.style.setProperty('--category-color', "#101010");
 r.style.setProperty('--category-section-color', "#101010DC");
    return (
            <>

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
                            <li class="journey-item">Search</li>
                            <li><i class="fa-solid fa-angle-right"></i></li>
                            <li class="journey-item">{search}</li>
                        </ul>
                        <div class="section category" style={{minWidth:'1000px',minHeight:'1000px'}} id="category-div">
                        {itens}
                        </div>
                    </div>
                </div>
            </>
    )
}

export default Search