import React from "react";
import '.././styles/style.css';
import '.././styles/dropdown.css';
import SectionBox from './SectionBox';
import {books} from '../BookData';

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
            <img src={require("../../img/img1.png")} alt="homepage figure" height='500px'></img>
            <SectionBox section={populares}></SectionBox>
            <SectionBox section={terror}></SectionBox>
        </div>
    )
}

export default Home