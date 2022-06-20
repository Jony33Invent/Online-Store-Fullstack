import React from "react";
import '.././styles/style.css';
import '.././styles/dropdown.css';
import SectionBox from './SectionBox';
import {books} from '../BookData';

    const populares={
        "title":"Mais Populares",
        "text":"Clique para ver mais...",
        "products":books.slice(0,4),
        "class":"section box"
    };

    const terror={
        "title":"Clássicos do Terror",
        "text":"Clique para ver mais...",
        "products":books.slice(4),
        "class":"section box horror"
    };
function Home() {

    return (
        <div>
            <img src={require("../../img/img1.png")} class="preview-img" alt="homepage figure"></img>
            <SectionBox section={populares}></SectionBox>
            <SectionBox section={terror}></SectionBox>
        </div>
    )
}

export default Home