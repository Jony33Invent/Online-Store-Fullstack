import React, { useState } from "react";
import '.././styles/style.css';
import '.././styles/login.css';
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate()

    //Pega o valor inicial do user no localStorage
    const [values, setValues] = useState({
        name: localStorage.getItem(localStorage.getItem("user") + "name"),
        adress: localStorage.getItem(localStorage.getItem("user") + "adress"),
        email: localStorage.getItem(localStorage.getItem("user")),
        password: localStorage.getItem(localStorage.getItem("user") + "password"),
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

    //Edição dos settings do usuário
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
            navigate('/home/account/settings')
            window.location.reload(false)
        }
    }

    //Deleta todos os dados do usuário + o seu email do banco de dados do adm (sequencial porque ta tudo csv no local Storage)
    const handleDelete = (event) => {
        var accountsArr = localStorage.getItem("users").split(',');
        let users = "null";
        let n=accountsArr.length;
        for (let i = 1; i < n; i++) {
            if(accountsArr[i] !== localStorage.getItem("user"))
                users = users + ',' + accountsArr[i]
        }  
        event.preventDefault();
        localStorage.removeItem(localStorage.getItem("user") + "password")
        localStorage.removeItem(localStorage.getItem("user") + "adress")
        localStorage.removeItem(localStorage.getItem("user") + "name")
        localStorage.removeItem(localStorage.getItem("user"))
        localStorage.removeItem("user")
        localStorage.setItem("users", users)
        navigate('/')
        window.location.reload(false)
    }


    return (
        <div class="login-group">
            <form class="login-base" onSubmit={handleSubmit}>
                <h1>Edit Account</h1>
                {!firstTry && (!filledData) ? <div className="erro">ERRO: verifique se as informações inseridas estão corretas</div> : null}
                {filledData ? <div className="aprovado">Usuário atualizado</div> : null}
                <p class="login-base-param">Name: <input class="login-input" type="text" onChange={handleName} value={values.name}></input></p>
                <p class="login-base-param">Adress: <input class="login-input" type="text" onChange={handleAdress} value={values.adress}></input></p>
                <p class="login-base-param">E-mail: <input class="login-input" type="text" onChange={handleEmail} value={values.email}></input></p>
                <p class="login-base-param">Password: <input class="login-input" type="password" onChange={handlePassword} value={values.password}></input></p>
                <input type="submit" class="login-btn" name="" value="Update Account"></input>
                <input type="button" class="login-btn-del" name="" value="Delete account" onClick={handleDelete}></input>
            </form>
        </div>
    )
}

export default Login