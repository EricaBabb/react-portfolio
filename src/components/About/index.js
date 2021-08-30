import React from 'react';
import garden from '../../assets/images/garden.jpg';
import face from '../../assets/images/face.jpg';
import rollerskate from '../../assets/images/rollerskate.jpg';


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
     </section>
    
  );
}

export default About;
