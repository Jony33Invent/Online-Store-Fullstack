import React from "react";
import '../styles/style.css';
import '../styles/dropdown.css';
import {Link} from "react-router-dom";

function AdminNav() {
    return (
        <ul>
            <li><Link to="/admin"><i className="fa-solid fa-house"></i></Link></li>
            <li className="dropdown">
                <div className="dropdown-content">
                    <Link to="/admin">Books</Link>
                    <Link to="/admin/users">Users</Link>
                </div>
            </li>
        </ul>
    )
}

export default AdminNav