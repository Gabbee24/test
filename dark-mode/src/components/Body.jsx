import React from "react";
import './style.css';

export default function Body({darkMode}) {
    return(
        <main className={darkMode ? 'dark' : ''}>
            <p>Just testing</p>
        </main>
    )
    
}