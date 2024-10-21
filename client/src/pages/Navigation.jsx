import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Galaxy from './Galaxy.jsx'; // import your components
import About from './About.jsx';
import Satelite from './Satelite.jsx';
import Technology from './Technology.jsx';

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/galaxy" element={<Galaxy />} />
        <Route path="/about" element={<About />} />
        <Route path="/satelite" element={<Satelite />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
