import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Summary() {
  return (
    <div className="info">
      <h2><FontAwesomeIcon icon={faUser} className='icon'></FontAwesomeIcon> Professional Summary</h2>
      <p>Driven and enthusiastic web developer with a strong foundation in frontend and backend technologies. Currently, I am interning at the National Informatics Centre (NIC) in Delhi, where I am leading the development of a web-based Bug Tracker application as part of my final year college project. With a Bachelor's degree in Information Technology and a current CGPA of 7.96, I have acquired solid technical skills in HTML, CSS, JavaScript, and ReactJS.</p>

      <p>Throughout my academic and professional journey, I have demonstrated a passion for leveraging technology to solve real-world problems. My internship at NIC has provided me with invaluable hands-on experience in both individual projects and collaborative settings. As the sole developer of the Bug Tracker project, I am responsible for the end-to-end development process, including frontend design, backend integration, and database management.</p>
      
      <p>My key strengths lie in my ability to translate complex ideas into user-friendly interfaces and my commitment to delivering high-quality, efficient solutions. I thrive in dynamic environments where I can continuously learn and adapt to new challenges. Looking ahead, I am eager to explore opportunities that allow me to further expand my skills, contribute to meaningful projects, and make a positive impact in the field of web development.</p>
    </div>
  );
}

export default Summary;
