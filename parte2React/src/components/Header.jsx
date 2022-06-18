import React from "react";
import NavHeader from "./NavHeader"
import './styles/style.css';
import './styles/dropdown.css';
import Cart from "./Cart"
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import {cartData} from './BookData';



function Header() {
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
                <div class="inline header-right">
                    <a class="icon-circle" href="">
                        <Link to="/home/login"><i class="icon-link fa-solid fa-user"></i></Link>
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