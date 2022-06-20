import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import '.././styles/style.css';
import '.././styles/category.css';
import {books} from '../BookData';
import ProductCard from '../home/ProductCard';


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

    const [checked, setChecked] = useState({ az: false, za: false/*, lowprice: false, bigprice: false */});

    let location = useLocation();
    const bookList = books.filter(item => {
        if(category === ""){
            return item;
        }
        else if(item.genre.toLowerCase().includes(category.toLowerCase())){return item}
    })
    const [itens, setItens] = useState(bookList.map((item) => ( <div><ProductCard product={item}/></div>)))

    useEffect(() => {
        setItens(bookList.map((item) => ( <div><ProductCard product={item}/></div>)))
     },[location]);

    const azFilter = (event) => {
        bookList.sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (b.name > a.name) {
                return 1;
            }
            return 0;
        });

        setChecked(() => {
            return {
                az: true,
                za: false,
            };
            });

        setItens(bookList.map((item) => ( <div><ProductCard product={item}/></div>)))
    }

    const zaFilter = (event) => {
        bookList.sort(function (a, b) {
            if (a.name < b.name) {
                return 1;
            }
            if (b.name > a.name) {
                return -1;
            }
            return 0;
        });

        setChecked(() => {
            return {
                az: false,
                za: true,
            };
            });

        setItens(bookList.map((item) => ( <div><ProductCard product={item}/></div>)))
    }

    return (
            <>
            <div class="title-div">
                <h1 class="category-title"  key={category}>
                    {category}
                </h1>
            </div>

                <div class="category-main">
                    <form class="categories-column">
                        <div class="column-title" > Filter by</div>
                        
                        <label class="btn-category" onClick={azFilter}>
                            <input type="radio" name="filter" checked={checked.az}></input> 
                            A to Z
                        </label>
                        <label class="btn-category" onClick={zaFilter}>
                            <input type="radio" name="filter" checked={checked.za}></input> 
                            Z to A
                        </label>
                        {/*
                        <label class="btn-category">
                            <input type="radio" name="filter"></input> 
                            Lowest Price
                        </label>
                        <label class="btn-category">
                            <input type="radio" name="filter"></input> 
                            Biggest Price
                        </label>
                        */}
                    </form>
                    <div>
                        <ul class="user-journey">
                            <Link to="/"><li class="journey-item">Home</li></Link>
                            <li><i class="fa-solid fa-angle-right"></i></li>
                            <li class="journey-item">Genres</li>
                            <li><i class="fa-solid fa-angle-right"></i></li>
                            <li class="journey-item">{category}</li>
                        </ul>
                        <div class="section category" id="category-div">
                            {itens}
                        </div>
                    </div>
                </div>
            </>
    )
}

export default Categories