export interface Experience {
  id: string;
  role: string;
  company: string;
  type: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  clients?: string[];
}
