import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './components/About';
import ContactForm from './components/Contact';
import Works from './components/Works';
import Resume from './components/Resume';

const Main = () => {
  return (
    <Switch>
    <Route exact path="/" component={About}>
      <About />
    </Route>
    <Route exact path="/contact" component={ContactForm}>
      <ContactForm />
    </Route>
    <Route exact path="/resume" component={Resume}>
      <Resume />
    </Route>
    <Route exact path="/works" component={Works}>
      <Works />
    </Route>
  </Switch>
  );
}

export default Main;