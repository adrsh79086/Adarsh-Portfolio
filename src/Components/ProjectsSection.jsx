// src/components/ProjectsSection.jsx
/*   import React from 'react';
import '../style.css/ProjectsSection.css';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal website to showcase my projects and skills.',
    link: 'https://github.com/johndoe/portfolio'
  },
  {
    title: 'E-commerce Site',
    description: 'A fully functional e-commerce site built with React and Node.js.',
    link: 'https://github.com/johndoe/ecommerce-site'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;  */

import React from 'react';
import '../style.css/ProjectsSection.css';

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website built using React and styled-components.",
    link: "https://github.com/your-portfolio",
  },
  {
    id: 2,
    title: "E-commerce App",
    description: "A simple e-commerce application using React, Node.js, and MongoDB.",
    link: "https://github.com/your-ecommerce-app",
  },
  // Adding new projects
  {
    id: 3,
    title: "Weather App",
    description: "A weather forecasting app using React and OpenWeather API.",
    link: "https://github.com/your-weather-app",
  },
  {
    id: 4,
    title: "Tic Toc Toe",
    description: "A task management tool built with React and Firebase for real-time updates.",
    link: "https://github.com/your-task-manager",
  }
];

const ProjectSection = () => {
  return (
    <section className="project-section" id='projects'>
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;

