import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Contact() {
  return (
    <div className="info">
      <h2><FontAwesomeIcon icon={faEnvelope} className='icon'></FontAwesomeIcon> Contact Information</h2>
      <p><strong><FontAwesomeIcon icon={faLinkedin} className='icon'></FontAwesomeIcon> LinkedIn Profile:</strong> <a href="https://www.linkedin.com/in/kirandeep-596016215" target="_blank" rel='noreferrer'>kirandeep</a></p>
      <p><strong><FontAwesomeIcon icon={faGithub} className='icon'></FontAwesomeIcon> GitHub Profile:</strong> <a href="https://github.com/pixie-gitling" target="_blank" rel='noreferrer'>pixie-gitling</a></p>
      <p><strong><FontAwesomeIcon icon={faPhone} className='icon'></FontAwesomeIcon> Phone:</strong> 6284506049 </p>
      <p><strong><FontAwesomeIcon icon={faEnvelope} className='icon'></FontAwesomeIcon> Email:</strong> <a href="mailto:deep.kiran6284@gmail.com">deep.kiran6284@gmail.com</a></p>
    </div>
  );
}

export default Contact;