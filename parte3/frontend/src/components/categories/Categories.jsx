import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import '.././styles/style.css';
import '.././styles/category.css';
import ProductCard from '../home/ProductCard';

//Cores do fundo de cada categoria
const colors=["#0b5351","#00a9a5","#101010","#121025","#90c2e7","#3f32a6","#262051","#4e8098","#a29fdb"];

function BkColor(id) {
    if(id<0 || id>=colors.length)
        return 'black';
    return colors[id];
}

const r = document.querySelector(':root');
function Categories({category,index}) {
    let location = useLocation();
    //pegar livros no servidor -------------------------------------------
    const [bookData,setBookData]=useState([]);
    useEffect(()=>{
        fetchItems();
    },[])
    const fetchItems = async () => {
        const data = await fetch('/books');
        const items = await data.json();
        //console.log(data)
        //console.log(items)
        setBookData(items);
    };
    //----------------------------------------------------------------------

    const bkColor=BkColor(index);
    r.style.setProperty('--category-color', bkColor);
    r.style.setProperty('--category-section-color', bkColor+"DC");

    const [checked, setChecked] = useState({ az: false, za: false, lowprice: false, bigprice: false });

    //Carrega os livros da categoria
    const bookList = bookData.filter(item => {
        if(item.quantity>0){
            if(category === ""){
                return item;
            }
            else if(item.genre.toLowerCase().includes(category.toLowerCase())){return item}

        }
           return null;
    })

    const [itens, setItens] = useState([])
    const firstItems = bookList.map((item) => ( <div key={item._id}><ProductCard  product={item}/></div>))
    //Quando o usuário clica em outra categoria os settings resetam e os novos produtos são puxados
    useEffect(() => {
        setItens(bookList.map((item) => ( <div key={item._id}><ProductCard  product={item}/></div>)))
        setChecked({az: false, za: false, lowprice: false, bigprice: false})
     },[location]);

    //Filtros por nome e preço (ta meio repetido, mas foi porque não deu tempo de deixar moduladinho e bonito)
    const azFilter = (event) => {
        bookList.sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            } else {
                return 1;
            }
        });

        setChecked(() => {
            return {
                az: true,
                za: false,
                lowprice: false,
                bigprice: false
            };
            });

        setItens(bookList.map((item) => ( <div key={item._id}><ProductCard  product={item}/></div>)))

    }

    const zaFilter = (event) => {
        bookList.sort(function (a, b) {
            if (a.name < b.name) {
                return 1;
            } else {
                return -1;
            }
        });

        setChecked(() => {
            return {
                az: false,
                za: true,
                lowprice: false,
                bigprice: false
            };
            });

        setItens(bookList.map((item) => ( <div key={item._id}><ProductCard  product={item}/></div>)))
    }

    const lowPriceFilter = (event) => {
        bookList.sort(function (a, b) {
            if (a.price > b.price) {
                return 1;
            } else {
                return -1;
            }
        });

        setChecked(() => {
            return {
                az: false,
                za: false,
                lowprice: true,
                bigprice: false
            };
            });

        setItens(bookList.map((item) => ( <div key={item._id}><ProductCard  product={item}/></div>)))
    }

    const bigPriceFilter = (event) => {
        bookList.sort(function (a, b) {
            if (a.price < b.price) {
                return 1;
            } else {
                return -1;
            }
        });

        setChecked(() => {
            return {
                az: false,
                za: false,
                lowprice: false,
                bigprice: true
            };
            });

        setItens(bookList.map((item) => ( <div key={item._id}><ProductCard  product={item}/></div>)))
    }
    return (
            <>
            <div className="title-div">
                <h1 className="category-title"  key={category}>
                    {category}
                </h1>
            </div>

                <div className="category-main">
                    <form className="categories-column">
                        <div className="column-title" > Filter by</div>
                        
                        <label className="btn-category" style={{backgroundColor:(checked.az)?'black':'',
                                                            color:(checked.az)?'white':''}} onClick={azFilter}>
                            <input type="radio" name="filter" checked={checked.az} readOnly></input> 
                            A to Z
                        </label>
                        <label className="btn-category"
                        style={{backgroundColor:(checked.za)?'black':'',
                                                            color:(checked.za)?'white':''}}  onClick={zaFilter}>
                            <input type="radio" name="filter" checked={checked.za} readOnly></input> 
                            Z to A
                        </label>
                        <label className="btn-category" style={{backgroundColor:(checked.lowprice)?'black':'',
                                                            color:(checked.lowprice)?'white':''}} onClick={lowPriceFilter}>
                            <input type="radio" name="filter" checked={checked.lowprice} readOnly></input> 
                            Lowest Price
                        </label>
                        <label className="btn-category" style={{backgroundColor:(checked.bigprice)?'black':'',
                                                            color:(checked.bigprice)?'white':''}} onClick={bigPriceFilter}>
                            <input type="radio" name="filter"checked={checked.bigprice}readOnly></input> 
                            Biggest Price
                        </label>
                    </form>
                    <div>
                        <ul className="user-journey">
                            <Link to="/"><li className="journey-item">Home</li></Link>
                            <li><i className="fa-solid fa-angle-right"></i></li>
                            <li className="journey-item">Genres</li>
                            <li><i className="fa-solid fa-angle-right"></i></li>
                            <li className="journey-item">{category}</li>
                        </ul>
                        <div className="section category" id="category-div">
                            {itens.length>0?itens:firstItems}
                        </div>
                    </div>
                </div>
            </>
    )
}

export default Categories