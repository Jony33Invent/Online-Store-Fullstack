import React from "react";
import NavHeader from "./NavHeader"
import AdminNav from "./admin/AdminNav"
import './styles/style.css';
import './styles/dropdown.css';
import Cart from "./Cart";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import SearchBook from "./SearchBook";

function Header() {
    let user = localStorage.getItem("user");
    let admin = localStorage.getItem("admin");

    function onMouseEnter(event) {
        user = localStorage.getItem("user");
    }
    let nav=(admin==true)?<><AdminNav/></>:<NavHeader/>;
    return (
        <div>
            <div class="div-block">
                <div class="inline header-left">
                    <img id="logo-img" src={require('../img/logo.png')} alt=" "></img>
                </div>
                <div class="inline header-center">
                    <br></br>
                    <SearchBook/>
                </div>
                <div class="inline header-right" onMouseOver={onMouseEnter}>
                    <Link class="icon-circle"to={ user ? "/home/account/settings" : "/home/account/login"}>
                        <i class={ user ? "icon-link fa-solid fa-smile" : "icon-link fa-solid fa-user"}></i>
                    </Link>
                    {
                        (admin!=true)?<>
                            <a class="icon-circle">
                                <Link to="/cart"><i class="icon-link fa-solid fa-cart-shopping"></i></Link>
                                <Cart/>
                            </a>
                        </>:<></>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header