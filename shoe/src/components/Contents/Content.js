import React, { useState } from "react";
import "./content.css"
import Search from "../../assets/searchSvg.png"
import {NavLink} from "react-router-dom"
import {Link} from "react-router-dom"
import Card from "./Card"


function Content ({children}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggled = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name:"Home",
            icon:"search"
        },
        {
            path:"/running",
            name:"Runninng",
            Link:"./Running"
        },
        {
            path:"/calm",
            name:"Calm",
            Link:"./Calm"
        },
        {
            path:"/common",
            name:"Common",
            Link:"./Common"
        },
        {
            path:"/travel",
            name:"Travel",
            Link:"./Travel"
        },
        {
            path:"/checkbox",
            name:"CheckBox",
            Link:"./CheckBox"
        },
        {
            path:"/go",
            name:"Go",
            Link:"./Go"
        }
    ]
    return (
        <>
        <div className="nav">
            <div style={{width: isOpen ? "300px" : "100px", transition: isOpen ? "ease, .5s" : "ease, .5s"}}className="sidebar">
            <div className="toggle" styled={{display: !isOpen ? "block" : "none"}}onClick={toggled}>
        
                <div className="top_section">
                    <div className="bars">
                        
                        <span></span>
                        <span></span>
                        <span></span>
                        
                    </div>
                    <div className="filter-container" styled={{display: !toggled ? "none" : "block"}}>
                    {    
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active" >
                            <div className="name-tag" style={{display: !isOpen ? "none" : "none"}}>{item.name}</div>
                            <div style={{display: isOpen ? "block" : " none"}} className="link_text" >{item.name}</div>
                        </NavLink>
                    ))
                    }
                </div>
                </div>

            </div>
            
            </div>
            
            <main>{children}</main>
        </div>

        <div className="home" >            
            <header>
                <div className="logo_3d">
                    <img src="" alt="" /> 
                </div>
            <div style={{marginLeft: isOpen ? "300px" : "100px", transitionDelay: isOpen ? ".25s" : ".25s", transition: isOpen ? ".5s, ease-in-out" : "ease-in-out"}}className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/" href="#about">About</Link></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="search">
                <img src={Search} alt="" height={30} width={30}/>
            </div>
            </header>

            <div style={{marginLeft: isOpen ? "200px" : "0px", transition: isOpen ? "ease, .5s" : "ease, .5s"}}className="content-product">
                <div className="productContent">
                    <h1>Running Description</h1>
                    <h4>Hello World</h4>
                    <h5>Read More</h5>
                </div>
                <div className="data-fetching">
                    <Card/>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Content