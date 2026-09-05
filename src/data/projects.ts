import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'nirmil-ai',
    title: 'Nirmil AI',
    subtitle: 'NSE/BSE Announcement Intelligence Platform',
    problem: 'Processing thousands of financial announcements from NSE/BSE manually is slow and error-prone, requiring automated intelligence to extract key information.',
    architecture: 'Automated monitoring system paired with an AI-driven document processing pipeline that parses PDFs and surfaces keywords.',
    engineering: [
      'Built automated monitors for real-time NSE/BSE announcement fetching.',
      'Developed PDF processing pipelines to handle complex financial documents.',
      'Integrated GenAI for intelligent information extraction and summarization.'
    ],
    keySystems: [
      'Announcement monitoring',
      'AI document processing',
      'Financial intelligence',
      'Structured extraction'
    ],
    technologies: ['Node.js', 'Google Gemini', 'GenAI', 'PDF Processing', 'APIs', 'Automation'],
    category: 'AI / GenAI'
  },
  {
    id: 'mobcast-ai',
    title: 'MobCast AI / TTCV2',
    subtitle: 'AI-Powered Course Generation Platform',
    problem: 'Creating structured digital learning experiences from raw requirements and source material is a time-consuming manual process.',
    architecture: 'Intelligent consultation workflow powered by LLMs (Gemini/OpenRouter) that transforms context into structured course blueprints, slides, and assets.',
    engineering: [
      'Engineered a Living Context engine for context-aware conversations.',
      'Developed bounded regeneration and AI workflow orchestration to ensure structured valid JSON output.',
      'Integrated S3-based asset handling and AI image generation.'
    ],
    keySystems: [
      'Intelligent consultation workflow',
      'Living Context engine',
      'Course blueprint generation',
      'AI workflow orchestration'
    ],
    technologies: ['React', 'TypeScript', 'Gemini', 'OpenRouter', 'LLMs', 'REST APIs', 'S3'],
    category: 'AI / GenAI'
  },
  {
    id: 'dws',
    title: 'DWS System',
    subtitle: 'Real-Time Industrial Data & Image Integration',
    problem: 'Industrial environments require unified processing of disjointed data sources (barcodes, sensors, images) with zero latency.',
    architecture: 'Real-time event processing architecture bridging hardware (scanners, microcontrollers, IP cameras) and software via WebSockets.',
    engineering: [
      'Integrated barcode scanners, sensor data, and IP camera images into a single workflow.',
      'Implemented FTP image capture and image-directory monitoring.',
      'Built a live dashboard with fault-tolerant reconnect handling over LAN.'
    ],
    keySystems: [
      'Hardware integration',
      'Real-time event processing',
      'WebSocket communication',
      'Fault-tolerant connections'
    ],
    technologies: ['Real-Time Systems', 'Hardware Integration', 'Networking', 'WebSockets', 'Backend Engineering'],
    category: 'Real-time / Systems'
  },
  {
    id: 'digimaker',
    title: 'Digimaker',
    subtitle: 'Political Banner Creation Platform',
    problem: 'Need for a unified digital design platform allowing seamless creation and management of political banners across web and mobile.',
    architecture: 'Admin Web -> Backend API -> Database -> Flutter App with canvas-based design and cross-platform template processing.',
    engineering: [
      'Developed canvas serialization for template management.',
      'Built admin panel and backend APIs for content management.',
      'Integrated Flutter rendering for cross-platform availability.'
    ],
    keySystems: [
      'Canvas-based design',
      'Template management',
      'Cross-platform rendering',
      'Admin workflow'
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'Express', 'Prisma', 'SQLite', 'Flutter'],
    category: 'Full Stack'
  },
  {
    id: 'nirmil-financial-terminal',
    title: 'Nirmil Financial Results Terminal',
    subtitle: 'AI-powered Financial Intelligence Tool',
    problem: 'Developers and financial analysts need a streamlined tool to filter announcements based on configurable rules and automatically analyze them.',
    architecture: 'Service Worker architecture integrated into a Chrome Extension (Manifest V3) backed by an Express server and Gemini.',
    engineering: [
      'Implemented rule-based announcement filtering via CSV configurations.',
      'Engineered automatic PDF downloading and Gemini-powered document analysis.',
      'Built a developer-focused structured JSON extraction pipeline.'
    ],
    keySystems: [
      'Chrome Extension integration',
      'Rule-based filtering',
      'Automatic document analysis',
      'Structured extraction'
    ],
    technologies: ['Node.js', 'Express', 'React', 'Vite', 'TypeScript', 'Gemini', 'Chrome Extension APIs'],
    category: 'Developer Tools'
  },
  {
    id: 'esavaari',
    title: 'eSaVaari',
    subtitle: 'Ride-Hailing Application',
    problem: 'Providing a core digital workflow to seamlessly connect users with transportation services in real-time.',
    architecture: 'Mobile application powered by scalable backend APIs for real-time location tracking and mobility management.',
    engineering: [
      'Developed the core digital workflow connecting riders and drivers.',
      'Engineered scalable backend APIs to handle mobility operations.'
    ],
    keySystems: [
      'Ride matching',
      'Real-time tracking',
      'Mobility management'
    ],
    technologies: ['Mobility', 'Mobile Application', 'Backend', 'APIs'],
    category: 'Backend & APIs'
  }
];
