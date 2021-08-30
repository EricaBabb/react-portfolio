import React from 'react';
import butlerBites from '../../assets/images/cake.jpg';
import financeTracker from '../../assets/images/finance.jpeg';
import inspirationalWellness from '../../assets/images/zen.jpeg';

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
          <h5><a href="https://butler-bites.herokuapp.com/">Butler Bites</a></h5>
          <h5><a href="https://github.com/antellitocci/butler-bites">Github</a></h5>
          <p>Overflowing with Butler-commuity recipes, finding the perfect one might be biting off more than you can chew!</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={inspirationalWellness} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5><a href="https://seanway28.github.io/InterstellarWellness/">Inspirational Wellness</a></h5>
          <h5><a href="https://github.com/seanway28/InterstellarWellness">Github</a></h5>
          <p>Need a little me-time in your life? Inspirational Wellness prioritizes mental health and drives to spark inspiration in all aspects. </p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={financeTracker} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
        <h5><a href="https://sheltered-meadow-09243.herokuapp.com/">Finance Tracker</a></h5>
          <h5><a href="https://github.com/EricaBabb/finance-pwa">Github</a></h5>
          <p>Desparate to keep your spending under control, but don't have the time to keep track of your transactions? The Finance Tracker is the app for the job! </p>
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
  </div>
  );
}

export default Works;