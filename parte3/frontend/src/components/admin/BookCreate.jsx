import React, { useState } from "react";

import '.././styles/style.css';
import '.././styles/login.css';
import { useNavigate } from "react-router-dom";


function BookCreate() {
    
    const navigate = useNavigate()
    const [values, setValues] = useState({
        name: "",
        author: "",
        genre:"",
        price:0,
        quantity:0,
        img:"",
        descriptionTitle:"",
        descriptionText:""
    });


    const updateBook = async () => {
        await fetch(
            'http://localhost:4000/books',
            {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
            }
        );

    }   

    const handleSubmit = (event) => {
        event.preventDefault();
            if (values.name && values.author && values.descriptionText && values.price) {
                updateBook();
            navigate('/admin');
            window.location.reload(false)
        }
    }

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
    const handleImage = (event) => {
        setValues({...values, img: event.target.value})
    }
    const handleGenre = (event) => {
        setValues({...values, genre: event.target.value})
    }
    return (
        <div className="login-group">
            <form className="bookedit-base" onSubmit={handleSubmit}>
                <div>
                <h1><b>Create Book</b></h1>
                <p className="bookedit-base-param">Name: <input className="bookedit-input" type="text" 
                    value={values.name} onChange={handleName}></input></p>
                <p className="bookedit-base-param">Author: <input className="bookedit-input" type="text" 
                    value={values.author} onChange={handleAuthor}></input></p>
                <p className="bookedit-base-param">Description Title: <input className="bookedit-input" type="text" 
                    value={values.descriptionTitle}  onChange={handleDescriptionTitle}></input></p>
                <p className="bookedit-base-param">Description Text: <textarea style={{height:'100px'}} className="bookedit-input" type="textarea" 
                    value={values.descriptionText} onChange={handleDescriptionText}></textarea></p>
                <p className="bookedit-base-param">Price: <input className="bookedit-input" type="text" 
                    value={values.price}  onChange={handlePrice}></input></p>
                <p className="bookedit-base-param">Image: <input className="bookedit-input" type="text" 
                    value={values.img} onChange={handleImage} ></input></p>
                <p className="bookedit-base-param">Genres: <input className="bookedit-input" type="text" 
                    value={values.genre} onChange={handleGenre} ></input></p>
                <p className="bookedit-base-param">Quantity: <input className="bookedit-input" type="number" 
                    value={values.quantity} onChange={handleQuantity} ></input></p>
                <input type="submit" className="login-btn" name="" value="Create Book"></input>

                </div>

            </form>
        </div>
     )
}
export default BookCreate