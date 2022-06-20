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
                    <form class="categories-column">
                        <div class="column-title" > Filter by</div>
                        
                        <label class="btn-category">
                            <input type="radio" name="filter"></input> 
                            A to Z
                        </label>
                        <label class="btn-category">
                            <input type="radio" name="filter"></input> 
                            Z to A
                        </label>
                        <label class="btn-category">
                            <input type="radio" name="filter"></input> 
                            Lowest Price
                        </label>
                        <label class="btn-category">
                            <input type="radio" name="filter"></input> 
                            Biggest Price
                        </label>
                    </form>
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