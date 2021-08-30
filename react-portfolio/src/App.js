// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import Nav from './components/Nav';
// import Main from './components/Main';
// import Footer from './components/Footer';


// function App() {
//   return (
//    <div>
//       <Nav></Nav>
//       <Main></Main>
      
//       <Footer></Footer>
//     </div> 
//   );
// }

// export default App;  

import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import { validateEmail } from './utils/helpers';

import github from './assets/css/github.svg';
import linkedin from './assets/css/linkedin.svg';
import instagram from './assets/css/instagram.svg';

import garden from './assets/images/garden.jpg';
import face from './assets/images/face.jpg';
import rollerskate from './assets/images/rollerskate.jpg';
import butlerBites from './assets/images/cake.jpg';
import financeTracker from './assets/images/finance.jpeg';
import inspirationalWellness from './assets/images/zen.jpeg';


export default function App() {
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

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
    <Route exact path="/">
      <About />
    </Route>
    <Route exact path="/contact">
      <ContactForm />
    </Route>
    <Route exact path="/resume">
      <Resume />
    </Route>
    <Route exact path="/works">
      <Works />
    </Route>
  </Switch>
    </Router>

    
  );
}

function Works() {
  return ( 
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={butlerBites} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5><a href="https://butler-bites.herokuapp.com/" className="title-text">Butler Bites</a></h5>
          <h5><a href="https://github.com/antellitocci/butler-bites" className="title-text">Github</a></h5>
          <p className="body-text">Overflowing with Butler-commuity recipes, finding the perfect one might be biting off more than you can chew!</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={inspirationalWellness} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5><a href="https://seanway28.github.io/InterstellarWellness/" className="title-text">Inspirational Wellness</a></h5>
          <h5><a href="https://github.com/seanway28/InterstellarWellness" className="title-text">Github</a></h5>
          <p className="title-text">Need a little me-time in your life? Inspirational Wellness prioritizes mental health and drives to spark inspiration in all aspects. </p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={financeTracker} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
        <h5><a href="https://sheltered-meadow-09243.herokuapp.com/" className="title-text">Finance Tracker</a></h5>
          <h5><a href="https://github.com/EricaBabb/finance-pwa" className="title-text">Github</a></h5>
          <p className="title-text">Desparate to keep your spending under control, but don't have the time to keep track of your transactions? The Finance Tracker is the app for the job! </p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
    <footer>
        <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/EricaBabb"><img className= "icon" src={github} alt=""/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/erica-b-2a8b33209/"><img className= "icon" src={linkedin} alt=""/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.instagram.com/erica_camile/?hl=en"><img className= "icon" src={instagram} alt=""/></a>
            </li>
          </ul>
    </footer>
  </div>
  );
}

const About = () => {
  return (
     <section>
<div className="body-text">
  <h3 className="title-text">I am Erica Babb.</h3>
        <p>
 Butler full stack web developer bootcamp student, while also attending IUPUI full-time pursuing a major in web development and minors in informatics and biology. A baker, aspiring bodybuilder, and a love for fashion and cats.
 </p>
        </div>

    <div className="row justify-content-center mx-2">
            <div className="card col-4 my-3 p-0 no-border">
                <img src={garden} alt="black and white rose garden"/>
            </div>
            <div className="card col-4 my-3 p-0 no-border">
               <img src={face} alt="black and white portrait"/>
            </div>
            <div className="card col-4 my-3 p-0 no-border">
               <img src={rollerskate} alt="black and white rollerskating"/>
            </div>   
    </div>

    <footer>
        <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/EricaBabb"><img className= "icon" src={github} alt=""/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/erica-b-2a8b33209/"><img className= "icon" src={linkedin} alt=""/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.instagram.com/erica_camile/?hl=en"><img className= "icon" src={instagram} alt=""/></a>
            </li>
          </ul>
    </footer>
     </section>
    
  );
}

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <div>
      <div className="form-center">
    <form id="contact-form" onSubmit={handleSubmit}>
        <div className=".form-floating mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name="email" className="form-control" id="exampleInputEmail1" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className=".form-floating mb-3">
          <label for="exampleInputName" className="form-label">Name</label>
          <input type="text" defaultValue={name} onBlur={handleChange} class="form-control" id="exampleInputName"/>
        </div>
        <div className=".form-floating  mb-3">
          <label for="exampleInputMessage" class="form-label">Message</label>
          <input type="text" className="form-control message-control" name="message" id="exampleInputMessage" defaultValue={message} onBlur={handleChange}/>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" class="btn my-btn">Submit</button>
      </form>
      </div>
      <footer>
        <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/EricaBabb"><img className= "icon" src={github} alt=""/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/erica-b-2a8b33209/"><img className= "icon" src={linkedin} alt=""/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.instagram.com/erica_camile/?hl=en"><img className= "icon" src={instagram} alt=""/></a>
            </li>
          </ul>
    </footer>
</div>
  );
}

function Resume() {
    return (
      <section>
          <h2 className="resume-title">Download my resume:
          </h2>

      <div className="row justify-content-center mx-2">
              <div className="card col-4 my-3 p-0 no-border">
                  <h3 className="body-text3">Front-end Proficiencies</h3>
                  <ul className="body-text2">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>JQuery</li>
                      <li>responsive design</li>
                      <li>React</li>
                      <li>Bootstrap</li>
                  </ul>
              </div>
              <div className="card col-4 my-3 p-0 no-border">
                  <h3 className="body-text3">Back-end Proficiencies</h3>
                  <ul className="body-text2">
                      <li>APIs</li>
                      <li>Node</li>
                      <li>Express</li>
                      <li>MySQL, Sequelize</li>
                      <li>MongoDB, Mongoose</li>
                      <li>REST</li>
                      <li>GraphQL</li>
                  </ul>
              </div>  
      </div>

      <footer>
        <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/EricaBabb"><img className= "icon" src={github} alt=""/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/erica-b-2a8b33209/"><img className= "icon" src={linkedin} alt=""/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.instagram.com/erica_camile/?hl=en"><img className= "icon" src={instagram} alt=""/></a>
            </li>
          </ul>
    </footer>

      </section>
      
    );
  }
