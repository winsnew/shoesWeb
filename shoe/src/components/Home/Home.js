import React from "react";
import "../Home/home.css"
import Search from "../../assets/searchSvg.png"
import Nav from "../Nav/Nav"

function Home () {
    
    return (
        <>
        <Nav/>
        <div className="home">            
            <header>
                <div className="logo_3d">
                    <img src="" alt="" /> 
                </div>
            <div className="menu">
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="search">
                <img src={Search} alt="" height={30} width={30}/>
            </div>
            </header>
            <div className="wrap-slider">
                <div className="slider">
                    <div className="item">
                        <div className="text">
                            <h1>Nice Shoes<br/>UT NIM 2022</h1>
                            <p>This is a picker website on the shoes theme and about my shoes e-commerce.
                            About this a picker site and enjoyed building site.
                            </p>
                            <a href="#">Buy Now</a>
                        </div>
                        <div className="model-shoes">

                        </div>
                    </div>

                    
                        
                    
                        

                    </div>
                </div>
                <div className="shape">
                    <div className="shape-inner">

                    </div>
                </div>
            </div>
            
        
        </>
    )
}

export default Home 