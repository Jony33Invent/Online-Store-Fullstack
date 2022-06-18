import React from "react";
import './styles/style.css';
import './styles/dropdown.css';
import SectionBox from './SectionBox';

const books=[
    {
        "name":"The Hunger Games", 
        "author":"Suzanne Collins",
        "price":43.65,
        "img":require("../img/capa1.jpg")
    },
    {
        "name":"The Fault in Our Stars",
        "author":"John Green",
        "price":10.00,
        "img":require("../img/capa2.jpg")
    },
    {
        "name":"The Hobbit",
        "author":"J. R. R. Tolkien",
        "price":41.99,
        "img":require("../img/capa3.jpg")
    },
    {
        "name":"Harry Potter and the Sorcerer's Stone",
        "author":"J.K. Rowling",
        "price":53.86,
        "img":require("../img/capa4.jpg")
    },
    {
        "name":"Jaws",
        "author":"Peter Benchley",
        "price":64.90,
        "img":require("../img/tuba.png")
    }];


    const populares={
        "title":"Mais Populares",
        "text":"Clique para ver mais...",
        "products":books.slice(1,5)
    };

    const terror={
        "title":"Clássicos do Terror",
        "text":"Clique para ver mais...",
        "products":books.slice(0,4)
    };
function Home() {

    return (
        <div>
            <img src={require("../img/img1.png")} alt="homepage figure" height='500px'></img>
            <SectionBox section={populares}></SectionBox>
            <SectionBox section={terror}></SectionBox>
        </div>
    )
}

export default Home