import React from "react";
import '.././styles/style.css';
import '.././styles/login.css';
import { Link } from 'react-router-dom';
function Login() {
    return (
        <div class="login-group">
            <div class="login-base">
                <h1>Login</h1>
                <p>Name: <input class="login-input" type="text"></input></p>
                <p>E-mail: <input class="login-input" type="text"></input></p>
                <p>Adress: <input class="login-input" type="text"></input></p>
                <p>Phone: <input class="login-input" type="text"></input></p>
                <div class="row">
                    <div>
                        <p class="message1">Already have an account?</p>
                        <Link to="/home/login">
                            <input type="button" class="login-btn" name="" value="Login"></input>
                        </Link>
                    </div>
                    <input type="button" class="login-btn create-account-btn" name="" value="Create Account"></input>
                </div>
            </div>
        </div>
    )
}

export default Login