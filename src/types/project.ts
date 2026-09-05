export interface Project {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  architecture: string;
  engineering: string[];
  keySystems: string[];
  technologies: string[];
  link?: string;
  category: 'AI / GenAI' | 'Full Stack' | 'Backend & APIs' | 'Real-time / Systems' | 'Developer Tools' | 'Other';
}
