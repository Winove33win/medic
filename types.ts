export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  image: string;
  crm: string;
  bio: string;
  education: string[];
  languages: string[];
  availability: string[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  fullDescription?: string;
  features?: string[];
  duration?: string;
  preparation?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export enum Page {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  SERVICES = 'SERVICES',
  TEAM = 'TEAM',
  CONTACT = 'CONTACT',
  DOCTOR_DETAILS = 'DOCTOR_DETAILS',
  SERVICE_DETAILS = 'SERVICE_DETAILS',
  ADMIN_LOGIN = 'ADMIN_LOGIN',
  ADMIN_PANEL = 'ADMIN_PANEL'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
