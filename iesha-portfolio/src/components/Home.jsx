// Home.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  return (
    <div className='home-container'>
      <div className='left-box'>
        <h2>PLACE LOGO</h2>
        <h2 className='name'>Iesha Ham</h2>
        <p className='slogan'>
          Hello, I'm a software engineer that<br />
          specializes in transforming ideas<br />
          into innovative solutions.
        </p> 
        <div className='button-container'>
          <button className='resume'>Resume</button>
          <button className='contact'>Contact</button>
        </div>
      </div>
      {/* Styling for the arrow icon */}
      <div className='arrow-container'>
        <FontAwesomeIcon icon={faArrowDown} className='arrow-icon' />
      </div>
    </div>
  );
};

export default Home;
