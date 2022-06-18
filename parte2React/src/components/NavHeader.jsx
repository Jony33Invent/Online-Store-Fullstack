import React from "react";
import './styles/style.css';
import './styles/dropdown.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

function NavHeader() {
    return (
        <ul>
            <li><Link to="/"><i class="fa-solid fa-house"></i></Link></li>
            <li class="dropdown">
            <div class="dropdown-content">
                <Link to="/categories">Art</Link>
                <a href="#">Phylosophy</a>
                <a href="#">Adventure</a>
                <a href="#">Horror</a>
                <a href="#">Romance</a>
                <a href="#">Sci-Fi</a>
                <a href="categoria.html">Fantasy</a>
                <a href="#">Drama</a>
            </div>
            </li>
        </ul>
    )
}

export default NavHeader