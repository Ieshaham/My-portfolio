import React from 'react';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const resumeUrl = "https://firebasestorage.googleapis.com/v0/b/contact-form-portfolio-ed2e5.appspot.com/o/Tech%20resume%20'25%20(1).docx.pdf?alt=media";
  
  return (
    <div className='navbar'>
      <nav className="navbar">
        <a className="navbar-brand"  >
        <FontAwesomeIcon icon={faLaptopCode} />
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
          <a className="nav-link" onClick={() => handleScroll('scrollspyHeading1')} href="#scrollspyHeading2">
              About
            </a>
          </li>
          <li className="nav-item">
          <a className="nav-link"  href={resumeUrl }target="_blank" rel="noopener noreferrer">
    Resume
  </a>
</li>

          <li className="nav-item">
            <a className="nav-link" onClick={() => handleScroll('scrollspyHeading2')} href="#scrollspyHeading4">
              Contact
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Projects
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" onClick={() => handleScroll('scrollspyHeading3')} href="#scrollspyHeading3">
                  Travel Hawk
                </a>
              </li>
              {/* <li>
                <a className="dropdown-item" onClick={() => handleScroll('scrollspyHeading4')} href="#scrollspyHeading3">
                  E-Portfolio
                </a>
              </li>
              
              <li>
                <a className="dropdown-item" onClick={() => handleScroll('scrollspyHeading5')} href="#scrollspyHeading3">
                  SoulSupport
                </a>
              </li> */}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
