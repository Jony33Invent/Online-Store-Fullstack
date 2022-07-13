import React,{useEffect,useState} from "react";
import './styles/style.css';
import {Link} from "react-router-dom";

function Purchase() {

    return (
        <div>
            <div class="login-group" >
            <br/>
                <h1 style={{color:'white'}}>Finish Purchase</h1>
                <form class="login-base" style={{width:"45%"}}>
                    <h1>Credit Card Info</h1>
                    <p class="login-base-param">Card Number: <input class="login-input" type="number"></input></p>
                    <p class="login-base-param">Cardholder Name: <input class="login-input" type="text"></input></p>
                    <p class="login-base-param">Expiration Date: <input class="login-input" type="date"></input></p>
                    <p class="login-base-param">CVC code: <input class="login-input" type="number"></input></p>
                    <input type="submit" class="login-btn" name="" value="Confirm Purchase"></input>
                </form>
            </div>
        </div>
    )
}

export default Purchase