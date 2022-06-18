import React from "react";
import '.././styles/style.css';
import '.././styles/login.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

function Login() {
    return (
        <div class="login-group">
            <div class="login-base">
                <h1>Login</h1>
                <p>Name: <input class="login-input" type="text"></input></p>
                <p>E-mail: <input class="login-input" type="text"></input></p>
                <input type="button" class="login-btn" name="" value="Login"></input>
                <p>Don't have an account <Link to="/home/register"><a href="" class="login-link">Register</a></Link></p>
            </div>
        </div>
     )
}

export default Login