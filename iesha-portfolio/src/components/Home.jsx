import React from 'react';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';
import ScrollToTopButton from './ScrollToTop';
import LavaLampBackground from './LavaLampBackground'; // Ensure this import is correct

const Home = () => {
  return (
    <div className='home-container'>
      <navbar />

      {/* Add the LavaLampBackground component */}
      <LavaLampBackground />

      <div className="page-content" style={{ position: 'relative' }}>
        <h4 id="scrollspyHeading1"></h4>
        <div className='page-wording'>
          <p className='heading'>Hello, I'm </p>
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