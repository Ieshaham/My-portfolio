// Example in Projects.js
import React from 'react';

const Projects = () => {
  return (
    <div>
      <div className="image-grid">
        <div className='first-project'>
          <img src={process.env.PUBLIC_URL + '/project1.png'} alt="Your Image" className='image1' />

          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
        </div>
        <div className='second-project'>
          <img src={process.env.PUBLIC_URL + '/project1.png'} alt="Your Image" className='image2' />

          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
