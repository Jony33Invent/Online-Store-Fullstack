import React, { useState } from "react";
import '.././styles/style.css';
import '.././styles/login.css';
import { useNavigate,Link} from "react-router-dom";

function Login() {
    const navigate = useNavigate()

    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const [firstTry, setFirstTry] = useState(true)
    const [filledData, setFilledData] = useState(false)
    const [logged, setLogged] = useState(false)

    const handleEmail = (event) => {
        setValues({...values, email: event.target.value})
    }

    const handlePassword = (event) => {
        setValues({...values, password: event.target.value})
    }

    const handleSubmit = async (event) => {

        console.log(values.email)
        event.preventDefault();
        setFirstTry(false);
        if (values.email && values.password) {
            setFilledData(true);
            const data = await fetch('http://localhost:4000/users/' + values.email);
            const user = await data.json();
        
            //verificação do login sem criptografia nem nada pq n tem servidor mesmo
            if(values.password === user.password) {
                setLogged(true);
                //se é admin ele vi ter um token a mais
                localStorage.setItem("user", user.email);
                localStorage.setItem("admin", user.admin);
                if(user.admin){
                    localStorage.setItem("admin",1);
                    navigate('/admin')
                    window.location.reload(false)
                }else{
                    navigate('/')
                    window.location.reload(false)
                }
            }
        }
    }

    return (
        <div class="login-group">
            <form class="login-base" onSubmit={handleSubmit}>
                <h1>Login</h1>
                {!firstTry && (!filledData || !logged) ? <div className="erro">ERRO: verifique se a senha e/ou e-mail estão corretos</div> : null}
                {logged ? <div className="aprovado">Login aprovado</div> : null}
                <p class="login-base-param">E-mail: <input class="login-input" type="text" 
                    value={values.email} onChange={handleEmail}></input></p>
                <p class="login-base-param">Password: <input class="login-input" type="password" 
                    value={values.password} onChange={handlePassword}></input></p>
                <input type="submit" class="login-btn" name="" value="Login"></input>
                <p>Don't have an account <Link to="/home/account/register"><a href="#self" class="login-link">Register</a></Link></p>
            </form>
        </div>
     )
}

export default Login