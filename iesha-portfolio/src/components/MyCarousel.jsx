import React, { useState } from 'react';
import { faHtml5,faCss3Alt,faJs,faReact,faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';


function MyCarousel() {

  return (
    <div>
<div id="carouselExampleIndicators" className="carousel slide">
<div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="carousel-caption d-none d-md-block">
        <h5>Who I am!</h5>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
            software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
    <div className="carousel-item">
    <div className="carousel-caption d-none d-md-block">
        <h5>My skills</h5>
        <div className='icons'>
  <div className='html translate-infinite'><FontAwesomeIcon icon={faHtml5}  /></div>
  <div className='css translate-infinite'><FontAwesomeIcon icon={faCss3Alt} /></div>
  <div className='javascript translate-infinite'><FontAwesomeIcon icon={faJs} /></div>
  <div className='react translate-infinite'><FontAwesomeIcon icon={faReact} /></div>
  <div className='node translate-infinite'><FontAwesomeIcon icon={faNodeJs} /></div>
</div>
      </div>
    </div>
    <div className="carousel-item">
    <div className="carousel-caption d-none d-md-block">
        <h5>My Education</h5>
        <div className='education'>
        <p className='mdc'> <b>Miami-Dade College</b> <br />
          Bachelor's of Science in Information Systems Technology<br />
          Concentration: Software Engineering<br />
          Expexted Graduation : December 2025<br />
        </p>
        <p className='FIU'> <b>Florida International University</b> <br />
        Bachelor's of Arts in Psychology<br />
        </p>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
      );
    }
    
    export default MyCarousel;

    