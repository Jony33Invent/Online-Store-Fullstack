import React, { useEffect, useState } from "react";
import '.././styles/style.css';
import '.././styles/login.css';
import { useNavigate } from 'react-router-dom';



function Login() {
    const navigate = useNavigate()

    const [values, setValues] = useState({
        name: "",
        adress: "",
        email: "",
        password: "",
        admin: ""
    });

    //Pega o valor inicial do user no server
    useEffect(()=>{
		fetchItems();
    },[])
    
    const fetchItems = async () => {
        const data = await fetch('http://localhost:4000/users/' + localStorage.getItem("user"));
        const user = await data.json();
        setValues({
            ...values, 
            name: user.name,
            adress: user.adress,
            email: user.email,
            password: user.password,
            admin: user.admin
        })
    };

    const placeItems = async () => {
        await fetch(
            'http://localhost:4000/users/' + localStorage.getItem("user"),
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

    const deleteItems = async () => {
        await fetch(
            'http://localhost:4000/users/' + localStorage.getItem("user"),
            {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
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

    //Edição dos settings do usuário
    const handleSubmit = (event) => {
        event.preventDefault();
        setFirstTry(false);
        if (values.email && values.password && values.adress && values.name) {
            placeItems();
            setFilledData(true);
            navigate('/home/account/settings')
            window.location.reload(false)
        }
    }

    //Deleta todos os dados do usuário + o seu email do banco de dados do adm (sequencial porque ta tudo csv no local Storage)
    const handleDelete = (event) => {
        event.preventDefault();

        deleteItems();

        localStorage.removeItem("user")
        navigate('/')
        localStorage.setItem("admin",0);
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