import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Contact from './Contact';
import About from './About';
import Projects from './Projects'

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
          <div className='button-container'>
            <button className='resume'>Resume</button>
            <Link to="/contact" className='contact'>Contact</Link>
          </div>
        </div>

        <h4 id="scrollspyHeading2"></h4>
        <About />
        <h4 id="scrollspyHeading3">Project Applications</h4>
        <Projects />
        
        <h4 id="scrollspyHeading5"></h4>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
