
export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  skills?: string[];
}

export interface Project {
  id: string;
  title: string;
  techStack: string[];
  description: string;
  longDescription?: string;
  features?: string[];
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

export interface Award {
  title: string;
  issuer: string;
  year: string;
  description: string;
}
