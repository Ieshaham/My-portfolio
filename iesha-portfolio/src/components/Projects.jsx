import React, { useEffect, useState } from 'react';
import { faHtml5, faCss3, faJs, faReact, faNodeJs, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TravelHawkDetails from './TravelHawkDetails';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const [isFirstProjectVisible, setFirstProjectVisible] = useState(false);
  const [isSecondProjectVisible, setSecondProjectVisible] = useState(false);
  const [isThirdProjectVisible, setThirdProjectVisible] = useState(false);
  
  const navigate = useNavigate(); // Initialize useNavigate

  const handleTravelHawkDetailsClick = () => {
    navigate('/TravelHawkDetails'); // Navigate programmatically
  };

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setFirstProjectVisible(true);
    }, 500);

    const timeout2 = setTimeout(() => {
      setSecondProjectVisible(true);
    }, 1000);

    const timeout3 = setTimeout(() => {
      setThirdProjectVisible(true);
    }, 1000);

 
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
     
    };
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className={`col ${isFirstProjectVisible ? 'visible' : 'hidden'}`}>
  <div className="card project-card">
    <div className="image-container">
      <img src={process.env.PUBLIC_URL + '/project1.png'} alt="Voyage-Hawk" className="project-image" />
      <div className="overlay">
        <button className="view-details-button" onClick={handleTravelHawkDetailsClick}>
          View Details
        </button>
      </div>
    </div>
  </div>

</div>

{/* Second Project */}
  <div className={`col ${isSecondProjectVisible ? 'visible' : 'hidden'}`}>
    <div className="card project-card">
      <div className="image-container">
        <img src={process.env.PUBLIC_URL + '/project2.png'} alt="Chef Zuri" className="project-image" />
        <div className="overlay">
          <button className="view-details-button" onClick={() => navigate('/ChefZuriDetails')}>
            View Details
          </button>
        </div>
      </div>
    </div>
  </div>

  <div className={`col ${isThirdProjectVisible ? 'visible' : 'hidden'}`}>
    <div className="card project-card">
      <div className="image-container">
        <img src={process.env.PUBLIC_URL + '/project3.png'} alt="AI Receipt Analyzer" className="project-image" />
        <div className="overlay">
          <button className="view-details-button" onClick={() => navigate('/ReceiptAnalyzer')}>
            View Details
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default Projects;
