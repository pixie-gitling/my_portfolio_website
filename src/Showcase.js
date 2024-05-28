import React from 'react';
// import profileImage from './profileImage.png'; 

function Showcase() {
  return (
    <section id="showcase" className='flex'>
        <div className="container image">
            <img src={`${process.env.PUBLIC_URL}/profileImage.png`} alt="Profile" className="profile-image" />
        </div>
        <div className="container text">
            <h1>Welcome to My Profile</h1>
            <p>Aspiring Web Developer | Intern at NIC Delhi | Final Year College</p>
        </div>
    </section>
  );
}

export default Showcase;