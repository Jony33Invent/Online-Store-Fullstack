import React from "react";
import '../styles/style.css';
import '../styles/dropdown.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

function AdminNav() {
    return (
        <ul>
            <li><Link to="/admin"><i class="fa-solid fa-house"></i></Link></li>
            <li class="dropdown">
                <div class="dropdown-content">
                    <Link to="/admin">Books</Link>
                    <Link to="/admin/users">Users</Link>
                </div>
            </li>
        </ul>
    )
}

export default AdminNav