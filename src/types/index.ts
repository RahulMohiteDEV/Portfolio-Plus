export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
  icon: string;
  color: 'primary' | 'secondary' | 'tertiary';
  span: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  problem: string;
  solution: string;
  result: string;
}

export interface Education {
  degree: string;
  institution: string;
  cgpa: string;
  period: string;
  icon: string;
}