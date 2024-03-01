import React from 'react';
import {faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="icon-container">
        <a href="https://www.linkedin.com/in/iesha-ham/" target='_blank' rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '30px' , color: '#695a7b'}}  />
        </a>
        <a href="https://github.com/Ieshaham" target='_blank' rel="noopener noreferrer">
         <FontAwesomeIcon icon={faGithub} style={{color: '#695a7b'}} />
        </a>
        </div>
        <div className="text-container">
        &copy; Iesha Ham 2024. All Rights Reserved.  
        </div>
      </div>
    </footer>
  );
};

export default Footer;
