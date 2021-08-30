import React from 'react';
import butlerBites from '../../assets/images/cake.jpg';
import financeTracker from '../../assets/images/finance.jpeg';
import inspirationalWellness from '../../assets/images/zen.jpeg';

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


</div>
  );
}

export default Works;