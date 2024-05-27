import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faProjectDiagram, faGraduationCap, faTools, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/summary"><FontAwesomeIcon icon={faUser} className='icon'></FontAwesomeIcon> Summary</Link></li>
        <li><Link to="/experience"><FontAwesomeIcon icon={faBriefcase} className='icon'></FontAwesomeIcon> Experience</Link></li>
        <li><Link to="/projects"><FontAwesomeIcon icon={faProjectDiagram} className='icon'></FontAwesomeIcon> Projects</Link></li>
        <li><Link to="/education"><FontAwesomeIcon icon={faGraduationCap} className='icon'></FontAwesomeIcon> Education</Link></li>
        <li><Link to="/skills"><FontAwesomeIcon icon={faTools} className='icon'></FontAwesomeIcon>Skills</Link></li>
        <li><Link to="/contact"><FontAwesomeIcon icon={faEnvelope} className='icon'></FontAwesomeIcon> Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
