// src/components/HeroSection.jsx
import React from 'react';
import '../style.css/HeroSection.css';
import profilePhoto from '../assets/profile-photo.jpg'; // Adjust the path if necessary
import resume from '../assets/resume.pdf'
const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="profile-photo">
        <img src={profilePhoto} alt="Profile" />
      </div>
      <h1>Hi, I'm Adarsh Kumar</h1>
      <p>A Full-Stack Developer passionate about building web applications.</p>
      <div className="button-container">
        <a href="#project" className="btn" id='projects'>See My Work</a>
        <a href={resume} className="btn" download>Download Resume</a> {/* Download Button */}
      </div>
    </section>
  );
};

export default HeroSection;
