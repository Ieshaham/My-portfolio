import React from 'react';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'; // Corrected import statement
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='navbar'>
      <nav className="navbar">
        <a className="navbar-brand" href="www.google.com">
        <FontAwesomeIcon icon={faLaptopCode} />
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
          <a className="nav-link" onClick={() => handleScroll('scrollspyHeading1')} href="#scrollspyHeading2">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => handleScroll('scrollspyHeading2')} href="#scrollspyHeading2">
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
                  Voyage Hawk
                </a>
              </li>
              <li>
                <a className="dropdown-item" onClick={() => handleScroll('scrollspyHeading4')} href="#scrollspyHeading3">
                  E-Portfolio
                </a>
              </li>
              
              <li>
                <a className="dropdown-item" onClick={() => handleScroll('scrollspyHeading5')} href="#scrollspyHeading3">
                  SoulSupport
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
