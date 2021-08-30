import React from 'react';

function Resume() {
  return (
    <section>
     <div className="resume-title">
        <h2>Download my resume:</h2>
    </div>

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
    </section>
  );
}

export default Resume;



