export interface Media {
  id: number;
  title: string;
  img: string;
  type: 'SERIE' | 'FILM';
  createdAt: string;
}

export interface Techno {
  id: number;
  name: string;
  icon: string;
}

export interface ProjetTechno {
  projetId: number;
  technoId: number;
  techno: Techno;
}

export interface Projet {
  id: number;
  title: string;
  img: string;
  description: string;
  githubUrl?: string;
  technologies: ProjetTechno[];
  createdAt: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  category: string;
}
