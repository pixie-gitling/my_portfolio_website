import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function Education() {
  return (
    <div className="info">
      <h2><FontAwesomeIcon icon={faGraduationCap} className='icon'></FontAwesomeIcon> Education</h2>
      <h3>RBIENT - Rayat Bahra Institute of Engineering and Nano Technology</h3>
      <p>BTech (Information Technology)</p>
      <p>Jul 2020 - Jul 2024</p>
      <p>Grade: 7.96 (current CGPA)</p>
      {/* <br/> */}
      <h3>FCS Adarsh Sen. Sec. School</h3>
      <p>12th (Non Medical)</p>
      <p>Apr 2019 - Mar 2020</p>
      <p>Grade: 71%</p>
      {/* <br/> */}
      <h3>Sant Baba Hari Singh Model School</h3>
      <p>10th</p>
      <p>Mar 2017 - Feb 2018</p>
      <p>Grade: 88%</p>
    </div>
  );
}

export default Education;
