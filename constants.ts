
import { Experience, Project, Skill, Certification, Education, Award } from './types';

export const SOCIAL_LINKS = {
  github: "https://github.com/yo-sayantan",
  linkedin: "https://www.linkedin.com/in/yo-sayantan",
  email: "sayantanbiswas.mycareer@gmail.com",
  phone: "+917381183721",
};

export const SUMMARY = "Experienced Senior Software Engineer with nearly 5 years of expertise in Java backend development, AWS cloud architectures, and Microservices. I specialize in building high-performance, scalable systems while leveraging AI-driven workflows—including prompt engineering, MCP Servers, and AI agents—to maximize productivity and code quality. Committed to continuous innovation, I drive engineering excellence through modern tech stacks and intelligent solutions.";

export const EXPERIENCES: Experience[] = [
  {
    id: 'experian',
    company: 'Experian',
    role: 'Senior Software Engineer',
    period: 'Dec 2024 – Present',
    location: 'Hyderabad, Telangana',
    description: [
      'Driving the Fraud Detection (FSD) Team initiatives, enhancing critical infrastructure for real-time financial transaction monitoring.',
      'Spearheading the modernization of the PreciseID tool to deliver advanced fraud analytics and robust verification policies.',
      'Architecting a high-throughput API Gateway to efficiently orchestrate data flow between microservices and redirect requests with low latency.',
      'Orchestrating containerized microservices using Docker and Kubernetes, ensuring high availability and seamless server management.',
      'Championing an AI-first culture by integrating GitHub Copilot, Cursor, and GPT-5 into the development lifecycle, boosting team productivity by 30%.'
    ],
    skills: ['Java', 'Microservices', 'Docker', 'Kubernetes', 'API Gateway', 'Fraud Detection', 'AI Agents', 'Cursor']
  },
  {
    id: 'oracle',
    company: 'Oracle',
    role: 'Applications Engineer 2',
    period: 'Aug 2022 – Nov 2024',
    location: 'Hyderabad, Telangana',
    description: [
      'Led a strategic partnership integration with Mastercard and HSBC, significantly enhancing revenue streams for Oracle Fusion Cloud Financials.',
      'Architected and maintained dynamic Docker deployments on Oracle VM, achieving seamless Oracle DB integration and improving environment stability.',
      'Collaborated extensively with Tax and Project Management teams to innovate and launch new financial products and services.',
      'Leveraged advanced PL/SQL optimization techniques to boost database performance, ensuring rock-solid reliability and data integrity.',
      'Conducted deep-dive SQLHC and AWR analysis to implement critical data-fix scripts for performance tuning.'
    ],
    skills: ['Java', 'Oracle Cloud', 'Docker', 'PL/SQL', 'System Design']
  },
  {
    id: 'highradius-assoc',
    company: 'HighRadius',
    role: 'Associate Software Engineer',
    period: 'Jun 2021 – Jul 2022',
    location: 'Hyderabad, Telangana',
    description: [
      'Played a core role in the design and development of the HighRadius Credit application using Java, Spring, Hibernate, and ExtJS.',
      'Optimized system performance by implementing strategic multithreading solutions and leveraging AWS cloud infrastructure.',
      'Spearheaded the integration of QuickBooks and WorldPay, designing novel credit limit functionalities that directly contributed to new client acquisition.',
      'Engineered a highly flexible Dynamic Notification system, enabling customized in-portal alerts tailored to specific merchant criteria.',
      'Mentored and trained a cohort of 20 interns and new hires, fostering best practices in SaaS development.'
    ],
    skills: ['Java', 'Spring Boot', 'AWS', 'Hibernate', 'MySQL', 'Multithreading']
  },
  {
    id: 'highradius-junior',
    company: 'HighRadius',
    role: 'Junior Engineer',
    period: 'Jun 2020 – May 2021',
    location: 'Bhubaneshwar, Odisha',
    description: [
      'Developed a high-efficiency framework for autonomous testing of flagship products like HighRadius Credit and EIPP.',
      'Led a team of 6 engineers in designing and delivering critical User Stories for the EIPP product suite.',
      'Engineered robust solutions for parsing complex PDF, TXT, and XLSX files using advanced Regex patterns.',
      'Established comprehensive test scripts and automation protocols in collaboration with the QA team.'
    ],
    skills: ['Test Automation', 'Java', 'Regex', 'Team Leadership', 'Parsers']
  }
];

export const EDUCATION: Education[] = [
  {
    school: "Birla Institute of Technology & Science (BITS)",
    degree: "M. Tech. (Software Engineering)",
    location: "Hyderabad, Telangana",
    details: [
      "Specialised in Software Engineering (Full Stack, Security, DevOps, Scalability, Cloud, Architecture)",
      "Post-Graduated with 8 CGPA"
    ]
  },
  {
    school: "Kalinga Institute of Industrial Technology (KIIT) University",
    degree: "B. Tech. (Computer Science and Engineering)",
    location: "Bhubaneshwar, Odisha",
    details: [
      "Majored in Computer Science and Engineering",
      "Graduated with 9.13 CGPA"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'book-exchange',
    title: 'Book Exchange Platform',
    type: 'Personal',
    techStack: ['Java', 'SpringBoot', 'MySQL', 'React'],
    description: 'Engineered a comprehensive full-stack web application that facilitates a peer-to-peer book exchange marketplace. The platform features real-time availability tracking, user ratings, and a secure messaging system, significantly promoting literacy and community engagement.',
    link: 'https://github.com/yo-sayantan'
  },
  {
    id: 'quick-task',
    title: 'QuickTask Application',
    type: 'Personal',
    techStack: ['Flutter', 'Dart', 'Android'],
    description: 'Developed a robust Android application using Flutter and Dart designed for optimal task management. Features include intuitive categorization, deadline reminders, and progress tracking, resulting in a 40% improvement in personal productivity for beta testers.',
    link: 'https://github.com/yo-sayantan'
  },
  {
    id: 'legal-entity',
    title: 'Legal Entity Localisation',
    type: 'Work',
    techStack: ['AWS', 'Java', 'Microservices'],
    description: 'Spearheaded the development of a Legal Entity Localization microservice on AWS. This critical component enables the dynamic generation of regulatory-compliant invoices across 30+ countries, utilizing complex logic to fetch and format entity-specific data.',
  },
  {
    id: 'parallel-invoice',
    title: 'Parallel Invoice Processing',
    type: 'Work',
    techStack: ['Java', 'Credit Management'],
    description: 'Architected a high-performance parallel processing engine for credit management. By implementing asynchronous threading models, I reduced credit limit approval latency by 80% during peak financial periods, enabling the concurrent processing of over 100 massive invoice payloads.',
  },
  {
    id: 'investment-tracker',
    title: 'Investment Tracker',
    type: 'Personal',
    techStack: ['Google Sheets API', 'Data Analysis'],
    description: 'Implemented an automated financial tracking tool using Google Sheets API. The system aggregates real-time market data to analyze portfolio performance, visualize risk distribution, and provide actionable insights for maximizing returns on investment.',
    link: 'https://github.com/yo-sayantan'
  },
  {
    id: 'os-scheduler',
    title: 'OS Processes Scheduler',
    type: 'Personal',
    techStack: ['C++', 'Bash'],
    description: 'Designed a sophisticated OS Scheduling simulator in C++ to visualize process management. The project implements Round Robin and FCFS algorithms to optimize CPU utilization in a single-core environment with infinite I/O resources, demonstrating deep understanding of system internals.',
    link: 'https://github.com/yo-sayantan'
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Backend Engineering",
    items: ["Java", "SpringBoot", "Microservices", "Hibernate", "REST/SOAP", "System Design", "DSA"]
  },
  {
    category: "Cloud & Database",
    items: ["AWS", "Oracle Cloud", "Docker", "Kubernetes", "MySQL", "PL/SQL", "Oracle DB", "Redis/NoSQL"]
  },
  {
    category: "AI & Productivity",
    items: ["GitHub Copilot", "Cursor", "GPT-5", "ChatGPT-4o", "MCP Servers", "AI Agents", "Prompt Engineering"]
  },
  {
    category: "DevOps & Tools",
    items: ["CI/CD", "JBoss", "Git/GitHub", "JUnits", "Maven/Gradle", "XML/JSON", "Regex", "ADF UI"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "OCI Foundations Associate", date: "11/2023", issuer: "Oracle" },
  { name: "Product Essentials Program", date: "06/2021" },
  { name: "Basic Python Certification", date: "06/2019" },
  { name: "NIIT Java Certification", date: "05/2018" }
];

export const AWARDS: Award[] = [
  {
    title: "Spot Award",
    issuer: "Oracle",
    year: "2023",
    description: "For exceptional delivery of the Payment Service Integration project ahead of schedule."
  },
  {
    title: "Star Performer",
    issuer: "HighRadius",
    year: "2021",
    description: "Recognized for outstanding contributions to the Credit Cloud module and team mentorship."
  }
];
