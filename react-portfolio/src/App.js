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
import network from './assets/images/network.jpeg';
import workDay from './assets/images/work-day.jpeg';
import inspirationalWellness from './assets/images/zen.jpeg';
import readMe from './assets/images/readme.png';




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
    <div className="flex">

<div className="card space-between" style={{width: '18rem'}}>
  <img src={butlerBites} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Butler Bites</h5>
    <p className="card-text">Overflowing with Butler-commuity recipes, finding the perfect one might be biting off more than you can chew!</p>
  </div>
  <div className="card-body">
    <a href="https://butler-bites.herokuapp.com/" className="card-link">Deployed App</a>
    <a href="https://github.com/antellitocci/butler-bites" className="card-link">Github</a>
  </div>
</div>

<div className="card space-between" style={{width: '18rem'}}>
  <img src={inspirationalWellness} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Inspirational Wellness</h5>
    <p className="card-text">Need a little me-time in your life? Inspirational Wellness prioritizes mental health and drives to spark inspiration in all aspects.</p>
  </div>
  <div className="card-body">
    <a href="https://seanway28.github.io/InterstellarWellness/" className="card-link">Deployed App</a>
    <a href="https://github.com/seanway28/InterstellarWellness" className="card-link">Github</a>
  </div>
</div>

<div className="card space-between" style={{width: '18rem'}}>
  <img src={financeTracker} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Financial Tracker</h5>
    <p className="card-text">Desparate to keep your spending under control, but don't have the time to keep track of your transactions? The Finance Tracker is the app for the job!</p>
  </div>
  <div className="card-body">
    <a href="https://sheltered-meadow-09243.herokuapp.com/" className="card-link">Deployed App</a>
    <a href="https://github.com/EricaBabb/finance-pwa" className="card-link">Github</a>
  </div>
</div>

<div className="card space-between" style={{width: '18rem'}}>
  <img src={workDay} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Work Day Task Handler</h5>
    <p className="card-text">The easy-to-us schedule to stay organized and improve your time management skills!</p>
  </div>
  <div className="card-body">
    <a href="https://ericababb.github.io/work-day-task/" className="card-link">Deployed App</a>
    <a href="https://github.com/EricaBabb/work-day-task" className="card-link">Github</a>
  </div>
</div>

<div className="card space-between" style={{width: '18rem'}}>
  <img src={network} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Social Network</h5>
    <p className="card-text">The perfect platform for connecting with other users and sharing your own thoughts! </p>
  </div>
  <div className="card-body">
    <a href="https://drive.google.com/file/d/16DHD4bXFLz3XNiB7aXcXyPTqxpks3OwX/view" className="card-link">Deployed Walkthrough</a>
    <a href="https://github.com/EricaBabb/social-network" className="card-link">Github</a>
  </div>
</div>

<div className="card space-between" style={{width: '18rem'}}>
  <img src={readMe} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">ReadMe Generator</h5>
    <p className="card-text">Growing tired of repetitive readmes? Save the time and energy with this generator!</p>
  </div>
  <div className="card-body">
    <a href="https://drive.google.com/file/d/10tdmnpAaiDEpJjjIang5QIU6oHUAbf18/view (Links to an external site.)" className="card-link">Deployed Walkthrough</a>
    <a href="https://github.com/EricaBabb/README-Generator" className="card-link">Github</a>
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
          <input type="text" defaultValue={name} onBlur={handleChange} className="form-control" id="exampleInputName"/>
        </div>
        <div className=".form-floating  mb-3">
          <label for="exampleInputMessage" className="form-label">Message</label>
          <input type="text" className="form-control message-control" name="message" id="exampleInputMessage" defaultValue={message} onBlur={handleChange}/>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" className="btn my-btn">Submit</button>
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
