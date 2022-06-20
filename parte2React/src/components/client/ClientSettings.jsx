import React, {useState} from "react";
import '.././styles/style.css';
import '.././styles/login.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function ClientSettings() {
    const navigate = useNavigate()
    const [values, setValues] = useState({
        name: localStorage.getItem(localStorage.getItem("user") + "name"),
        adress: localStorage.getItem(localStorage.getItem("user") + "adress"),
        email: localStorage.getItem(localStorage.getItem("user"))
    });

    const handleExit = (event) => {
        event.preventDefault();
        localStorage.removeItem("user")
        navigate('/')
        window.location.reload(false)
    }


    return (
        <div className="login-group">
            <form class="login-base">
                <h1>Settings</h1>
                <p class="login-base-param">Name: {values.name} </p>
                <p class="login-base-param">Adress: {values.adress} </p>
                <p class="login-base-param">Email: {values.email} </p>
            
                <input type="submit" class="login-btn" name="" value="Exit account" onClick={handleExit}></input>
                <Link to="/home/account/settings/edit">
                    <input type="button" class="login-btn" name="" value="Edit account"></input>
                </Link>
            </form>
        </div>
    )
}

export default ClientSettings