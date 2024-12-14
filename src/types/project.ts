export interface Project {
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  skills: string[];
  imageUrl: string;
}