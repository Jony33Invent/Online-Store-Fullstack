import React from "react";
import '.././styles/style.css';
import '.././styles/admin.css';
import '.././styles/category.css';

function UserWidget({user}) {
    
    const handleDelete = (event) => {
        var accountsArr = localStorage.getItem("users").split(',');
        let users = "null";
        let n=accountsArr.length;
        for (let i = 1; i < n; i++) {
            if(accountsArr[i] !== user.email)
                users = users + ',' + accountsArr[i]
        }  
        event.preventDefault();
        localStorage.removeItem(user.email + "password")
        localStorage.removeItem(user.email + "adress")
        localStorage.removeItem(user.email + "name")
        localStorage.removeItem(user.email)
        localStorage.setItem("users", users)
        window.location.reload(false)
    }

    return (
        <div className="user-widget">
            <div className="user-widget-text">{user.id} - {user.email}</div>
            {!(user.email == "admin@email.com") ? <div className="user-widget-btn" onClick={handleDelete}>Delete</div> : null}
        </div>
    )
}

export default UserWidget