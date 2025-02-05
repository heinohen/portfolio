
import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

const projectsData: Project[] = [
  {
    title: "Muffins or Dogs",
    description: "A full-stack web application built using React, Node.js and uses Flask for backend. It is deployed to fly.io, might take time to connect because of the free plan of the system. Contains computer vision model in the backend that predicts if the picture uploaded is of a muffin or a dog",
    technologies: ["React", "Node.js", "Flask", "Jupyter-notebook"],
    githubLink: "https://github.com/heinohen/muffindogs",
    liveLink: "https://muffindogs.fly.dev/"
  },
  {
    title: "Customer project (ongoing)",
    description: "Capstone project for a logistics company to more accurately calculate freight costs. Project is on-going, started January 2025. No links available to public as it is for customer.",
    technologies: ["React", "Node.js","Flask", "Jupyter-notebook"],
    githubLink: "https://github.com/username/project-two",
    liveLink: "https://project-two.com"
  },
  {
    title: "NLP project placeholder",
    description: "TODO",
    technologies: ["Google colab", "Node.js","Flask", "Jupyter-notebook", "Hugging Face"],
    githubLink: "https://github.com/username/project-two",
    liveLink: "https://project-two.com"
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{`Project ${index + 1}: `}{project.title}</h3>
            <ul>
              <li><strong>Description:</strong>{project.description}</li>
              <li><strong>Technologies:</strong> {project.technologies.join(", ")}</li>
              <li><strong>Links</strong>:
                <ul>
                  <li>{project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>)}
                  </li>
                  <li>{project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>)}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
