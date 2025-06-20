
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import TravelHawkDetails from './components/TravelHawkDetails';
import ChefZuriDetails from './components/ChefZuriDetails';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/TravelHawkDetails" element={<TravelHawkDetails />} />
          <Route path="/ChefZuriDetails" element={<ChefZuriDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
