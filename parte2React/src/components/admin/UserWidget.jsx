import React from "react";
import '.././styles/style.css';
import '.././styles/admin.css';
import '.././styles/category.css';
import AdminSection from './AdminSection';
import {books} from '../BookData';



function UserWidget({user}) {
    return (
        <div className="user-widget">
            <div className="user-widget-text">{user.id} - {user.email}</div>
            <div className="user-widget-btn">Delete</div>
        </div>
    )
}

export default UserWidget