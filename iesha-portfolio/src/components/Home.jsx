import React from 'react';
import { Link } from 'react-router-dom';

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
      
      
    </div>
  );
};

export default Home;
