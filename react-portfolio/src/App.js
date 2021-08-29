import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import Works from './components/Works';
import Resume from './components/Resume';

function App() {
 
  //List all four pages
  const [pages] = useState ([
   { name: "About"},
   { name: "Works"},
   { name: "Contact"},
   { name: "Resume"},
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);
//Change contactSelected to pageSelected
  // const [contactSelected, setContactSelected] = useState(pages[1]);

  return (
    <div>
      <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Nav>
      <main>
            <About></About>
            <Works></Works>
            <ContactForm></ContactForm>
            <Resume></Resume>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;