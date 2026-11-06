import type { Project } from '../types/project';

export const projects: Project[] = [
  // 1. Shadowfax DWS
  {
    id: 'shadowfax-dws',
    title: 'Dynamic Dimension & Weighing System (DWS)',
    subtitle: 'High-Throughput Logistics Measurement, Barcode & X-Ray Integration',
    client: 'Shadowfax',
    deployment: 'Production Deployment: Mumbai, Bengaluru, Kolkata, and Lucknow, India',
    problem: 'Processing high-throughput logistics shipments requires accurate dimension measurement, fast barcode capture, and X-ray image auditing without operational latency.',
    architecture: 'Real-time industrial capture architecture bridging dynamic dimension measurement machines, handheld/fixed barcode scanners, and high-speed cameras to local databases with cloud API synchronization.',
    engineering: [
      'Captured continuous dimension and weighing telemetry from industrial measurement systems.',
      'Integrated scanner-generated barcode payloads and camera-based image capture into unified transaction records.',
      'Managed high-resolution barcode images and X-ray visual inspection streams received from cameras.',
      'Implemented robust local database persistence for measurement records with zero data loss during network interruptions.',
      'Engineered cloud API connectivity for reliable real-time and batch transmission of collected operational metrics.'
    ],
    keySystems: [
      'Dynamic Dimension & Weighing',
      'Barcode & Camera Integration',
      'X-Ray Image Handling',
      'Local Database Persistence',
      'Cloud API Telemetry'
    ],
    technologies: ['Industrial IoT', 'Measurement Systems', 'Barcode Scanners', 'Camera Integration', 'X-Ray Imaging', 'Local DB', 'Cloud APIs', 'Real-Time'],
    category: 'Industrial & Automation'
  },

  // 2. Wabtec Pick-to-Light
  {
    id: 'wabtec-ptl',
    title: 'Pick-to-Light Warehouse Automation System',
    subtitle: 'Scanner-Integrated Operator Guidance & Inventory Picking Solution',
    client: 'Wabtec Corporation',
    deployment: 'Production Deployment: Rohtak, Haryana, India',
    problem: 'Manual component picking in locomotive and manufacturing warehouses suffered from human picking errors, slow throughput, and inefficient paper-based logging.',
    architecture: 'Hardware-coordinated Pick-to-Light (PTL) controller integrating multi-barcode scanning workflows, physical light indicators, day-wise local transaction logging, and automated label printing.',
    engineering: [
      'Integrated multiple industrial barcode scanners directly into component-picking operational flows.',
      'Engineered digital control of physical PTL indicator lights to visually guide operators to precise bin locations.',
      'Implemented local database storage for day-wise component-picking transactions and operator audits.',
      'Developed on-demand barcode generation and industrial label-printing functionality.',
      'Coordinated sub-second synchronization between scanner input, physical picking verification, and indicator state transitions.'
    ],
    keySystems: [
      'Pick-to-Light Hardware Control',
      'Multi-Scanner Coordination',
      'Barcode & Label Printing',
      'Local Operational Logging',
      'Warehouse Workflow Automation'
    ],
    technologies: ['Pick-to-Light (PTL)', 'Barcode Scanners', 'Hardware Controller', 'Thermal Label Printing', 'Local Database', 'Automation'],
    category: 'Industrial & Automation'
  },

  // 3. KAMA Ayurveda DWS
  {
    id: 'kama-ayurveda-dws',
    title: 'Static Dimension & Weighing System (DWS)',
    subtitle: 'Machine-Integrated Dimension Capture & Configurable Receipt Automation',
    client: 'KAMA Ayurveda',
    deployment: 'Production Deployment: Coimbatore & Mumbai, India',
    problem: 'Warehouse packing stations needed automated, tamper-proof parcel dimensioning, custom branded receipts, and instant cloud dispatch logging.',
    architecture: 'Direct machine-integrated DWS platform capturing dimensional metrics, generating customizable dispatch receipts, and streaming payload data to cloud servers.',
    engineering: [
      'Captured dimension and weight data directly from hardware measurement equipment with high precision.',
      'Supported dynamically configurable receipt fields based on shifting logistics partner and operational criteria.',
      'Generated customized, professional measurement and dispatch receipts on demand.',
      'Implemented local database storage with failover caching to guarantee zero operational downtime.',
      'Engineered automatic cloud data transmission for central logistics reporting.'
    ],
    keySystems: [
      'Static DWS Integration',
      'Configurable Receipt Engine',
      'Local-to-Cloud Sync',
      'Dispatch Validation'
    ],
    technologies: ['Measurement Hardware', 'Receipt Generation', 'Local Database', 'Cloud Synchronization', 'Industrial Automation'],
    category: 'Industrial & Automation'
  },

  // 4. Delite Engineering DWS
  {
    id: 'delite-dws',
    title: 'Dynamic Dimension & Weighing System (DWS)',
    subtitle: 'Industrial Record Management & Barcode Imaging Suite',
    client: 'Delite Engineering Pvt. Ltd.',
    deployment: 'Client Office / Manufacturing Facility Installation',
    problem: 'Industrial equipment manufacturing needed unified management for dynamic dimensional verification, barcode image association, and historical record auditing.',
    architecture: 'Dynamic measurement and image ingestion system pairing high-throughput weighing cells with localized database record management.',
    engineering: [
      'Captured, validated, and stored dynamic dimension and weight parameters at production line speeds.',
      'Managed and indexed barcode image storage directly mapped to operational measurement records.',
      'Implemented secure local database-based historical data management and reporting.'
    ],
    keySystems: [
      'Dynamic DWS Capture',
      'Barcode Image Storage',
      'Local Data Management',
      'Operational Auditing'
    ],
    technologies: ['Dynamic DWS', 'Barcode Imaging', 'Local Database', 'System Integration', 'Desktop / Edge Runtime'],
    category: 'Industrial & Automation'
  },

  // 5. MobCast AI / TTCV2
  {
    id: 'mobcast-ai',
    title: 'MobCast AI / TTCV2',
    subtitle: 'AI-Powered Course Generation & Intelligent Consultation Platform',
    client: 'MobCast',
    problem: 'Authoring structured, interactive digital courses from raw training documents and organizational guidelines is a labor-intensive, multi-week manual process.',
    architecture: 'Multi-stage intelligent consultation workflow powered by LLMs (Google Gemini & OpenRouter) that transforms context into structured course blueprints, scenes, and generated assets.',
    engineering: [
      'Engineered a Living Context engine for context-aware interactive consultation conversations.',
      'Developed bounded regeneration and AI workflow orchestration ensuring deterministic, strictly valid JSON output.',
      'Architected course blueprint and slide/scene generation from uploaded reference documents and video scripts.',
      'Integrated AI image generation, corporate brand configuration, and S3-based digital asset pipelines.',
      'Integrated multi-provider AI backends (Google Gemini, OpenRouter) with fallbacks and rate-limit mitigation.'
    ],
    keySystems: [
      'Intelligent Consultation Engine',
      'Living Context Memory',
      'Course Blueprint Generation',
      'Structured JSON AI Orchestration',
      'Brand & Asset Pipelines'
    ],
    technologies: ['Python', 'Google Gemini', 'OpenRouter', 'LLMs', 'Prompt Engineering', 'Structured JSON', 'React', 'AWS S3'],
    category: 'AI / GenAI'
  },

  // 6. Nirmil AI
  {
    id: 'nirmil-ai',
    title: 'Nirmil AI — Financial Announcement Intelligence',
    subtitle: 'Automated NSE/BSE Exchange Monitoring & Document Intelligence Pipeline',
    problem: 'Financial analysts and investment teams are inundated by thousands of daily PDF announcements from Indian stock exchanges (NSE/BSE), making manual extraction slow and error-prone.',
    architecture: 'Automated exchange polling and ingestion service coupled with a Gemini-powered document processing pipeline that parses complex multi-page financial PDFs and surfaces key intelligence.',
    engineering: [
      'Engineered automated real-time monitors to continuously fetch announcements from NSE and BSE portals.',
      'Built resilient PDF downloading and multi-format document processing pipelines.',
      'Integrated Google Gemini to parse financial disclosures, board resolutions, and market-moving events.',
      'Implemented intelligent keyword filtering and structured financial summarization workflows.'
    ],
    keySystems: [
      'Exchange Announcement Monitor',
      'PDF Document Intelligence Pipeline',
      'Google Gemini Financial Parser',
      'Structured Financial Extraction'
    ],
    technologies: ['Python', 'Node.js', 'Google Gemini', 'GenAI', 'PDF Processing', 'REST APIs', 'Automation'],
    category: 'AI / GenAI'
  },

  // 7. Nirmil Financial Results Terminal
  {
    id: 'nirmil-financial-terminal',
    title: 'Nirmil Financial Results Terminal',
    subtitle: 'Manifest V3 Chrome Extension & Structured Results Analysis Platform',
    problem: 'Traders and developers require an instant, in-browser interface to filter announcement feeds using customizable rules and extract clean JSON balance sheet figures.',
    architecture: 'Manifest V3 Chrome Extension powered by background Service Workers, paired with an Express/Node backend, React/Vite dashboard, and Gemini API.',
    engineering: [
      'Built a high-performance Chrome Extension using Manifest V3 and background Service Worker architecture.',
      'Implemented flexible rule-based announcement filtering driven by CSV configuration files.',
      'Engineered automated PDF retrieval and Gemini-powered financial statement parsing.',
      'Designed structured JSON output pipelines delivering clean quarterly financial data to frontend dashboards.'
    ],
    keySystems: [
      'Manifest V3 Service Worker',
      'CSV-Configurable Rules Engine',
      'In-Browser Announcement Extractor',
      'Structured JSON Results API'
    ],
    technologies: ['React', 'Vite', 'TypeScript', 'Node.js', 'Google Gemini', 'Chrome Extension APIs', 'Manifest V3'],
    category: 'Developer Tools & Systems'
  },

  // 8. DigiMaker Platform
  {
    id: 'digimaker',
    title: 'DigiMaker — Banner Creation Platform',
    subtitle: 'Multi-Platform Political Banner Studio with Web Admin & Flutter Mobile App',
    problem: 'Campaign organizers and digital teams lacked a unified platform to design, serialize, and distribute customizable political banner templates across mobile and web.',
    architecture: 'Full-stack multi-platform ecosystem: Next.js/React administrative portal, Express/Node API backend, Prisma ORM with SQLite, and Flutter mobile application.',
    engineering: [
      'Engineered a canvas-based design engine with full template serialization and dynamic text/image placement.',
      'Developed administrative web dashboard for managing design catalogs, user permissions, and assets.',
      'Integrated Flutter mobile application for on-the-go banner personalization and instant high-res rendering.',
      'Built RESTful APIs and Prisma ORM schemas ensuring synchronized state across web and mobile.'
    ],
    keySystems: [
      'Canvas Design & Serialization Engine',
      'Administrative Template Management',
      'Cross-Platform Flutter Rendering',
      'Prisma Database Architecture'
    ],
    technologies: ['Next.js', 'React', 'Flutter', 'Dart', 'Node.js', 'Express', 'Prisma', 'SQLite', 'Canvas API'],
    category: 'Full Stack & Enterprise'
  },

  // 9. Sidhicon Automation Suite
  {
    id: 'sidhicon-suite',
    title: 'Enterprise Business Software Suite',
    subtitle: 'Integrated Inventory, Quotation Engine & Certificate Automation Platform',
    client: 'Sidhicon Automation Pvt. Ltd.',
    deployment: 'Client Office Installation & Ongoing Operation',
    problem: 'Industrial automation consultancy faced disconnected operational workflows across client quoting, parts inventory, and official material test certification.',
    architecture: 'Custom enterprise application suite combining the corporate web presence, inventory management database, quotation generation engine, and material certificate compiler.',
    engineering: [
      'Engineered corporate web presence reflecting company engineering capabilities.',
      'Developed real-time inventory management application tracking automation components and stock levels.',
      'Built automated quotation generation software reducing turnaround time from days to minutes.',
      'Created specialized material certificate generation software for compliance and quality assurance.'
    ],
    keySystems: [
      'Inventory Control System',
      'Automated Quotation Engine',
      'Material Certificate Compiler',
      'Corporate Web Portal'
    ],
    technologies: ['Full-Stack Web', 'Inventory Management', 'Document Generation', 'Quotation Automation', 'SQL Database'],
    category: 'Full Stack & Enterprise'
  },

  // 10. Mascon Techneeds
  {
    id: 'mascon-cert-gen',
    title: 'Material Certificate Generation System',
    subtitle: 'Automated Industrial Material Certification & Compliance Documentation',
    client: 'Mascon Techneeds',
    deployment: 'Production Deployment: Gujarat, India',
    problem: 'Manual generation of metallurgical and material test certificates was error-prone, labor-intensive, and exposed the manufacturer to compliance auditing risks.',
    architecture: 'Data-driven documentation engine that validates raw material batch parameters and compiles standardized, audit-ready compliance certificates.',
    engineering: [
      'Automated the end-to-end generation of material inspection and test certificates.',
      'Structured batch parameter schemas to enforce regulatory compliance and validation checks.',
      'Designed print-ready PDF and document output with verification tracking.',
      'Successfully deployed on-site to production facilities in Gujarat, India.'
    ],
    keySystems: [
      'Automated Certificate Engine',
      'Material Data Validation',
      'Compliance Documentation',
      'Batch Parameter Tracking'
    ],
    technologies: ['Automation', 'Document Generation', 'Data Validation', 'Compliance Tracking', 'SQL'],
    category: 'Full Stack & Enterprise'
  },

  // 11. Anokhee Creations
  {
    id: 'anokhee-ecommerce',
    title: 'E-commerce Platform & Admin Suite',
    subtitle: 'Complete Consumer Retail Web Storefront with Back-Office Administration',
    client: 'Anokhee Creations',
    deployment: 'Production Client Deployment',
    problem: 'Retail enterprise needed an end-to-end digital commerce solution with responsive shopping experiences and fine-grained administrative controls.',
    architecture: 'Full-stack retail architecture comprising consumer-facing storefront, dynamic product catalog, shopping cart/checkout, and comprehensive administrative back-office.',
    engineering: [
      'Engineered complete consumer-facing e-commerce storefront with optimized mobile-first browsing.',
      'Architected backend REST APIs for product taxonomy, pricing, inventory, and order fulfillment.',
      'Built rich administrative panel giving operators full control over catalog updates, discounts, and customer inquiries.',
      'Implemented secure data handling and performance optimization across the full stack.'
    ],
    keySystems: [
      'Storefront Catalog & Cart Engine',
      'Back-Office Administrative Panel',
      'Product Taxonomy & Stock Control',
      'Order Management Flow'
    ],
    technologies: ['Full-Stack', 'E-commerce', 'Admin Dashboard', 'REST APIs', 'Database Architecture', 'Responsive UI'],
    category: 'Full Stack & Enterprise'
  },

  // 12. Redwings Logistics
  {
    id: 'redwings-logistics',
    title: 'Logistics Management Platform',
    subtitle: 'Enterprise Freight Management, Tracking & Operations Suite in Laravel',
    client: 'Redwings Logistics',
    deployment: 'Client Office Installation & Operations',
    problem: 'Freight operations required a unified platform to coordinate consignments, track shipments across transit hubs, and manage daily freight billing.',
    architecture: 'Laravel-powered logistics management web portal with an integrated administrative command center for end-to-end freight lifecycle tracking.',
    engineering: [
      'Developed high-performance logistics website and backend infrastructure using Laravel.',
      'Built comprehensive administrative panel for freight rate calculation, consignment booking, and manifests.',
      'Implemented shipment tracking system for tracking milestone updates and dispatch events.',
      'Streamlined day-to-day logistics operations, document generation, and driver/vehicle assignments.'
    ],
    keySystems: [
      'Freight Detail Management',
      'Live Consignment Tracking',
      'Daily Operations Dispatch Center',
      'Administrative Back-Office'
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'Freight Management', 'Shipment Tracking', 'REST APIs'],
    category: 'Full Stack & Enterprise'
  }
];
