
export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  techStack: string[];
  description: string;
  type: 'Work' | 'Personal';
  link?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Certification {
  name: string;
  date: string;
  issuer?: string;
}

export interface Education {
  school: string;
  degree: string;
  location: string;
  details: string[];
}
