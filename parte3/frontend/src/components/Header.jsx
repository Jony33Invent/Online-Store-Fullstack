import React from "react";
import './styles/style.css';
import './styles/dropdown.css';
import Cart from "./Cart";

import { Link} from "react-router-dom";
import SearchBook from "./SearchBook";

function Header() {
    let user = localStorage.getItem("user");
    let admin = localStorage.getItem("admin");

    function onMouseEnter(event) {
        user = localStorage.getItem("user");
    }
    //let nav=(admin==true)?<><AdminNav/></>:<NavHeader/>;
    return (
        <div>
            <div className="div-block">
                <div className="inline header-left">
                    <img id="logo-img" src={require('../img/logo.png')} alt=" "></img>
                </div>
                <div className="inline header-center">
                    <br></br>
                    {(admin==true)?<></>:<SearchBook/>}
                </div>
                <div className="inline header-right" onMouseOver={onMouseEnter}>
                    <Link className="icon-circle"to={ user ? "/home/account/settings" : "/home/account/login"}>
                        <i className={ user ? "icon-link fa-solid fa-smile" : "icon-link fa-solid fa-user"}></i>
                    </Link>
                    {
                        (admin!=true)?<>
                            <div className="icon-circle">
                                <Link to="/cart"><i className="icon-link fa-solid fa-cart-shopping"></i></Link>
                                <Cart/>
                            </div>
                        </>:<></>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header