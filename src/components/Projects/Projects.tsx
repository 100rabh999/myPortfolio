import React, { useState, useEffect, useRef } from 'react';
import { projects } from '../../data/projects';
import { MapPin, Building2 } from 'lucide-react';
import './Projects.css';

export const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Industrial & Automation',
    'AI / GenAI',
    'Full Stack & Enterprise',
    'Developer Tools & Systems'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.05 }
    );

    const elements = containerRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selectedCategory]);

  return (
    <section id="projects" className="section projects-section" ref={containerRef}>
      <div className="container">
        <div className="projects-header-wrapper">
          <h2 className="section-title mono reveal">Client Solutions &amp; Featured Projects</h2>
          <p className="projects-section-subtitle reveal">
            Selected industrial deployments, Generative AI engines, and enterprise software systems engineered for scale.
          </p>

          <div className="category-filter-bar reveal mono">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat} {cat === 'All' ? `(${projects.length})` : `(${projects.filter(p => p.category === cat).length})`}
              </button>
            ))}
          </div>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <article key={project.id} className="project-card reveal" style={{ transitionDelay: `${(index % 4) * 80}ms` }}>
              <div className="project-content-wrapper">
                <div className="project-header">
                  <div className="project-meta-row">
                    <span className="project-category mono">{project.category}</span>
                    {project.client && (
                      <span className="project-client-badge mono">
                        <Building2 size={13} style={{ display: 'inline', marginRight: '4px' }} />
                        Client: <strong>{project.client}</strong>
                      </span>
                    )}
                  </div>
                  
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>

                  {project.deployment && (
                    <div className="project-deployment-info mono">
                      <MapPin size={13} className="deployment-pin" />
                      <span>{project.deployment}</span>
                    </div>
                  )}
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
                    <span className="tech-stack-prefix mono">&gt;_ Stack: </span>
                    {project.technologies.join(' · ')}
                  </div>
                  {project.link && (
                    <a href={project.link} className="btn-view" target="_blank" rel="noopener noreferrer">
                      [EXECUTE]
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
