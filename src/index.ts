export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  summary: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  period: string;
  company: string;
  location: string;
  title: string;
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  period: string;
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  url?: string;
  github?: string;
}
