import type { SkillCategory } from '../types/skill';

export const skills: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'Java', 'SQL', 'Dart', 'HTML', 'CSS']
  },
  {
    id: 'frontend',
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'Vite', 'Tailwind CSS', 'Material UI', 'Bootstrap', 'Responsive Design', 'Component Architecture', 'State Management', 'Canvas UI']
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Laravel', 'REST APIs', 'Backend Architecture', 'Authentication', 'WebSockets', 'Real-time Communication']
  },
  {
    id: 'databases',
    title: 'Databases & ORM',
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Prisma', 'Sequelize']
  },
  {
    id: 'ai-genai',
    title: 'AI / GenAI',
    skills: ['Google Gemini', 'Google GenAI', 'OpenRouter', 'LLM APIs', 'AI Application Development', 'Prompt Engineering', 'Context-Aware AI', 'AI Consultation', 'PDF Intelligence', 'Structured JSON', 'AI Workflow Orchestration']
  },
  {
    id: 'mobile-cloud',
    title: 'Mobile, Cloud & Tools',
    skills: ['Flutter', 'Dart', 'Firebase', 'Oracle Cloud', 'AWS/S3', 'Docker', 'Linux', 'Nginx', 'Chrome Extensions', 'Service Workers', 'Git', 'GitHub']
  }
];
