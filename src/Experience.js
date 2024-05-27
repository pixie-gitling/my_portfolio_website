import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

function Experience() {
  return (
    <div className="info">
      <h2><FontAwesomeIcon icon={faBriefcase} className='icon'></FontAwesomeIcon> Experience</h2>
      <h3>NIC-National Informatics Centre</h3>
      <p><strong>February,2024 - Present</strong></p>
      <p>Currently, I am undertaking an internship at the National Informatics Centre (NIC) in Delhi, where I am spearheading a personal project focused on web development and backend integration. Key highlights of my internship experience include:</p>
      <ul>
        <li>Conceptualizing and developing a web-based Bug Tracker application using ReactJS, HTML, CSS, and JavaScript.</li>
        <li>Designing user-friendly interfaces for bug submission and dashboard analytics, leveraging ReactJS for dynamic data visualization.</li>
        <li>Integrating backend services and RESTful APIs to facilitate seamless communication between frontend and backend components.</li>
        <li>Conducting thorough testing and debugging to ensure the reliability, performance, and usability of the Bug Tracker application.</li>
        <li>Utilizing Postman for API testing and validation, ensuring the accuracy and integrity of data transmission.</li>
        <li>Iterating on the Bug Tracker application based on user feedback, refining features, and optimizing performance.</li>
        <li>Demonstrating strong problem-solving skills and a proactive approach to learning throughout the development process.</li>
      </ul>
      <p>This internship has provided valuable hands-on experience in web development and backend integration, enhancing technical skills and fostering a proactive learning mindset.</p>
    </div>
  );
}

export default Experience;