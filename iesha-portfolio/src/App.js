
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
import ReceiptAnalyzer from './components/ReceiptAnalyzer';
import Quiztopia from './components/Quiztopia'

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
          <Route path="/ReceiptAnalyzer" element={<ReceiptAnalyzer />} />
          <Route path="/Quiztopia" element={<Quiztopia />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
