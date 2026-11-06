import type { SkillCategory } from '../types/skill';

export const skills: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'Java', 'SQL', 'Dart', 'HTML5', 'CSS3']
  },
  {
    id: 'ai-genai',
    title: 'AI & Generative AI',
    skills: [
      'Google Gemini',
      'Google GenAI',
      'OpenRouter',
      'LLM Integration',
      'Prompt Engineering',
      'Context-Aware AI',
      'AI Document Processing',
      'PDF Intelligence',
      'Structured JSON Generation',
      'AI Workflow Orchestration',
      'AI Image Generation'
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    skills: [
      'React.js',
      'Next.js',
      'Vite',
      'Flutter',
      'Tailwind CSS',
      'Material UI',
      'Bootstrap',
      'Responsive Web Design',
      'Canvas UI & Serialization'
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    skills: [
      'Node.js',
      'Express.js',
      'Laravel',
      'RESTful APIs',
      'Backend Architecture',
      'API Integration',
      'Authentication & Authorization',
      'WebSockets & Real-Time'
    ]
  },
  {
    id: 'databases',
    title: 'Databases & ORM',
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Prisma', 'Sequelize']
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    skills: ['Flutter', 'Dart', 'Cross-Platform Mobile Apps', 'Mobile API Integration', 'Offline Data Storage']
  },
  {
    id: 'industrial-hardware',
    title: 'Industrial & Hardware Integration',
    skills: [
      'Dimension & Weighing Systems (DWS)',
      'Barcode Scanner Integration',
      'Pick-to-Light Systems (PTL)',
      'Camera Integration',
      'X-ray Image Integration',
      'FTP Image Pipeline',
      'Local Database Systems',
      'Cloud API Integration',
      'WebSockets Telemetry'
    ]
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & Deployment',
    skills: ['Firebase', 'Oracle Cloud', 'AWS / S3', 'Linux', 'Nginx', 'Docker', 'Git', 'GitHub', 'Cloud Deployment']
  },
  {
    id: 'consulting-sdlc',
    title: 'Software Engineering & Consulting',
    skills: [
      'System Architecture',
      'Database Design',
      'Full SDLC',
      'Requirement Analysis',
      'Technical Consultation',
      'Project Estimation',
      'Direct Client Communication',
      'Production Deployment',
      'Testing & QA',
      'Production Troubleshooting & Maintenance'
    ]
  }
];
