import type {
  PersonalInfo,
  Stat,
  SkillGroup,
  ExperienceItem,
  EducationItem,
} from '../types/portfolio';

export const personal: PersonalInfo = {
  name: 'Utsav Kuinkel',
  title: 'Full Stack Developer',
  location: 'Toronto, Canada',
  email: 'utshaav583@gmail.com',
  phone: '+1 437 667 5583',
  github: 'https://github.com/utshaav',
  linkedin: 'https://linkedin.com/in/utsav-kuinkel',
  summary:
    'Full Stack Developer with hands-on experience building and maintaining production systems in financial and transactional domains. Strong in backend APIs and React-driven interfaces, focused on safe releases, performance, and long-term maintainability.',
};

export const stats: Stat[] = [
  { value: '5+', label: 'Years Experience' },
  { value: '3', label: 'Companies' },
  { value: 'Full', label: 'Stack Capability' },
  { value: 'BSc', label: 'Computer Science' },
];

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['React.js', 'Redux', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend & API',
    items: ['C#', '.NET 6', 'ASP.NET MVC', 'REST APIs', 'Node.js', 'Python', 'Java'],
  },
  {
    category: 'Databases',
    items: ['SQL Server', 'MySQL', 'MongoDB'],
  },
  {
    category: 'DevOps & Tools',
    items: ['Azure DevOps', 'CI/CD', 'Git', 'Jira', 'Agile/Scrum'],
  },
];

export const experience: ExperienceItem[] = [
  {
    period: '2023 — Present',
    company: 'ExaSystems Development Inc.',
    location: 'Mississauga, Canada',
    title: 'Full Stack Developer',
    bullets: [
      'Developed and maintained full-stack features supporting financial and transactional workflows across front-end, backend, and databases.',
      'Designed backward-compatible RESTful APIs enabling new features while protecting existing integrations.',
      'Improved application performance by optimizing database queries and addressing bottlenecks in critical paths.',
      'Built scalable backend services using Entity Framework Core and async/await patterns.',
      'Supported Azure-based CI/CD pipelines, automating builds and deployments to improve release consistency.',
      'Collaborated in Agile/Scrum environment through sprint planning, code reviews, and cross-functional discussions.',
    ],
  },
  {
    period: '2021 — 2023',
    company: 'Nimble Infosys',
    location: 'Kathmandu, Nepal',
    title: 'Software Engineer',
    bullets: [
      'Contributed to web-based applications implementing backend logic, APIs, and data-layer functionality.',
      'Implemented stored procedures and triggers to improve query execution and scale transactional workflows.',
      'Integrated front-end components with backend services, ensuring reliable data flow and error handling.',
      'Investigated and resolved bugs from testing and production environments by analyzing logs and behavior.',
      'Participated in Agile development processes including sprint planning, task estimation, and code reviews.',
    ],
  },
  {
    period: '2019 — 2021',
    company: 'Softshala Nepal',
    location: 'Kathmandu, Nepal',
    title: 'Associate Software Engineer',
    bullets: [
      'Supported development of internal and client-facing web apps by implementing features and fixing defects.',
      'Assisted in building backend components and database queries to support application functionality.',
      'Helped deploy updates and fixes to live environments, responding to issues and ensuring system stability.',
      'Gained hands-on experience with version control, collaborative workflows, and maintainable production code.',
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Science and Information Technology',
    school: 'Tribhuvan University',
    location: 'Nepal',
    period: 'Completed',
  },
];
