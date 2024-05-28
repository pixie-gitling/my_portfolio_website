import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faProjectDiagram, faGraduationCap, faTools, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  return (
    <nav>
      <ul>
        <li className={activePath === "/" ? "active" : "none"}>
          <Link to="/" onClick={() => setActivePath("/")}>
            <FontAwesomeIcon icon={faUser} className='icon' /> Summary
          </Link>
        </li>
        <li className={activePath === "/experience" ? "active" : "none"}>
          <Link to="/experience" onClick={() => setActivePath("/experience")}>
            <FontAwesomeIcon icon={faBriefcase} className='icon' /> Experience
          </Link>
        </li>
        <li className={activePath === "/projects" ? "active" : "none"}>
          <Link to="/projects" onClick={() => setActivePath("/projects")}>
            <FontAwesomeIcon icon={faProjectDiagram} className='icon' /> Projects
          </Link>
        </li>
        <li className={activePath === "/education" ? "active" : "none"}>
          <Link to="/education" onClick={() => setActivePath("/education")}>
            <FontAwesomeIcon icon={faGraduationCap} className='icon' /> Education
          </Link>
        </li>
        <li className={activePath === "/skills" ? "active" : "none"}>
          <Link to="/skills" onClick={() => setActivePath("/skills")}>
            <FontAwesomeIcon icon={faTools} className='icon' /> Skills
          </Link>
        </li>
        <li className={activePath === "/contact" ? "active" : "none"}>
          <Link to="/contact" onClick={() => setActivePath("/contact")}>
            <FontAwesomeIcon icon={faEnvelope} className='icon' /> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
