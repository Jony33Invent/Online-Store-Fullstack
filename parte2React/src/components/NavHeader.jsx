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
                    <Link to="/categories/adventure">Adventure</Link>
                    <Link to="/categories/horror">Horror</Link>
                    <Link to="/categories/romance">Romance</Link>
                    <Link to="/categories/sci-fi">Sci-Fi</Link>
                    <Link to="/categories/fantasy">Fantasy</Link>
                    <Link to="/categories/drama">Drama</Link>
                    <Link to="/categories/phylosophy">Phylosophy</Link>
                </div>
            </li>
        </ul>
    )
}

export default NavHeader