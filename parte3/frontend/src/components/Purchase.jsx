import React from "react";
import './styles/style.css';
//import {Link} from "react-router-dom";

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
        //console.log("Book Id: "+id);
        
        const data = await fetch('http://localhost:4000/books/' +id);
        const book = await data.json();
        book.quantity--;
        if(book.quantity<0)
            book.quantity=0;
        //console.log("Book ");
        //console.log(book);       
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
        //console.log("Update");
        //console.log(val);
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
            <div className="login-group" >
            <br/>
                <h1 style={{color:'white'}}>Finish Purchase</h1>
                <div className="login-base" style={{width:"45%"}}>
                    <h1>Credit Card Info</h1>
                    <p className="login-base-param">Card Number: <input className="login-input" type="number"></input></p>
                    <p className="login-base-param">Cardholder Name: <input className="login-input" type="text"></input></p>
                    <p className="login-base-param">Expiration Date: <input className="login-input" type="date"></input></p>
                    <p className="login-base-param">CVC code: <input className="login-input" type="number"></input></p>
                    <input type="button" onClick={finishPuchase} className="login-btn" name="" value="Confirm Purchase"></input>
                </div>
            </div>
        </div>
    )
}

export default Purchase