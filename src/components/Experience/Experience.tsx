import React, { useEffect, useRef } from 'react';
import { experiences } from '../../data/experience';
import { Briefcase } from 'lucide-react';
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
        <h2 className="section-title mono reveal">Professional Experience</h2>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-item reveal" style={{ transitionDelay: `${index * 80}ms` }}>
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

                {exp.clients && exp.clients.length > 0 && (
                  <div className="experience-clients-block">
                    <span className="clients-label mono">
                      <Briefcase size={14} style={{ display: 'inline', marginRight: '6px' }} />
                      Selected Client Engagements:
                    </span>
                    <div className="clients-tags">
                      {exp.clients.map((client, cIdx) => (
                        <span key={cIdx} className="client-badge">{client}</span>
                      ))}
                    </div>
                  </div>
                )}
                
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
