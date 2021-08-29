import React from 'react';
import garden from '../../../assets/images/garden.jpg';
import face from '../../assets/images/face.jpg';
import rollerskate from '../../assets/images/rollerskate.jpg';


const About = () => {
  return (
     <section>
<div className="body-text">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, esse? Nihil minima harum sint animi, ab natus consequatur nam iusto omnis quisquam. Aliquid, ex magni exercitationem voluptatibus deleniti iste doloremque.</p>
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
