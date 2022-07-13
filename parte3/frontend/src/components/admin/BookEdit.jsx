import React, { useState } from "react";

import '.././styles/style.css';
import '.././styles/login.css';
import { useLocation } from "react-router-dom";



function BookEdit({section}) {
    
const {state} = useLocation();
const book= state; // Read values passed on state

    const [values, setValues] = useState({
        name: book.name,
        author: book.author,
        descriptionTitle:book.descriptionTitle,
        descriptionText:book.descriptionText,
        price:book.price,
        quantity:book.quantity
    });
    const handleName = (event) => {
        setValues({...values, name: event.target.value})
    }
    const handleAuthor = (event) => {
        setValues({...values, author: event.target.value})
    }
    const handleDescriptionTitle = (event) => {
        setValues({...values, descriptionTitle: event.target.value})
    }
    const handleDescriptionText = (event) => {
        setValues({...values, descriptionText: event.target.value})
    }
    const handlePrice = (event) => {
        setValues({...values, price: event.target.value})
    }
    const handleQuantity = (event) => {
        setValues({...values, quantity: event.target.value})
    }
    return (
        <div class="login-group">
            <form class="bookedit-base">
                <div>
                <h1><b>Edit Book</b></h1>
                <p class="bookedit-base-param">Name: <input class="bookedit-input" type="text" 
                    value={values.name} onChange={handleName}></input></p>
                <p class="bookedit-base-param">Author: <input class="bookedit-input" type="text" 
                    value={values.author} onChange={handleAuthor}></input></p>
                <p class="bookedit-base-param">Description Title: <input class="bookedit-input" type="text" 
                    value={values.descriptionTitle}  onChange={handleDescriptionTitle}></input></p>
                <p class="bookedit-base-param">Description Text: <textarea style={{height:'100px'}} class="bookedit-input" type="textarea" 
                    value={values.descriptionText} onChange={handleDescriptionText}></textarea></p>
                <p class="bookedit-base-param">Price: <input class="bookedit-input" type="text" 
                    value={values.price}  onChange={handlePrice}></input></p>
                <p class="bookedit-base-param">Quantity: <input class="bookedit-input" type="number" 
                    value={values.quantity} onChange={handleQuantity} ></input></p>
                <input type="button" class="login-btn" name="" value="Apply Changes"></input>
                </div>

                <div class="book-image">
                    <img id="hunger-games" src={book.img}></img>
                </div>
            </form>
        </div>
     )
}
export default BookEdit