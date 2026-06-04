export interface Experience {
  id: string;
  userId: string;
  title: string;
  company: string | null; // Company name
  role: string;
  type: string;
  startDate: string;
  endDate: string | null;
  description: string;
  imageUrl: string | null;
}

export interface User {
  id: string;
  name: string;
  birthDate: string;
  address: string;
  phone: string;
  linkedInUrl: string | null;
  description: string;
  university: string;
  skills: Skill[];
  imageUrl: string | null;
  experiences?: Experience[];
}

export interface Skill {
  technology: string;
}
