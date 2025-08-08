export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  live?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
} 