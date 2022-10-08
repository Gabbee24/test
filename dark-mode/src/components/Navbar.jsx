import React from "react";
import './style.css'
import Logo from "./Logo";

export default function Navbar({darkMode, toggleDarkMode}) {
    return(
        <nav className={darkMode ? 'dark' : ''}>
            <img
                className="nav-logo" 
                src="./images/hiit_logo.PNG" 
                alt="HiiT logo" 
            />
            {/* <LogoPix/> */}
            <h3 className="nav-name">Company's name</h3>

            <div className="toggler">
                <p className="toggler-light">Light Mode</p>
                <div 
                    onClick={toggleDarkMode}
                    className="toggler-slider">
                    <div className="toggler-slider-circle"></div>
                </div>
                <p className="toggler-dark">Dark Mode</p>
            </div>
        </nav>
    )
    
}