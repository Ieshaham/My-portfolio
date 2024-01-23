import React, { useEffect, useState } from 'react';

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
    
    <div>
      
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
                <div className='application'>HTML/CSS </div>  
                <div className='application'>JavaScript</div>
                <div className='application'>React</div>
                <div className='application'>Google API</div>
                <div className='application'>Node.js</div>
                <div className='application'>Firebase</div>
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
