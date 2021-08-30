// import React, { useEffect } from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function Nav() {
 
  return (
    <Router>
<header>
        <h1><Link to="/" className="center pink">Erica Babb</Link></h1>
        <nav>
            <ul className="nav justify-content-center nav-fill brown">
                <li className="nav-item">
                <Link to="/works" className= "brown"> Works</Link>
                </li>
                <li className="nav-item">
                <Link to="/contact" className= "brown">Contact</Link>
                </li>
                <li className="nav-item">
                <Link to="/resume" className= "brown">Resume</Link>
                </li>
              </ul>
        </nav>
    </header>
    </Router>
  );
}


export default Nav;
