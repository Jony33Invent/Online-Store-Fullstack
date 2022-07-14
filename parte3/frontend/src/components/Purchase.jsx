import React,{useEffect,useState} from "react";
import './styles/style.css';
import {Link} from "react-router-dom";

function Purchase() {
    /*
    const [values, setValues] = useState({
        name: "",
        author: "",
        genre:"",
        price:"",
        quantity:"",
        img:"",
        descriptionTitle:"",
        descriptionText:""
    });
*/
    const editBook = async (id) => {
        console.log("Book Id: "+id);
        
        const data = await fetch('http://localhost:4000/books/' +id);
        const book = await data.json();
        book.quantity--;
        if(book.quantity<0)
            book.quantity=0;
        console.log("Book ");
        console.log(book);       
        /*
        setValues({
            ...values, 
            name: book.name,
            author: book.author,
            genre:book.genre,
            price:book.price,
            quantity:book.quantity,
            img:book.img,
            descriptionTitle:book.descriptionTitle,
            descriptionText:book.descriptionText
        });*/
        updateBook({ name: book.name,
            author: book.author,
            genre:book.genre,
            price:book.price,
            quantity:book.quantity,
            img:book.img,
            descriptionTitle:book.descriptionTitle,
            descriptionText:book.descriptionText
        });
    };

const finishPuchase= (event)=>{
    event.preventDefault();
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.forEach((item)=>{
        editBook(item);
    });
    localStorage.setItem('cart', JSON.stringify([]));
    alert("Succes");
    window.location.reload(false)
};

    const updateBook = async (val) => {
        console.log("Update");
        console.log(val);
        await fetch(
            'http://localhost:4000/books',
            {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(val),
            }
        );
    }   
    return (
        <div>
            <div class="login-group" >
            <br/>
                <h1 style={{color:'white'}}>Finish Purchase</h1>
                <div class="login-base" style={{width:"45%"}}>
                    <h1>Credit Card Info</h1>
                    <p class="login-base-param">Card Number: <input class="login-input" type="number"></input></p>
                    <p class="login-base-param">Cardholder Name: <input class="login-input" type="text"></input></p>
                    <p class="login-base-param">Expiration Date: <input class="login-input" type="date"></input></p>
                    <p class="login-base-param">CVC code: <input class="login-input" type="number"></input></p>
                    <input type="button" onClick={finishPuchase} class="login-btn" name="" value="Confirm Purchase"></input>
                </div>
            </div>
        </div>
    )
}

export default Purchase