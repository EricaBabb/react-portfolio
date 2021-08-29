import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';


const About = () => {
  return (
     <section>
<div class="body-text">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, esse? Nihil minima harum sint animi, ab natus consequatur nam iusto omnis quisquam. Aliquid, ex magni exercitationem voluptatibus deleniti iste doloremque.</p>
        </div>

    <div class="row justify-content-center mx-2">
            <div class="card col-4 my-3 p-0 no-border">
                <img src="./images/garden.jpg" alt=""/>
            </div>
            <div class="card col-4 my-3 p-0 no-border">
               <img src="./images/face.jpg" alt=""/>
            </div>
            <div class="card col-4 my-3 p-0 no-border">
               <img src="./images/rollerskate.jpg" alt=""/>
            </div>   
    </div>
     </section>
    
  );
}

export default About;
