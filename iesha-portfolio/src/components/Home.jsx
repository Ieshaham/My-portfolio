// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='left-box'>
        <div className='page-wording'>
          <h2 className='name'>Iesha Ham</h2>
          <p className='slogan'>
            Hello, I'm a software engineer that<br />
            specializes in transforming ideas<br />
            into innovative solutions.
          </p>
          <div className='button-container'>
            <button className='resume'>Resume</button>
            <Link to="/contact" className='contact'>Contact</Link>  
          </div>
        </div>
      </div>
      {/* Styling for the arrow icon */}
      <div className='arrow-container'>
        {/* <FontAwesomeIcon icon={faArrowDown} className='arrow-icon' /> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
</svg>
      </div>
    </div>
  );
};

export default Home;
