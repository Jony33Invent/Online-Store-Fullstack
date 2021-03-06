import React, { useEffect, useState } from "react";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import { useLocation } from "react-router-dom";
import './styles/style.css';
import './styles/category.css';
import Data from './BookData';
import ProductCard from './home/./ProductCard';
import {books} from './BookData';


const r = document.querySelector(':root');
function Search() {
    const {state} = useLocation();
    const search=state;     
    const bookList=Data.filter(item => {
        if(search === ""){
            return item;
        }
        else if(item.name.toLowerCase().includes(search.toLowerCase())){return item}
    });
     const [itens, setItens] = useState(bookList.map((item) => ( <div><ProductCard product={item}/></div>)));
    r.style.setProperty('--category-color', "#101010");
    r.style.setProperty('--category-section-color', "#101010DC");



    const [checked, setChecked] = useState({ az: false, za: false, lowprice: false, bigprice: false });

    let location = useLocation();

    useEffect(() => {
        setItens(bookList.map((item) => ( <div><ProductCard product={item}/></div>)))
        setChecked({az: false, za: false, lowprice: false, bigprice: false})
     },[location]);

    const azFilter = (event) => {
        bookList.sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            } else {
                return 1;
            }
            return 0;
        });

        setChecked(() => {
            return {
                az: true,
                za: false,
                lowprice: false,
                bigprice: false
            };
            });

        setItens(bookList.map((item) => ( <div><ProductCard product={item}/></div>)))

    }

    const zaFilter = (event) => {
        bookList.sort(function (a, b) {
            if (a.name < b.name) {
                return 1;
            } else {
                return -1;
            }
            return 0;
        });

        setChecked(() => {
            return {
                az: false,
                za: true,
                lowprice: false,
                bigprice: false
            };
            });

        setItens(bookList.map((item) => ( <div><ProductCard product={item}/></div>)))
    }

    const lowPriceFilter = (event) => {
        bookList.sort(function (a, b) {
            if (a.price > b.price) {
                return 1;
            } else {
                return -1;
            }
            return 0;
        });

        setChecked(() => {
            return {
                az: false,
                za: false,
                lowprice: true,
                bigprice: false
            };
            });

        setItens(bookList.map((item) => ( <div><ProductCard product={item}/></div>)))
    }

    const bigPriceFilter = (event) => {
        bookList.sort(function (a, b) {
            if (a.price < b.price) {
                return 1;
            } else {
                return -1;
            }
            return 0;
        });

        setChecked(() => {
            return {
                az: false,
                za: false,
                lowprice: false,
                bigprice: true
            };
            });

        setItens(bookList.map((item) => ( <div><ProductCard product={item}/></div>)))
    }
    return (
            <>

                <div class="category-main">
                    <form class="categories-column">
                        <div class="column-title" > Filter by</div>
                        
                        <label class="btn-category" style={{backgroundColor:(checked.az)?'black':'',
                                                            color:(checked.az)?'white':''}} onClick={azFilter}>
                            <input type="radio" name="filter" checked={checked.az}></input> 
                            A to Z
                        </label>
                        <label class="btn-category"
                        style={{backgroundColor:(checked.za)?'black':'',
                                                            color:(checked.za)?'white':''}}  onClick={zaFilter}>
                            <input type="radio" name="filter" checked={checked.za}></input> 
                            Z to A
                        </label>
                        <label class="btn-category" style={{backgroundColor:(checked.lowprice)?'black':'',
                                                            color:(checked.lowprice)?'white':''}} onClick={lowPriceFilter}>
                            <input type="radio" name="filter" checked={checked.lowprice}></input> 
                            Lowest Price
                        </label>
                        <label class="btn-category" style={{backgroundColor:(checked.bigprice)?'black':'',
                                                            color:(checked.bigprice)?'white':''}} onClick={bigPriceFilter}>
                            <input type="radio" name="filter"checked={checked.bigprice}></input> 
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