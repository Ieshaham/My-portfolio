import React from 'react';
import Contact from './Contact';
import About from './About';
import Projects from './Projects'
import ScrollToTopButton from './ScrollToTop';

const Home = () => {
  return (
    <div className='home-container'>
   <navbar />

      <div className="page-content">
        <h4 id="scrollspyHeading1"></h4>
        <div className='page-wording'>
          <h2 className='name'>Iesha Ham</h2>
          <p className='slogan'>
            Hello, I'm a software engineer that<br />
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
    </div>
  );
};

export default Home;
