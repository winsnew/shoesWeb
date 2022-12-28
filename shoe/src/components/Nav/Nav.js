import React from "react";
import "../Nav/nav.css";

const Nav = () => {
    return (
        <div className="nav">
            <div className="sidebar">
            <div className="toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="social">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Whatsapp</a>
            </div>
            </div>

            <div className="toogle-menu">
                <ul>
                    <li><a href="#">Boolet</a></li>
                    <li><a href="#">Monk</a></li>
                    <li><a href="#">Ophank</a></li>
                    <li><a href="#">Riding</a></li>
                    <li><a href="#">Sandal</a></li>
                </ul>
            </div>
            </div>
        
        
    )
}

export default Nav