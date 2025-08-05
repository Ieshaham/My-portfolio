import React, { useEffect } from 'react';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  // Handle hash navigation when page loads
  useEffect(() => {
    const hash = window.location.hash.slice(1); // Remove the #
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure page is loaded
    }
  }, []);

  const handleScroll = (id) => {
    // Check if we're on the home page
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
      // We're on home page, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // We're on a different page, navigate to home first, then scroll
      window.location.href = `/#${id}`;
    }
  };

  const resumeUrl = "https://firebasestorage.googleapis.com/v0/b/contact-form-portfolio-ed2e5.appspot.com/o/Tech%20resume%20'25%20(1).docx.pdf?alt=media";
  
  return (
    <div className='navbar'>
      <nav className="navbar">
        <a className="navbar-brand" href='./' >
        <FontAwesomeIcon icon={faLaptopCode} />
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
          <a className="nav-link" onClick={() => handleScroll('scrollspyHeading1')} href="#scrollspyHeading2">
              About
            </a>
          </li>
          <li className="nav-item">
          <a className="nav-link"  href={resumeUrl} target="_blank" rel="noopener noreferrer">
    Resume
  </a>
</li>

          <li className="nav-item">
            <a className="nav-link" onClick={() => handleScroll('scrollspyHeading4')} href="#scrollspyHeading4">
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
                 <a className="dropdown-item" onClick={() => handleScroll('scrollspyHeading3')} href="#scrollspyHeading3">
                  Chef Zuri
                </a>
              </li>
              <li>
                <a className="dropdown-item" onClick={() => handleScroll('scrollspyHeading3')} href="#scrollspyHeading3">
                  AI Receipt Analyzer
                </a>
              </li>
              
              {/* <li>
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