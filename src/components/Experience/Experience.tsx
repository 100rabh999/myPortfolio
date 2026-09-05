import React, { useEffect, useRef } from 'react';
import { experiences } from '../../data/experience';
import './Experience.css';

export const Experience: React.FC = () => {
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
    <section id="experience" className="section experience-section" ref={containerRef}>
      <div className="container">
        <h2 className="section-title reveal">Experience</h2>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-item reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="experience-meta">
                <span className="experience-duration mono">{exp.duration}</span>
                <span className="experience-location">{exp.location}</span>
                <span className="experience-type tag">{exp.type}</span>
              </div>
              
              <div className="experience-content">
                <h3 className="experience-role">{exp.role}</h3>
                <h4 className="experience-company">{exp.company}</h4>
                
                <p className="experience-description">{exp.description}</p>
                
                <ul className="experience-achievements">
                  {exp.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                
                <div className="experience-tech">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
