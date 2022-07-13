import React from "react";
import '.././styles/style.css';
import '.././styles/admin.css';
import '.././styles/category.css';

function UserWidget({user}) {
    
    const deleteItems = async () => {
        await fetch(
            'http://localhost:4000/users/' + user.email,
            {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            }
        );
    }

    const handleDelete = (event) => {
        event.preventDefault();
        deleteItems();
        window.location.reload(false)
    }

    return (
        <div className="user-widget">
            <div className="user-widget-text">{user.name} - {user.email}</div>
            <div className="user-widget-btn" onClick={handleDelete}>Delete</div>
        </div>
    )
}

export default UserWidget