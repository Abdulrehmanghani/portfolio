export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  proficiency: number; // 0-100
  category: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface Project {
  title: string;
  category: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}