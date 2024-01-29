import React, { useEffect, useState } from 'react';
import { faHtml5,faCss3Alt,faJs,faReact,faNodeJs,faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Projects = () => {
  const [isFirstProjectVisible, setFirstProjectVisible] = useState(false);
  const [isSecondProjectVisible, setSecondProjectVisible] = useState(false);

  useEffect(() => {
    // Use setTimeout to delay the appearance of the second project
    const timeout = setTimeout(() => {
      setFirstProjectVisible(true);
    }, 500); // Adjust the delay time as needed

    // Clean up the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Use setTimeout to delay the appearance of the second project
    const timeout = setTimeout(() => {
      setSecondProjectVisible(true);
    }, 1000); // Adjust the delay time as needed

    // Clean up the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    
    <div className='project1container'>
      
      <div className={`image-grid ${isFirstProjectVisible ? 'show-first' : ''}`}>
        <div className={`first-project ${isFirstProjectVisible ? 'fade-in' : ''}`}>
        
          <img src={process.env.PUBLIC_URL + '/project1.png'} alt="Your Image" className='image1' />

          <div className='project-details'>
          <p className='first-title'><strong>Voyage Hawk</strong></p>
            <p className='voyage-hawk'>A full-stack creation designed to revolutionize travel planning. 
              This application enables users to effortlessly craft travel itineraries and discover new destinations. 
              With a sleek interface and dynamic functionality, Voyage Hawk offers a user-friendly platform for seamless travel exploration.
              </p>

            <div className='project1buttons'>
              <p className='applications-project1'>
                <div className='application'> <FontAwesomeIcon icon={faHtml5} />  </div>  
                <div className='application'><FontAwesomeIcon icon={faJs} /></div>
                <div className='application'><FontAwesomeIcon icon={faReact} /></div>
                <div className='application'><FontAwesomeIcon icon={faGoogle} /></div>
                <div className='application'><FontAwesomeIcon icon={faNodeJs} /></div>
                {/* <div className='application'>Firebase</div> */}
              </p>
            </div>
          </div>
        </div>
        <div className={`second-project ${isSecondProjectVisible ? 'fade-in' : ''}`}>
          <img src={process.env.PUBLIC_URL + '/project1.png'} alt="Your Image" className='image2' />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
