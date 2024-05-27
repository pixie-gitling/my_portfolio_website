import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faProjectDiagram, faGraduationCap, faTools, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import NavBar from './Navbar';
import Showcase from './Showcase';
import Summary from './Summary';
// Import other components

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div className="container">
            <div id="branding">
              <h1>Kirandeep</h1>
              <p>Web Developer</p>
            </div>
            <NavBar />
          </div>
        </header>

        <Showcase />

        <section id="main" className="container">
          <Switch>
            <Route path="/summary" component={Summary} />
            {/* Add routes for other sections */}
          </Switch>
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