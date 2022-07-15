import React, { useState } from "react";

import '.././styles/style.css';
import '.././styles/login.css';
import { useLocation,useNavigate } from "react-router-dom";


function BookEdit({section}) {
    
    const navigate = useNavigate()
const {state} = useLocation();
const book= state; // Read values passed on state

    const [values, setValues] = useState({
        name: book.name,
        author: book.author,
        genre:book.genre,
        price:book.price,
        quantity:book.quantity,
        img:book.img,
        descriptionTitle:book.descriptionTitle,
        descriptionText:book.descriptionText
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
     const deleteBook = async () => {
        await fetch(
            'http://localhost:4000/books/'+book._id,
            {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            }
        );
    }

    const handleDelete = (event) => {

        event.preventDefault();
        deleteBook();
        navigate('/admin');
        window.location.reload(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
            if (values.name && values.author && values.descriptionText && values.price) {
                updateBook();
            navigate('/admin')
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
                <h1><b>Edit Book</b></h1>
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
                <input type="submit" className="login-btn" name="" value="Apply Changes"></input>
                <input type="button" className="login-btn" style={{backgroundColor:"rgb(252, 79, 79)",margin:"20px"}} onClick={handleDelete} name="" value="Delete Book"></input>

                </div>

                <div className="book-image">
                    <img alt="book cover" id="hunger-games" src={book.img}></img>
                </div>
            </form>
        </div>
     )
}
export default BookEdit