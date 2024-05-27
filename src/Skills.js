import React from 'react';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

function Skills() {
  return (
    <div className="info">
      <h2><FontAwesomeIcon icon={faTools} className='icon'></FontAwesomeIcon> Skills</h2>
      <div className='skills flex'> 
        <h3>Technical Skills</h3>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>ReactJS</p>
        <p>Backend Integration</p>
        <p>REST API</p>
        <p>Postman</p>
        <p>MongoDB</p>
      </div>
      {/* <div className='skills flex'> 
        <h3>Soft Skills</h3>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>ReactJS</p>
        <p>Backend Integration</p>
        <p>REST API</p>
        <p>Postman</p>
        <p>MongoDB</p>
      </div> */}
    </div>
  );
}

export default Skills;
