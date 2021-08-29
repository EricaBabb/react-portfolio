import React from 'react';

const Footer = () => {

  return (
    <footer>
        <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="#"><img className= "icon" src="./css/github.svg" alt=""/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><img className= "icon" src="./css/linkedin.svg" alt=""/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><img className= "icon" src="./css/instagram.svg" alt=""/></a>
            </li>
          </ul>
    </footer>
  );
};

export default Footer;