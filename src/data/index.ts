import { Project, Skill, Testimonial } from '../types';
import { icons } from '../utils/icons';

export const skills: Skill[] = [
  {
    category: 'Frontend',
    icon: icons.frontend(),
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
  },
  {
    category: 'Backend',
    icon: icons.backend(),
    items: ['Node.js', 'Python', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'Mobile',
    icon: icons.mobile(),
    items: ['React Native', 'Flutter', 'iOS', 'Android'],
  },
  {
    category: 'Other',
    icon: icons.other(),
    items: ['Git', 'Docker', 'AWS', 'CI/CD'],
  },
];

export const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Firebase', 'Tailwind'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather monitoring with interactive maps',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'TypeScript', 'APIs'],
    githubUrl: '#',
    liveUrl: '#',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager at TechCorp',
    content: 'Working with John was an absolute pleasure. His attention to detail and technical expertise helped us deliver our project ahead of schedule.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Michael Chen',
    role: 'CTO at StartupX',
    content: 'John\'s ability to solve complex problems while maintaining clean, maintainable code is impressive. He\'s a valuable asset to any team.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Emily Davis',
    role: 'Frontend Lead at WebSolutions',
    content: 'The quality of work and professionalism John brings to projects is outstanding. He consistently delivers beyond expectations.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
  },
];
