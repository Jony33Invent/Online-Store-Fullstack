import React, { useState } from "react";
import TextField from './TextField';

function Forms() {
    
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        birthday: "",
        sign: "",
    });

    const [submitted, setSubmitted] = useState(false)
    const [validEmail, setValidEmail] = useState(false)
    const [validBth, setValidBth] = useState(false)
    const [filledData, setFilledData] = useState(false)
    const reEmail = new RegExp(".br$|.edu$|.com$")
    const reBth = /^([1-9]|0[1-9]|[12][0-9]|3[01])[/]([1-9]|0[1-9]|1[012])[/](19|20)\d\d$/

    const handleFirstName = (event) => {
        setValues({...values, firstName: event.target.value})
    }
    const handleLastName = (event) => {
        setValues({...values, lastName: event.target.value})
    }
    const handleEmail = (event) => {
        setValues({...values, email: event.target.value})
        if (reEmail.test(event.target.value)) {
            setValidEmail(true);  
        } else {
            setValidEmail(false);
            setSubmitted(false);
        }
    }
    const handleBirthday = (event) => {
        setValues({...values, birthday: event.target.value})
        if (reBth.test(event.target.value)) {
            setValidBth(true);  
        } else {
            setValidBth(false);
            setSubmitted(false);
        }
    }
    const handleSign = (event) => {
        setValues({...values, sign: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (values.birthday && values.email && values.firstName && values.lastName) {
            setFilledData(true);
        }
        setSubmitted(true);
    }
    const validations=[
        !values.firstName,
        !values.lastName,
        (!validBth || !values.birthday),
        (!validEmail || !values.email),
        (!values.sign || values.sign === "Signo") 
    ];
    let valid=true;
    let i=0;
    validations.forEach(v=>{
        i++;
        if(v)
            valid=false;
    });
    return (
        <div>
            <form className="Form" onSubmit={handleSubmit}>

                <TextField
                    holder={'Primeiro Nome'}
                    value={values.firstName} 
                    change={handleFirstName}
                    teste={(submitted && validations[0])}
                    errorMessage={"Invalid first name"}
                    />

                <TextField 
                    holder={'Segundo Nome'}
                    value={values.lastName}
                    change={handleLastName}
                    teste={(submitted && validations[1])}
                    errorMessage={"Invalid last name"}/>

                <TextField 
                    holder={'Data de Nascimento'}
                    value={values.birthday} 
                    change={handleBirthday} 
                    teste={submitted && validations[2]}
                    errorMessage={"Invalid date (dd/mm/yyyy)"}/>

                <TextField 
                    holder={'Email'}
                    value={values.email} 
                    change={handleEmail} 
                    teste={submitted && validations[3]}
                    errorMessage={"Invalid email"}/>

                <select className="Signos" data-required value={values.sign} 
                    onChange={handleSign}>
                    <option selected >Signo</option>
                    <option>Áries</option>
                    <option>Touro</option>
                    <option>Gêmeos</option>
                    <option>Câncer</option>
                    <option>Leão</option>
                    <option>Virgem</option>
                    <option>Libra</option>
                    <option>Escorpião</option>
                    <option>Sagitário</option>
                    <option>Capricórnio</option>
                    <option>Aquário</option>
                    <option>Peixes</option>
                </select>
                {submitted && validations[4]? <div className="erro">Submit a valid Sign</div> : null}
                <button type="submit">Enviar</button>
            </form>
            {submitted && valid ? <div className="submitted">Enviado</div> : null}
        </div>
    );
}
export default Forms;