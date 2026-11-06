export interface Project {
  id: string;
  title: string;
  subtitle: string;
  client?: string;
  deployment?: string;
  problem: string;
  architecture: string;
  engineering: string[];
  keySystems: string[];
  technologies: string[];
  link?: string;
  category: 'Industrial & Automation' | 'AI / GenAI' | 'Full Stack & Enterprise' | 'Developer Tools & Systems' | 'Backend & APIs' | 'Real-time / Systems' | 'Full Stack';
}
