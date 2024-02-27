import React, { useEffect, useState } from 'react';
import { faHtml5, faCss3, faJs, faReact, faNodeJs, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projects = () => {
  const [isFirstProjectVisible, setFirstProjectVisible] = useState(false);
  const [isSecondProjectVisible, setSecondProjectVisible] = useState(false);
  const [isThirdProjectVisible, setThirdProjectVisible] = useState(false);
  
  
  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setFirstProjectVisible(true);
    }, 500);

    const timeout2 = setTimeout(() => {
      setSecondProjectVisible(true);
    }, 1000);

    const timeout3 = setTimeout(() => {
      setThirdProjectVisible(true);
    }, 1000);

 
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
     
    };
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className={`col ${isFirstProjectVisible ? 'visible' : 'hidden'}`}>
        <div className="card">
          <img src={process.env.PUBLIC_URL + '/project1.png'} alt="Voyage-Hawk" className='image1' />
          <div className="card-body">
            <h5 className="card-title">Voyage Hawk</h5>
            <p className="card-text">A full-stack creation designed to revolutionize travel planning. 
            This application enables users to effortlessly craft travel itineraries and discover new destinations. 
            With a sleek interface and dynamic functionality, Voyage Hawk offers a user-friendly platform for seamless travel exploration.</p>
            <div className='project-buttons'>
              <div className="applications-project1">
                <div className='application'><FontAwesomeIcon icon={faHtml5} /> HTML </div>  
                <div className='application'><FontAwesomeIcon icon={faCss3} />CSS</div>
                <div className='application'><FontAwesomeIcon icon={faJs} />JavaScript</div>
                <div className='application'><FontAwesomeIcon icon={faReact} />React</div>
                <div className='application'><FontAwesomeIcon icon={faGoogle} />GoogleAPI</div>
                <div className='application'> <FontAwesomeIcon icon={faNodeJs} />Node</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`col ${isSecondProjectVisible ? 'visible' : 'hidden'}`}>
        <div className="card">
          <img src={process.env.PUBLIC_URL + '/Screenshot 2024-02-07 185153.png'} alt="Personal Portfolio" className='image2' />
          <div className="card-body">
            <h5 className="card-title">E-Portfolio</h5>
            <p className="card-text">Explore my curated portfolio showcasing achievements in various technology domains. 
            With a polished interface, navigate through projects reflecting my dedication to pioneering solutions in software development and creating user-friendly interfaces.</p>
            <div className='project-buttons'>
              <div className="applications-project2">
                <div className='application'>HTML <FontAwesomeIcon icon={faHtml5} />  </div>  
                <div className='application'>CSS<FontAwesomeIcon icon={faCss3} /></div>
                <div className='application'>JavaScript<FontAwesomeIcon icon={faJs} /></div>
                <div className='application'>React<FontAwesomeIcon icon={faReact} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`col ${isThirdProjectVisible ? 'visible' : 'hidden'}`}>
        <div className="card">
          <img src={process.env.PUBLIC_URL + '/project1.png'} alt="Mental Health Chatbot" className='image1' />
          <div className="card-body">
            <h5 className="card-title">SoulSupport</h5>
            <p className="card-text">A holistic mental health application designed to provide individuals with the support they need during challenging times. 
            With features including a responsive chatbot for immediate assistance, a mood tracker , and curated resources for accessing additional support,
            SoulSupport aims to empower users on their journey towards mental wellness. </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
