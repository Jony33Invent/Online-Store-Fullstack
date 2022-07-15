import React,{useEffect,useState} from "react";

import '.././styles/style.css';
import '.././styles/dropdown.css';
import SectionBox from './SectionBox';


function Home() {
    const [bookData,setBookData]=useState([]);
    useEffect(()=>{
        fetch("/books").then(
            response=>response.json()
            ).then(
                data=>{
                    setBookData(data)
                }
            )
    },[])

    const populares={
        "title":"Mais Populares",
        "text":"Clique para ver mais...",
        "products":bookData.slice(0,4),
        "class":"section box"
    };

    const bookList = bookData.filter(item => item.genre.toLowerCase().includes("horror"));

    const terror={
        "title":"Clássicos do Terror",
        "text":"Clique para ver mais...",
        "products":bookList,
        "class":"section box horror"
    };


    return (
        <div>
            <img src={"https://i.imgur.com/3UgHN6j.png"} className="preview-img" alt="homepage figure"></img>
            {(populares.products.length>0)?<SectionBox section={populares}></SectionBox>:<></>}
            {(terror.products.length>0)?<SectionBox  section={terror}></SectionBox>:<></>}
            
        </div>
    )
}

export default Home