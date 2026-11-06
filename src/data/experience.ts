import type { Experience } from '../types/experience';

export const experiences: Experience[] = [
  {
    id: 'techeeez',
    role: 'Senior Software Engineer',
    company: 'Techeeez',
    type: 'Full-time',
    duration: 'June 2026 – Present',
    location: 'Goregaon, Maharashtra · Hybrid',
    description: 'Design and develop scalable, production-ready web and mobile applications across the complete software development lifecycle.',
    achievements: [
      'Contribute across the complete SDLC, including requirements analysis, system architecture, implementation, automated testing, deployment, and ongoing maintenance.',
      'Develop robust backend services, REST APIs, and database-driven applications with high data integrity and performance.',
      'Build responsive, intuitive frontend user interfaces and maintainable, modular application architectures.',
      'Work with a modern tech stack encompassing Node.js, React, Next.js, Flutter, PostgreSQL, MySQL, Prisma, and Firebase.'
    ],
    technologies: ['Node.js', 'React', 'Next.js', 'Flutter', 'PostgreSQL', 'MySQL', 'Prisma', 'Firebase']
  },
  {
    id: 'independent-consultant',
    role: 'Independent Software Consultant & Full-Stack Developer',
    company: 'Independent Client Engagements',
    type: 'Consultant / Contract',
    duration: '2025 – Present',
    location: 'Maharashtra, India · Multi-Location Deployments',
    description: 'Independently manage direct client engagements end-to-end, delivering tailored enterprise software and industrial automation systems.',
    achievements: [
      'Independently manage client meetings, requirement gathering, technical consultation, project estimation, quotation preparation, and scope negotiation.',
      'Analyze business workflows and determine optimal technology stacks, system architectures, database schemas, and API integration paths.',
      'Design, engineer, and deploy hardware-integrated industrial applications (DWS, Pick-to-Light, scanners, cameras, and local database synchronizations).',
      'Manage end-to-end delivery: custom software development, hardware interfacing, multi-location installations, production rollouts, client training, and 24/7 technical support.'
    ],
    technologies: ['Industrial Hardware', 'Pick-to-Light', 'DWS Systems', 'Barcode Scanners', 'Cameras', 'React', 'Node.js', 'Laravel', 'Python', 'SQL'],
    clients: [
      'Shadowfax',
      'Wabtec Corporation',
      'KAMA Ayurveda',
      'Delite Engineering Pvt. Ltd.',
      'Sidhicon Automation Pvt. Ltd.',
      'Mascon Techneeds',
      'Anokhee Creations',
      'Redwings Logistics'
    ]
  },
  {
    id: 'aman-satija',
    role: 'Junior Software Engineer',
    company: 'Aman Satija and Co.',
    type: 'Full-time',
    duration: 'October 2022 – May 2026',
    location: 'Goregaon, Maharashtra · Hybrid',
    description: 'Engineered frontend and backend components for production web applications and database-driven business systems.',
    achievements: [
      'Developed frontend and backend components for web applications using JavaScript, Python, PHP, and SQL.',
      'Architected backend functionality, database-driven workflows, and third-party application integrations.',
      'Developed core application features using Laravel and Node.js frameworks.',
      'Contributed to code debugging, ongoing maintenance, and production implementation of robust software solutions.'
    ],
    technologies: ['JavaScript', 'Python', 'PHP', 'SQL', 'Laravel', 'Node.js']
  },
  {
    id: 'codsoft',
    role: 'Machine Learning Intern',
    company: 'CodSoft',
    type: 'Internship',
    duration: 'September 2023 – October 2023',
    location: 'Remote',
    description: 'Worked on Python-based machine learning development tasks, data preprocessing, and analytical visualization.',
    achievements: [
      'Implemented Python-based machine learning workflows and exploratory data analysis.',
      'Applied feature engineering, data cleaning, and visualization techniques for model evaluation.'
    ],
    technologies: ['Python', 'Machine Learning', 'Data Processing', 'Data Visualization']
  },
  {
    id: 'writejet',
    role: 'Web Developer',
    company: 'WriteJet',
    type: 'Internship / Contract',
    duration: 'May 2023 – June 2023',
    location: 'Remote',
    description: 'Contributed to the frontend engineering of an educational technology (EdTech) web platform.',
    achievements: [
      'Engineered clean, responsive web interfaces using HTML, CSS, and Bootstrap.',
      'Collaborated on improving UX performance and cross-device compatibility.'
    ],
    technologies: ['HTML5', 'CSS3', 'Bootstrap', 'Responsive Web Design']
  },
  {
    id: 'sdac',
    role: 'Java Web Developer',
    company: 'SDAC Infotech',
    type: 'Internship',
    duration: 'April 2023 – May 2023',
    location: 'Borivali, Maharashtra · On-site',
    description: 'Contributed to an enterprise Product Analysis System and database integration.',
    achievements: [
      'Developed Java-based web application backend components and integrated MySQL relational databases.',
      'Crafted clean user application interfaces using CSS and standard web standards.'
    ],
    technologies: ['Java', 'MySQL', 'Web Development', 'CSS']
  }
];
