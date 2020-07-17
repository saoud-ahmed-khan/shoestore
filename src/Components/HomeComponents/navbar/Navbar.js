import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.css"
 
export const Navbar = () => {
    const [isOpen,SetOpen]= React.useState(false);
 const handleclick=()=>
    {
        SetOpen(!isOpen);
    }
  const  closenavbar=()=>
    {
        SetOpen(false);
    }
    return (
        <div>
            <nav>
                <div className="logobtn">
                    <div className="logo"><img src="https://www.teamphenomenalhope.org/wp-content/uploads/2017/03/teamph-icons-running.png" alt="logo"/>
</div>
                <div className="btn" onClick={handleclick}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                </div>
                <ul className={isOpen ? 'shownav' : 'undefine'}>
                    <li><Link onClick={closenavbar} to="/">Home</Link></li>
                    <li><Link  onClick={closenavbar} to="/Products" >Product</Link></li>


                </ul>
            </nav>
        </div>
    )
}