import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    pages= [],
    setCurrentPage,
    currentPage,
    // pageSelected,
    // setPageSelected
  } = props;

useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

//switch statment
  return (
<header>
        <h1 className="center pink" ><a href="index.html" >Erica Babb</a></h1>
        <nav>
            <ul className="nav justify-content-center nav-fill brown">
                <li className="nav-item">
                  <a href="works.html">Works</a>
                </li>
                <li className="nav-item">
                  <a href="contact.html">Contact</a>
                </li>
                <li className="nav-item">
                  <a href="resume.html">Resume</a>
                </li>

                {pages.map((page) => (
            <li className={`mx-1 ${
                currentPage.name === page.name && 'navActive'
                }`} key={page.name}>
              <span
                onClick={() => {
                  setCurrentPage(page)
                }}
              >
                {capitalizeFirstLetter(page.name)}
              </span>
            </li>
          ))}
              </ul>
        </nav>
    </header>
  );
}

export default Nav;
