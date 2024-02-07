
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';


const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Function to toggle the visibility of the scroll-to-top button based on the scroll position
  const handleScroll = () => {
    if (window.pageYOffset > 300) { // Adjust this value as needed
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={isVisible ? 'scrollToTopButton show' : 'scrollToTopButton'}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faArrowCircleUp} />
    </div>
  );
};

export default ScrollToTopButton;
