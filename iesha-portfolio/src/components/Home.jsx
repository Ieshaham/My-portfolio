import React from 'react';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';
import ScrollToTopButton from './ScrollToTop';
import FloatingBalloons from './FloatingBalloons';

const Home = () => {
  return (
    <div className='home-container'>
      <navbar />

      {/* Add the FloatingBalloons component */}
      <FloatingBalloons />

      <div className="page-content">
        <h4 id="scrollspyHeading1"></h4>
        <div className='page-wording'>
          <img className='name_icon' src='name_icon.png' alt="Name Icon" />
          <p className='slogan'>
            A software engineer that<br />
            specializes in transforming ideas<br />
            into innovative solutions.
          </p>
        </div>

        <h4 id="scrollspyHeading2"></h4>
        <About />
        <h4 id="scrollspyHeading3">Project Applications</h4>
        <Projects />
        
        <h4 id="scrollspyHeading4"></h4>
        <Contact />
      </div>
      <ScrollToTopButton />
      <footer />
    </div>
  );
};

export default Home;