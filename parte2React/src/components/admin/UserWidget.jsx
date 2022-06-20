import React from "react";
import '.././styles/style.css';
import '.././styles/admin.css';
import '.././styles/category.css';

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
    localStorage.setItem("users", users)
    window.location.reload(false)
}

function UserWidget({user}) {
    
    return (
        <div className="user-widget">
            <div className="user-widget-text">{user.id} - {user.email}</div>
            {!(user.email == "admin@email.com") ? <div className="user-widget-btn" onClick={handleDelete}>Delete</div> : null}
        </div>
    )
}

export default UserWidget