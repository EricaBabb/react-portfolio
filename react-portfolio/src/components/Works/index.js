import React from 'react';
import butlerBites from '../../assets/images/cake.jpg';
import financeTracker from '../../assets/images/finance.jpeg';
import inspirationalWellness from '../../assets/images/zen.jpeg';

function Works() {
  return ( 
    <div id="carouselExampleCaptions" classNameName="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={butlerBites} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Butler Bites</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={inspirationalWellness} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Inspirational Wellness</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={financeTracker} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button classNameName="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span classNameName="carousel-control-prev-icon" aria-hidden="true"></span>
      <span classNameName="visually-hidden">Previous</span>
    </button>
    <button classNameName="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span classNameName="carousel-control-next-icon" aria-hidden="true"></span>
      <span classNameName="visually-hidden">Next</span>
    </button>
  </div>
  );
}

export default Works;