import React, { Suspense } from "react";
import "../Home/home.css";
import {Canvas} from "@react-three/fiber";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import About from "../About/About";
import Footer from "../Footer/Footer";

function Home () {
    return (
        <>
        <Nav/>
        <div className="home" >            
            <header>
                <div className="logo-3d">
                    <img src="" alt="" /> 
                </div>
            <div className="menu">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="control-container">
                
            </div>
            </header>
            <div className="wrap-slider">
                <div className="slider">
                    <div className="item">
                        <div className="text">
                            <h1>NIKE Shoes<br/>NIKE 2022 SERIES</h1>
                            <p>This is a picker website on the shoes theme and about my shoes e-commerce.
                            About this a picker site and enjoyed building site.
                            </p>
                            <a href="#">Buy Now</a>
                        <div className="about">
                            <About/>
                        </div>
                        
                            
                    
                        </div>
                        <div className="model-shoes" style={{width:"50vw", height:"70vh"}}>
                        <Canvas camera={{ fov: 5}}>
                          <Suspense fallback={null}>
                            
                            </Suspense>  
                        </Canvas>
                        </div>
                        
                    </div>
                    </div>
                </div>    
            </div>    
                    <div className="footer">
                        <Footer/>
                    </div>
        </>
    )
}

export default Home 