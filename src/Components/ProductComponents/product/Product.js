import React from 'react'
import './Product.css'
import { Outlet } from "react-router-dom";

export const Products = () => {
    return (
        <div>
            <div className ="product">Our Products</div> 
            <div>
                <Outlet/>
                </div>     
        </div>
    )
}