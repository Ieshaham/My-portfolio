


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

function MyAboutMe() {
  return (
    <div className="about-me-container">
      <h5>Who I am!</h5>
      <div className='about-me-paragraph'>
        <p>
          Hello! I'm Iesha, a recent college graduate with a Bachelor's degree in Psychology. Although my academic journey began in psychology, I discovered my true passion lies in technology, prompting me to return to school for Software Engineering. The dynamic world of coding and the opportunity to create user-friendly web applications have become my driving forces. From concept to implementation, I find joy in crafting seamless and intuitive interfaces.
        </p>
        <p>
          I'm eager to explore roles that challenge me, foster continuous learning, and provide a platform to contribute to innovative projects. If you share a similar passion for technology or have exciting opportunities, I'd love to connect and embark on this journey together.
        </p>
      </div>
    </div>
  );
}

function MySkills() {
  return (
    <div className="skills-container">
      <h5>My Skills</h5>
      <div className='icons'>
        <div className='html translate-infinite'><FontAwesomeIcon icon={faHtml5}  /></div>
        <div className='css translate-infinite'><FontAwesomeIcon icon={faCss3Alt} /></div>
        <div className='javascript translate-infinite'><FontAwesomeIcon icon={faJs} /></div>
        <div className='react translate-infinite'><FontAwesomeIcon icon={faReact} /></div>
        <div className='node translate-infinite'><FontAwesomeIcon icon={faNodeJs} /></div>
      </div>
    </div>
  );
}

function MyEducation() {
  return (
    <div className="education-container">
      <h5>My Education</h5>
      <div className='education'>
        <p className='mdc'>
          <b>Miami-Dade College</b> <br />
          Bachelor's of Science in Information Systems Technology<br />
          Concentration: Software Engineering<br />
          Expected Graduation: December 2025
        </p>
        <p className='FIU'>
          <b>Florida International University</b> <br />
          Bachelor's of Arts in Psychology
        </p>
      </div>
    </div>
  );
}

function MyContent() {
  return (
    <div className="content-container">
      <MyAboutMe />
      <MySkills />
      <MyEducation />
    </div>
  );
}

export default MyContent;


