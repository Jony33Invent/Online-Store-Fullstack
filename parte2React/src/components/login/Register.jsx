import React, { useState } from "react";
import '.././styles/style.css';
import '.././styles/login.css';
import { useNavigate, Link } from 'react-router-dom';
function Login() {
    const navigate = useNavigate()

    const [values, setValues] = useState({
        name: "",
        adress: "",
        email: "",
        password: ""
    });

    const [firstTry, setFirstTry] = useState(true)
    const [filledData, setFilledData] = useState(false)

    const handleName = (event) => {
        setValues({...values, name: event.target.value})
    }
    const handleAdress = (event) => {
        setValues({...values, adress: event.target.value})
    }
    const handleEmail = (event) => {
        setValues({...values, email: event.target.value})
    }
    const handlePassword = (event) => {
        setValues({...values, password: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFirstTry(false);
        if (values.email && values.password && values.adress && values.name) {
            localStorage.setItem(values.email + 'name', values.name);
            localStorage.setItem(values.email, values.email);
            localStorage.setItem(values.email + 'adress', values.adress);
            localStorage.setItem(values.email + 'password', values.password);
            localStorage.setItem("user", values.email);
            setFilledData(true);
            navigate('/')
            window.location.reload(false)
        }
    }


    return (
        <div class="login-group">
            <form class="login-base" onSubmit={handleSubmit}>
                <h1>Register</h1>
                {!firstTry && (!filledData) ? <div className="erro">ERRO: verifique se as informações inseridas estão corretas</div> : null}
                {filledData ? <div className="aprovado">Usuário criado</div> : null}
                <p class="login-base-param">Name: <input class="login-input" type="text" onChange={handleName}></input></p>
                <p class="login-base-param">Adress: <input class="login-input" type="text" onChange={handleAdress}></input></p>
                <p class="login-base-param">E-mail: <input class="login-input" type="text" onChange={handleEmail}></input></p>
                <p class="login-base-param">Password: <input class="login-input" type="password" onChange={handlePassword}></input></p>
                <div class="row">
                    <div>
                        <p class="message1">Already have an account?</p>
                        <Link to="/home/account/login">
                            <input type="button" class="login-btn" name="" value="Login"></input>
                        </Link>
                    </div>
                    <input type="submit" class="login-btn create-account-btn" name="" value="Create Account"></input>
                </div>
            </form>
        </div>
    )
}

export default Login