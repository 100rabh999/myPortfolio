import React, { useEffect, useRef } from 'react';
import { projects } from '../../data/projects';
import './Projects.css';

export const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="section projects-section" ref={containerRef}>
      <div className="container">
        <h2 className="section-title reveal">Featured Case Studies</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={project.id} className="project-card reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="project-header">
                <span className="project-category mono">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
              </div>
              
              <div className="project-body">
                <div className="project-section">
                  <h4 className="section-label mono">Problem</h4>
                  <p>{project.problem}</p>
                </div>
                
                <div className="project-section">
                  <h4 className="section-label mono">Architecture</h4>
                  <p>{project.architecture}</p>
                </div>
                
                <div className="project-section">
                  <h4 className="section-label mono">Engineering Decisions</h4>
                  <ul className="project-list">
                    {project.engineering.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-section">
                  <h4 className="section-label mono">Key Systems</h4>
                  <div className="systems-tags">
                    {project.keySystems.map((sys, i) => (
                      <span key={i} className="system-tag">{sys}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="project-footer">
                <div className="tech-stack">
                  {project.technologies.join(' · ')}
                </div>
                {project.link && (
                  <a href={project.link} className="btn-view" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
