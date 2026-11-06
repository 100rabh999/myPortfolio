import React, { useEffect, useRef } from 'react';
import { 
  Cpu, 
  Layers, 
  Terminal, 
  Wrench, 
  Globe2, 
  Sparkles, 
  Boxes,
  Building2,
  GraduationCap,
  Activity
} from 'lucide-react';
import './About.css';

export const About: React.FC = () => {
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

  const strengths = [
    {
      icon: <Terminal size={20} className="strength-icon text-cyan" />,
      title: 'End-to-End Project Ownership',
      desc: 'From initial business requirements and client consultation to production rollout, hardware integration, and continuous support.'
    },
    {
      icon: <Sparkles size={20} className="strength-icon text-violet" />,
      title: 'AI & GenAI Product Engineering',
      desc: 'Architecting LLM pipelines (Gemini/OpenRouter), living context engines, document intelligence, and deterministic structured JSON output.'
    },
    {
      icon: <Cpu size={20} className="strength-icon text-matrix" />,
      title: 'Hardware & Industrial Systems',
      desc: 'Integrating Dynamic DWS, barcode scanners, cameras, X-ray imaging, and Pick-to-Light controllers with local-to-cloud telemetry.'
    },
    {
      icon: <Layers size={20} className="strength-icon text-blue" />,
      title: 'Solution Architecture',
      desc: 'Evaluating business workflows to engineer resilient relational schemas, high-throughput RESTful APIs, and cross-platform frontends.'
    },
    {
      icon: <Globe2 size={20} className="strength-icon text-cyan" />,
      title: 'Multi-Location Deployments',
      desc: 'Successfully deploying industrial software across production hubs in Mumbai, Bengaluru, Kolkata, Lucknow, Rohtak, and Gujarat.'
    },
    {
      icon: <Wrench size={20} className="strength-icon text-violet" />,
      title: 'Business Automation & Support',
      desc: 'Eliminating manual operational bottlenecks with high-throughput automation systems, client training, and long-term maintenance.'
    }
  ];

  return (
    <section id="about" className="section about-section" ref={containerRef}>
      <div className="container">
        <h2 className="section-title mono reveal">About &amp; Overview</h2>
        
        <div className="about-content reveal">
          {/* Top 2-Column Split: Narrative on Left, Impact Profile on Right */}
          <div className="about-overview-grid">
            <div className="about-narrative">
              <p className="lead-text">
                Architecting production-ready software, AI intelligence, and industrial automation from idea to multi-location deployment.
              </p>
              
              <div className="text-body">
                <p>
                  I am a <strong>Senior Software Engineer</strong> specializing in full-stack development, AI-powered applications, enterprise software, and industrial automation systems. I have a proven track record of independently managing direct client engagements—spanning technical consultation, project estimation, solution architecture, software development, hardware interfacing, and post-launch maintenance.
                </p>
                
                <p>
                  My hands-on experience includes mission-critical industrial solutions involving <strong>Dynamic Dimension &amp; Weighing Systems (DWS)</strong>, high-speed barcode scanners, cameras, X-ray image integration, <strong>Pick-to-Light (PTL)</strong> warehouse automation, local database synchronization, and cloud API connectivity for enterprise logistics leaders like <strong>Shadowfax</strong>, <strong>Wabtec Corporation</strong>, and <strong>KAMA Ayurveda</strong>.
                </p>

                <blockquote className="philosophy-quote">
                  "Understand the business problem → architect the system → build the product → integrate the hardware/AI → optimize → ship."
                </blockquote>
              </div>
            </div>

            {/* Right-Side Highlights Card to fill the horizontal space */}
            <div className="about-highlights-card">
              <div className="terminal-header mono">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
                <span className="terminal-title">system_overview.json</span>
              </div>

              <div className="highlights-body mono">
                <div className="highlight-item">
                  <div className="highlight-icon-box text-cyan">
                    <Activity size={18} />
                  </div>
                  <div>
                    <span className="highlight-label">Current Position</span>
                    <span className="highlight-val">Senior Software Engineer @ Techeeez</span>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon-box text-violet">
                    <Building2 size={18} />
                  </div>
                  <div>
                    <span className="highlight-label">Consulting &amp; Enterprise Clients</span>
                    <span className="highlight-val">Shadowfax · Wabtec · KAMA Ayurveda · Delite · Sidhicon · Mascon</span>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon-box text-matrix">
                    <Globe2 size={18} />
                  </div>
                  <div>
                    <span className="highlight-label">Industrial Production Deployments</span>
                    <span className="highlight-val">Mumbai · Bengaluru · Kolkata · Lucknow · Rohtak · Coimbatore · Gujarat</span>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon-box text-blue">
                    <Cpu size={18} />
                  </div>
                  <div>
                    <span className="highlight-label">Hardware &amp; IoT Stack</span>
                    <span className="highlight-val">Dynamic DWS · Pick-to-Light · Scanners · Cameras · X-Ray · WebSockets</span>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon-box text-cyan">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <span className="highlight-label">AI &amp; Generative Engineering</span>
                    <span className="highlight-val">Google Gemini · OpenRouter · Living Context · Structured JSON Extraction</span>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon-box text-matrix">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <span className="highlight-label">Academic Distinction</span>
                    <span className="highlight-val">M.Sc. CS (9.8 CGPA) · B.Sc. CS (9.6 CGPA) · 12th (96%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full-Width Core Professional Strengths Grid */}
          <div className="strengths-section-wrapper">
            <h3 className="sub-heading mono">Core Professional Strengths</h3>
            
            <div className="strengths-grid">
              {strengths.map((item, index) => (
                <div key={index} className="strength-card">
                  <div className="strength-header">
                    {item.icon}
                    <h4 className="strength-title">{item.title}</h4>
                  </div>
                  <p className="strength-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Full-Width Focus Container */}
          <div className="focus-container">
            <h4 className="focus-title mono">
              <Boxes size={18} className="text-cyan" style={{ display: 'inline', marginRight: '8px' }} />
              Professional Focus Areas:
            </h4>
            <div className="focus-tags">
              <span className="focus-pill">Senior Software Engineering</span>
              <span className="focus-pill">Full-Stack Development</span>
              <span className="focus-pill">AI/GenAI Engineering</span>
              <span className="focus-pill">Industrial Automation</span>
              <span className="focus-pill">Enterprise Software</span>
              <span className="focus-pill">Solution Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
