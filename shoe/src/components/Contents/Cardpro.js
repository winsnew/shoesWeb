import React, { useEffect, useState } from "react"
import "./card.css"

function Cardpro() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    let CardName = `bg_color`
    let bg_img = `url()`
    let componentMounted = true;

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch("https://dummyjson.com/products");
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
            }

            return () => {
                componentMounted = false
            }

        }

        getProduct();
    }, []);

    
    
    
    return(
        <>
        {filter.map((products) => {
            return (
        
        <div className="card" key={products.id}>
            <div className="wrapper">
                <div className={CardName}></div>
                <div className="card_img" style={{backgroundImage: bg_img}}></div>
                <div className="heart">
                    <svg xmlns="<http://www.w3.org/2000/svg>" viewBox="0 0 64 64">
                    <path d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z">
                        </path>
                    </svg>
                </div>
                <div className="cardInfo">
                    <h1></h1>
                    <p className="date_info"></p>
                    <div className="action">
                        <div className="priceGroup">
                            <p className="price old_price">
                                
                            </p>
                            <p className="price newPrice">
                                
                            </p>
                        </div>
                        <div className="cart">
                            <svg className="outCart" xmlns="<http://www.w3.org/2000/svg>" viewBox="0 0 64 64">
                                <path d="M2 6h10l10 40h32l8-24H16"></path>
                                <circle cx="23" cy="54" r="4"></circle>
                                <circle cx="49" cy="54" r="4"></circle>
                            </svg>
                        </div>
                    </div>
                
                </div>
                <div className="shoe-3">
                    <svg></svg>
                </div>
            </div>
        </div>
        )
    })}
        </>

    )
    
}



export default Cardpro