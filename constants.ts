
import { Experience, Project, Skill, Certification, Education } from './types';

export const SOCIAL_LINKS = {
  github: "https://github.com/yo-sayantan",
  linkedin: "https://www.linkedin.com/in/yo-sayantan",
  email: "sayantanbiswas.mycareer@gmail.com",
  phone: "+917381183721",
};

export const SUMMARY = "Experienced Senior Software Engineer with nearly 5 years of expertise in Java backend development, cloud microservices, and API design. I specialize in building high-performance, scalable systems while leveraging AI-driven workflows—including prompt engineering and AI agents—to maximize productivity and code quality. Committed to continuous innovation, I drive engineering excellence through modern tech stacks and intelligent solutions.";

export const EXPERIENCES: Experience[] = [
  {
    id: 'experian',
    company: 'Experian',
    role: 'Senior Software Engineer',
    period: 'Dec 2024 – Present',
    location: 'Hyderabad, Telangana',
    description: [
      'Part of the FSD Team, developing and improving the infrastructure for Fraud Detection in Financial Transactions.',
      'Currently working on the upgradation of PreciseID tool to provide better fraud analytics and verification policies.',
      'Working on the API gateway to gather data from different services and re-direct requests to correct services.'
    ]
  },
  {
    id: 'oracle',
    company: 'Oracle',
    role: 'Applications Engineer 2',
    period: 'Aug 2022 – Nov 2024',
    location: 'Hyderabad, Telangana',
    description: [
      'Led the integration of a new payment service in partnership with Mastercard and HSBC, enhancing revenue for Oracle Fusion Cloud Financials.',
      'Deployed and maintained dynamic Docker deployments on Oracle VM with seamless Oracle DB integration.',
      'Collaborated with Tax and Project Management teams in developing new ideas, initiatives, products and services.',
      'Designed and implemented microservices to enhance scalability and integration of payment services.',
      'Leveraged PL/SQL to boost DB performance, ensuring reliability and safeguarding against data corruption.',
      'Utilized AI tools like ChatGPT, Claude, and Gemini to automate repetitive tasks, increasing productivity by 30%.'
    ]
  },
  {
    id: 'highradius-assoc',
    company: 'HighRadius',
    role: 'Associate Software Engineer',
    period: 'Jun 2021 – Jul 2022',
    location: 'Hyderabad, Telangana',
    description: [
      'Contributed to the HighRadius Credit application using Java, Spring, Hibernate, ExtJS, and MySQL.',
      'Optimized performance with strategic multithreading implementations and leveraged AWS for cloud infrastructure.',
      'Integrated QuickBooks and WorldPay, designing new credit limit functionalities leading to client acquisition.',
      'Engineered a new Dynamic Notification system enabling customized in-portal notifications.',
      'Trained and mentored 20 interns and new joiners.'
    ]
  },
  {
    id: 'highradius-junior',
    company: 'HighRadius',
    role: 'Junior Engineer',
    period: 'Jun 2020 – May 2021',
    location: 'Bhubaneshwar, Odisha',
    description: [
      'Developed a framework for faster autonomous testing of software products like HighRadius Credit and EIPP.',
      'Led a team of 6 designing and delivering User Stories.',
      'Developed solutions for uploading and parsing PDF, TXT, and XLSX files using Regex.',
      'Established scripts, test cases, and automation protocols with the QA team.'
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    school: "Birla Institute of Technology & Science (BITS) Pilani",
    degree: "M. Tech. (Software Engineering)",
    location: "Hyderabad",
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
    description: 'Engineered a full-stack web application allowing users to list books for rent or exchange peer-to-peer, enhancing accessibility.'
  },
  {
    id: 'quick-task',
    title: 'QuickTask Application',
    type: 'Personal',
    techStack: ['Flutter', 'Dart', 'Android'],
    description: 'Developed an Android application for task management where users can add, track, and complete tasks efficiently.'
  },
  {
    id: 'legal-entity',
    title: 'Legal Entity Localisation',
    type: 'Work',
    techStack: ['AWS', 'Java', 'Microservices'],
    description: 'Solely developed Legal Entity Localization enabling customized invoices. Utilized AWS to fetch critical entity info ensuring compliance.'
  },
  {
    id: 'parallel-invoice',
    title: 'Parallel Invoice Processing',
    type: 'Work',
    techStack: ['Java', 'Credit Management'],
    description: 'Engineered parallel processing reducing credit limit approval time by 80% during financial year endings, handling up to 100 invoices concurrently.'
  },
  {
    id: 'investment-tracker',
    title: 'Investment Tracker',
    type: 'Personal',
    techStack: ['Google Sheets API', 'Data Analysis'],
    description: 'Implemented a tool to monitor real-time metrics of personal investment portfolios to maximize profit and minimize risk.'
  },
  {
    id: 'os-scheduler',
    title: 'OS Processes Scheduler',
    type: 'Personal',
    techStack: ['C++', 'Bash'],
    description: 'Designed an OS Scheduling simulator for single-core CPU with infinite I/O resources, optimizing resource allocation.'
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Backend Engineering",
    items: ["Java", "SpringBoot", "Microservices", "Hibernate", "REST/SOAP", "System Design", "DSA"]
  },
  {
    category: "Cloud & Database",
    items: ["AWS", "Oracle Cloud", "Docker", "MySQL", "PL/SQL", "Oracle DB", "Redis/NoSQL"]
  },
  {
    category: "AI & Productivity",
    items: ["GitHub Copilot", "Prompt Engineering", "AI Agents", "Gemini/ChatGPT", "Automated Workflows"]
  },
  {
    category: "DevOps & Tools",
    items: ["CI/CD", "Git/GitHub", "JUnits", "Maven/Gradle", "XML/JSON", "Regex", "ADF UI"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "OCI Foundations Associate", date: "11/2023", issuer: "Oracle" },
  { name: "Product Essentials Program", date: "06/2021" },
  { name: "Basic Python Certification", date: "06/2019" },
  { name: "NIIT Java Certification", date: "05/2018" }
];
