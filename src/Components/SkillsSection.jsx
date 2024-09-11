// src/components/SkillsSection.jsx
import React from 'react';
import '../style.css/SkillsSection.css'

const SkillsSection = () => {
  const skills = ['React', 'Node.js', 'JavaScript', 'CSS', 'HTML'];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <ul>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </section>
  );
};

export default SkillsSection;
