import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

function Projects() {
  return (
    <div className="info">
      <h2><FontAwesomeIcon icon={faProjectDiagram} className='icon'></FontAwesomeIcon> Projects</h2>
      <h3>Bug Tracker</h3>
      <p><strong>Mar 2024 - Present</strong></p>
      <p>Associated with National Informatics Centre, Govt of India</p>
      <p>Bug Tracker is a project aimed at revolutionizing bug management processes within software development. Developed using ReactJS, it serves as a comprehensive platform for identifying, tracking, and resolving software bugs efficiently. The project encompasses various components, including a user-friendly interface for bug submission, dashboard analytics for monitoring bug status, and backend integration for data management. By centralizing bug tracking and streamlining communication among developers, Bug Tracker enhances productivity, accelerates bug resolution, and fosters collaboration within development teams.</p>
      {/* Add other projects */}
    </div>
  );
}

export default Projects;