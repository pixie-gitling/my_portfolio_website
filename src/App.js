import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './Navbar';
import Showcase from './Showcase';
import Summary from './Summary';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Skills from './Skills';
import Contact from './Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const mainElement = document.getElementById('main');
    if (mainElement) {
      mainElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <header>
          <div className="container">
            <div id="branding" className="flex">
              <h1>Kirandeep</h1>
              <p>Web Developer</p>
            </div>
            <NavBar />
          </div>
        </header>

        <Showcase />

        <section id="main" className="container">
          <Routes>
            <Route path="/" element={<Summary />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </section>

        <footer>
          <div className="container">
            <p>&copy; 2024 Kirandeep</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
