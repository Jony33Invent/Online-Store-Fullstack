import React from "react";
import NavHeader from "./NavHeader"
import './styles/style.css';
import './styles/dropdown.css';
import Cart from "./Cart"
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

function Header() {
    let user = localStorage.getItem("user")

    function onMouseEnter(event) {
        user = localStorage.getItem("user")
        console.log(user)
    }

    return (
        <div>
            <div class="div-block">
                <div class="inline header-left">
                    <img id="logo-img" src={require('../img/logo.png')} alt=" "></img>
                </div>
                <div class="inline header-center">
                    <br></br>
                    <form class="search-bar" action="/action_page.php">
                        <input type="text" placeholder="Search.." name="search2"></input>
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                </div>
                <div class="inline header-right" onMouseOver={onMouseEnter}>
                    <a class="icon-circle" href="">
                        <Link to={ user ? "/home/account/settings" : "/home/account/login"}><i class={ user ? "icon-link fa-solid fa-smile" : "icon-link fa-solid fa-user"}></i></Link>
                    </a>
                    <a class="icon-circle" href="">
                        <i class="icon-link fa-solid fa-cart-shopping"></i>
                        <Cart/>
                    </a>
                </div>
            </div>
            <NavHeader />
        </div>
    )
}

export default Header