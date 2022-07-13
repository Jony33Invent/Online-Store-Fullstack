import React, {useState, useEffect} from "react";
import '.././styles/style.css';
import '.././styles/login.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function ClientSettings() {
    const navigate = useNavigate()

    //dados da tentativa de login
    const [userData,setUserData]=useState([]);
    useEffect(()=>{
		fetchItems();
    },[])

    const fetchItems = async () => {
        const data = await fetch('http://localhost:4000/users/' + localStorage.getItem(localStorage.getItem("user")));
        const user = await data.json();
        setUserData(user);
    };

    //resetando os tokens para quando o usuário sai da conta
    const handleExit = (event) => {
        event.preventDefault();
        localStorage.removeItem("user")
        navigate('/')
        localStorage.setItem("admin",0);
        window.location.reload(false)
    }

    
    console.log(userData.name)
    return (
        <div className="login-group">
            <form class="login-base">
                <h1>Settings</h1>
                <p class="login-base-param">Name: {userData.name} </p>
                <p class="login-base-param">Adress: {userData.adress} </p>
                <p class="login-base-param">Email: {userData.email} </p>
            
                <input type="submit" class="login-btn" name="" value="Exit account" onClick={handleExit}></input>
                <Link to="/home/account/settings/edit">
                    <input type="button" class="login-btn" name="" value="Edit account"></input>
                </Link>
            </form>
        </div>
    )
}

export default ClientSettings