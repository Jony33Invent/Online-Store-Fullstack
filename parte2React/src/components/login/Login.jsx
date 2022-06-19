import React, { useEffect, useState } from "react";
import '.././styles/style.css';
import '.././styles/login.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

function Login() {

    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const [firstTry, setFirstTry] = useState(true)
    const [filledData, setFilledData] = useState(false)
    const [validAccount, setValidAccount] = useState(false)

    const handleEmail = (event) => {
        setValues({...values, email: event.target.value})
    }

    const handlePassword = (event) => {
        setValues({...values, password: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFirstTry(false);
        if (values.email && values.password) {
            setFilledData(true);
        }
        if (values.email === 'teste@gmail.com' && values.password === '123') {
            setValidAccount(true);
        }
        if(values.email && values.password && values.email === 'teste@gmail.com' && values.password === '123') {
            window.location.reload(false)
            localStorage.setItem("user","auth");
        }
    }

    return (
        <div class="login-group">
            <form class="login-base" onSubmit={handleSubmit}>
                <h1>Login</h1>
                {!firstTry && (!validAccount || !filledData) ? <div className="erro">ERRO: verifique se a senha e/ou e-mail estão corretos</div> : null}
                {validAccount && filledData ? <div className="aprovado">Login aprovado</div> : null}
                <p class="login-base-param">E-mail: <input class="login-input" type="text" 
                    value={values.email} onChange={handleEmail}></input></p>
                <p class="login-base-param">Password: <input class="login-input" type="password" 
                    value={values.password} onChange={handlePassword}></input></p>
                <input type="submit" class="login-btn" name="" value="Login"></input>
                <p>Don't have an account <Link to="/home/register"><a href="" class="login-link">Register</a></Link></p>
            </form>
        </div>
     )
}

export default Login