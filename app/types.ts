export interface Skill {
  id: number;
  name: string;
  description: string;
  color: string;
  link: string;
}

type Stack = {
  name: string;
  color: string;
}

export interface Project {
  id: number;
  name: string;
  stack: Stack[];
  description: string;
  img: string;
  url: string;
  progress: boolean;
  date: string;
}
