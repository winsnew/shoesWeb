import React, { useState } from "react"
import "../Nav/navcontent.css"
import {FaBars} from "react-icons/fa"
import {NavLink} from "react-router-dom"

const NavContent = ({children}) => {
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
        <div className="nav">
            <div style={{width: isOpen ? "100px" : "300px"}}className="sidebar">
            <div className="toggle" styled={{display: !isOpen ? "block" : "none"}}onClick={toggled}>
        
                <div className="top_section">
                    <div styled={{marginLeft: isOpen ? "30px" : "0px"}}className="bars">
                    <FaBars onClick={toggled} style={{fontSize: "20px, 20px"}}/>
                    </div>
                    <div className="filter-container" styled={{display: !toggled ? "none" : "block"}}>
                    {    
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active" >
                            <div className="name-tag" style={{display: !setIsOpen ? "none" : "none"}}>{item.name}</div>
                            <div style={{display: isOpen ? "none" : " block"}} className="link_text" >{item.name}</div>
                        </NavLink>
                    ))
                    }
                </div>
                </div>

            </div>
            
            </div>
            
            <main>{children}</main>
        </div>
    )
}
export default NavContent