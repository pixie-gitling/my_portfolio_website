import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/summary"><i className="fas fa-user"></i> Summary</Link></li>
        <li><Link to="/experience"><i className="fas fa-briefcase"></i> Experience</Link></li>
        <li><Link to="/projects"><i className="fas fa-project-diagram"></i> Projects</Link></li>
        <li><Link to="/education"><i className="fas fa-graduation-cap"></i> Education</Link></li>
        <li><Link to="/skills"><i className="fas fa-tools"></i> Skills</Link></li>
        <li><Link to="/contact"><i className="fas fa-envelope"></i> Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
