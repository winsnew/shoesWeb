import React from "react";
import {FaFacebook} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import { FaInstagram } from "react-icons/fa";
import Footer from "../Footer/Footer"
import "../Nav/nav.css";

function Nav () {
    
    return (
        <>
        <div className="nav">
            <div className="sidebar">
            <div className="toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="social">
                <ul>
                <li><a href="#"><i className="fab facebook"><FaFacebook/></i></a></li>
                <li><a href="#"><i className="fab twitter"><FaTwitter/></i></a></li>
                <li><a href="#"><i className="fab instagram"><FaInstagram/></i></a></li>
                </ul>
            </div>
            </div>
            

            <div className="toggle-menu">
                <ul>
                    <li><a href="#">Boolet</a></li>
                    <li><a href="#">Monk</a></li>
                    <li><a href="#">Ophank</a></li>
                    <li><a href="#">Riding</a></li>
                    <li><a href="#">Sandal</a></li>
                </ul>
            </div>
            </div>
            </>
        
    )
}

export default Nav