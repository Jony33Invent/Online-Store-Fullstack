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
        password: "",
        admin: 0
    });

    const placeItems = async () => {
        await fetch(
            'http://localhost:4000/users/' + localStorage.getItem(localStorage.getItem("user")),
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
            placeItems();
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
                <input type="submit" class="login-btn" name="" value="Create Account"></input>
                <p>Already have an account <Link to="/home/account/login"><a href="" class="login-link">Login</a></Link></p>
            </form>
        </div>
    )
}

export default Login