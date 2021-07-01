import React from 'react'
import './style.css';

import { Link } from 'react-router-dom'; 
 
function Navbar(){
    return(
        <div className="navbar">
            <h3>Projects</h3>
            <h3>About Me</h3>
        </div>
    )
}

export default Navbar;