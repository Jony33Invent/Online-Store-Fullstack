import React from "react";
import './styles/style.css';
import './styles/dropdown.css';

function Footer() {
    return (
        <div className="section bottom">
            <h2>Social Media: </h2>
            <a href="#self" className="social"><i className="fa-brands fa-facebook"></i></a>
            <a href="#self" className="social"><i className="fa-brands fa-instagram"></i></a>
            <a href="#self" className="social"><i className="fa-brands fa-twitter"></i></a>
        </div>
    )
}

export default Footer