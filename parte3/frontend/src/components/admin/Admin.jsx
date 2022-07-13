import React,{useEffect,useState} from "react";
import '.././styles/style.css';
import '.././styles/admin.css';
import '.././styles/category.css';
import AdminSection from './AdminSection';
//import {books} from '../BookData';


function Admin() {
    const [bookData,setBookData]=useState([]);
    useEffect(()=>{
        fetchItems();
    },[])

    const fetchItems = async () => {
        const data = await fetch('http://localhost:4000/books');
        const items = await data.json();
        setBookData(items);
    };

    const populares={
        "products":bookData.slice(0),
        "class":"section box admin"
    };

    return (
        <div>
            <h2>Administrator</h2>
            <AdminSection section={populares}></AdminSection>
        </div>
    )
}
/*
function Admin() {
    return (
        <div>
            <h2>Administrator</h2>
        </div>
    )
}*/

export default Admin