export interface Project {
  id: number;
  title: string;
  client?: string;
  type?: string;
  description: string;
  technologies: string[];
  status: string;
  year: string;
  impact?: string;
  demo?: string;
  github?: string;
  images?: string[];
  challenges?: string[];
  features?: string[];
  results?: string[];
  timeline?: string;
  role?: string;
}

export const clientProjects: Project[] = [
  {
    id: 1,
    title: "Pro Inventory Manager",
    client: "FISEI ASO",
    description: "Advanced inventory management system with warehouse transfers, cost layers, FIFO, tax handling, and comprehensive Kardex tracking.",
    technologies: ["Golang", "Node.js", "Angular", "GraphQL", "PostgreSQL", "Docker"],
    status: "In Progress",
    year: "2025",
    timeline: "6 months",
    impact: "Real-time inventory control microservice that improves operational transparency by 85% and reduces inventory discrepancies by 70%.",
    role: "Full-stack Developer & System Architect",
    features: [
      "Real-time inventory tracking with FIFO cost calculation",
      "Multi-warehouse transfer management system",
      "Comprehensive Kardex reporting with audit trails",
      "Tax compliance integration for Ecuador regulations",
      "GraphQL API with real-time subscriptions",
      "Advanced analytics dashboard with predictive insights"
    ],
    challenges: [
      "Implementing complex FIFO cost layer calculations while maintaining performance",
      "Designing a scalable microservice architecture for real-time inventory updates",
      "Ensuring data consistency across multiple warehouse locations",
      "Integrating with existing legacy systems without disrupting operations"
    ],
    results: [
      "85% improvement in inventory accuracy",
      "70% reduction in manual data entry errors",
      "50% faster inventory auditing process",
      "Real-time visibility across all warehouse locations"
    ]
  },
  {
    id: 2,
    title: "Inventory App",
    client: "Encomeca EC",
    description: "Inventory management app with AI product identification, barcode scanning, and audit tracking. Features fuzzy search and precise stock counting.",
    technologies: ["Python", "PostgreSQL", "Flutter", "Supabase", "AI Integration", "OpenCV"],
    status: "Completed",
    year: "2025",
    timeline: "4 months",
    impact: "Improved inventory accuracy by 90% and reduced audit time by 60% through AI-powered product identification.",
    demo: "encomeca-inventory.demo.com",
    role: "Mobile App Developer & AI Integration Specialist",
    features: [
      "AI-powered product identification using computer vision",
      "Advanced barcode scanning with batch processing",
      "Fuzzy search algorithm for product matching",
      "Real-time audit tracking and reporting",
      "Offline-first architecture with sync capabilities",
      "Multi-user role management system"
    ],
    challenges: [
      "Training AI models for accurate product identification in various lighting conditions",
      "Implementing efficient offline-first data synchronization",
      "Optimizing barcode scanning performance on low-end devices",
      "Designing intuitive UX for warehouse workers with varying tech skills"
    ],
    results: [
      "90% improvement in inventory accuracy",
      "60% reduction in audit completion time",
      "95% accuracy in AI product identification",
      "Zero data loss with offline-first architecture"
    ]
  },
  {
    id: 3,
    title: "Ecuador E-Invoicing API",
    client: "Diaz Freire S.A.",
    description: "Electronic invoicing API for Ecuador. Signs XML invoices, manages products, checks legal status, and generates authorization numbers for tax compliance.",
    technologies: ["Node.js", "Nest JS", "XML", "Digital Signature", "Microservices", "PostgreSQL", "Redis"],
    status: "Completed",
    year: "2024",
    timeline: "5 months",
    impact: "Automated electronic invoicing process and ensured 100% tax compliance, reducing manual processing time by 80%.",
    role: "Backend Developer & Tax Compliance Specialist",
    features: [
      "XML invoice generation with digital signature validation",
      "Real-time tax authority integration (SRI Ecuador)",
      "Automated authorization number generation",
      "Product catalog management with tax classification",
      "Legal status verification for business entities",
      "Comprehensive audit logging and reporting"
    ],
    challenges: [
      "Implementing complex XML digital signature validation according to Ecuador tax laws",
      "Ensuring 99.9% uptime for critical tax compliance operations",
      "Handling high-volume invoice processing during peak business periods",
      "Maintaining synchronization with frequently changing tax regulations"
    ],
    results: [
      "100% tax compliance achievement",
      "80% reduction in manual invoice processing time",
      "99.9% system uptime maintained",
      "Zero tax authority rejections after implementation"
    ]
  },
  {
    id: 4,
    title: "Maryuri Manufacturing Inventory App",
    client: "Maryuri Ropa Interior",
    description: "Manufacturing inventory app for clothing production. Supports inventory by measurements/weights/units, barcode scanning, and role-based user management with OAuth.",
    technologies: ["Flutter", "Supabase", "PostgreSQL", "SQLite", "OAuth", "Role Management"],
    status: "Completed",
    year: "2023",
    timeline: "3 months",
    impact: "Improved inventory control and traceability for manufacturing operations, reducing material waste by 40%.",
    role: "Mobile App Developer & Database Designer",
    features: [
      "Multi-unit inventory tracking (measurements, weights, units)",
      "Manufacturing-specific barcode system",
      "Role-based access control with OAuth integration",
      "Production planning and material requirement calculation",
      "Real-time stock level monitoring",
      "Comprehensive reporting for manufacturing analytics"
    ],
    challenges: [
      "Designing flexible inventory system for various measurement units",
      "Implementing complex role-based permissions for manufacturing workflows",
      "Optimizing app performance for factory floor conditions",
      "Creating intuitive interface for workers with limited tech experience"
    ],
    results: [
      "40% reduction in material waste",
      "60% improvement in inventory accuracy",
      "50% faster production planning process",
      "Complete traceability from raw materials to finished products"
    ]
  }
];

export const personalProjects: Project[] = [
  {
    id: 5,
    title: "Copa FISEI 2025",
    type: "Personal / ASO FISEI",
    description: "Web platform for university faculty championship with team management, standings, match scheduling, and player registrations. Developed as a collaborative team project.",
    technologies: ["React", "Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
    status: "Completed",
    year: "2025",
    timeline: "2 months",
    demo: "copa-fisei-2025.vercel.app",
    github: "https://github.com/EmeritusK/copa-fisei-2025",
    role: "Frontend Developer & UI/UX Designer",
    features: [
      "Dynamic tournament bracket generation",
      "Real-time match score updates",
      "Player registration and team management",
      "Automated standings calculation",
      "Responsive design for mobile and desktop",
      "Admin dashboard for tournament management"
    ],
    challenges: [
      "Implementing real-time updates for live match scores",
      "Designing complex tournament bracket algorithms",
      "Creating responsive design that works on all devices",
      "Managing team collaboration and code integration"
    ],
    results: [
      "Successfully managed 50+ teams and 500+ players",
      "Real-time updates with zero downtime during events",
      "95% user satisfaction rating",
      "Adopted by university for future tournaments"
    ]
  },
  {
    id: 6,
    title: "SPA Management Backend",
    type: "Personal",
    description: "NestJS backend for SPA management with APIs for appointments, clients, rooms, and authentication. Built with TypeORM and documented with Swagger.",
    technologies: ["NestJS", "TypeORM", "Swagger", "PostgreSQL", "JWT Auth", "Docker"],
    status: "Completed",
    year: "2025",
    timeline: "1.5 months",
    demo: "spa-backend.demo.com",
    github: "https://github.com/alisonMSalas/spa-system-backend",
    role: "Backend Developer & API Designer",
    features: [
      "RESTful API with comprehensive Swagger documentation",
      "JWT-based authentication and authorization",
      "Appointment scheduling with conflict resolution",
      "Client management with service history",
      "Room and resource management system",
      "Automated email notifications and reminders"
    ],
    challenges: [
      "Designing efficient appointment scheduling algorithm",
      "Implementing secure authentication with role-based access",
      "Creating comprehensive API documentation",
      "Optimizing database queries for performance"
    ],
    results: [
      "Complete API documentation with 100% endpoint coverage",
      "Sub-100ms response times for all endpoints",
      "Zero security vulnerabilities in security audit",
      "Scalable architecture supporting 1000+ concurrent users"
    ]
  }
];

export const allProjects = [...clientProjects, ...personalProjects];
