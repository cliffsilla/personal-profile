// Common types used across components
export interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export interface Skill {
  category: string;
  icon: React.ReactNode;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  content: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}
