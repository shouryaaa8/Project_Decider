import { Project } from '../types/project';

export const projectDatabase: Project[] = [
  {
    title: 'Weather Dashboard',
    description: 'Build a weather application that displays current weather and forecasts using a weather API.',
    difficulty: 'Beginner',
    skills: ['javascript', 'api', 'react', 'css'],
    imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'E-commerce Platform',
    description: 'Create a full-featured online store with product listings, cart, and checkout.',
    difficulty: 'Advanced',
    skills: ['react', 'typescript', 'api', 'MongoDB'],
    imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Task Management App',
    description: 'Develop a Kanban-style task manager with drag-and-drop functionality.',
    difficulty: 'Intermediate',
    skills: ['react', 'typescript', 'css'],
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Portfolio Website',
    description: 'Design and build a professional portfolio website to showcase projects.',
    difficulty: 'Beginner',
    skills: ['react', 'css', 'html'],
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Real-time Chat Application',
    description: 'Build a messaging app with real-time communication features.',
    difficulty: 'Advanced',
    skills: ['react', 'typescript', 'python', 'MongoDB'],
    imageUrl: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Blog Platform',
    description: 'Create a full-featured blog with markdown support and user authentication.',
    difficulty: 'Intermediate',
    skills: ['react', 'MongoDB', 'api', 'authentication'],
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'Build an interactive dashboard with charts and graphs using D3.js.',
    difficulty: 'Advanced',
    skills: ['javascript', 'd3', 'react', 'css'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Recipe Finder App',
    description: 'Develop a recipe search application with filtering and favorites.',
    difficulty: 'Beginner',
    skills: ['javascript', 'api', 'css'],
    imageUrl: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Create a dashboard that aggregates data from various social media platforms.',
    difficulty: 'Advanced',
    skills: ['react', 'api', 'typescript', 'authentication', 'python'],
    imageUrl: 'https://media.istockphoto.com/id/1346575545/photo/3d-render-of-social-media-business-concept.jpg?s=612x612&w=0&k=20&c=1083IFHVsot9K6aguY59kOLCWIijhPQT69oYJB9SYS0=',
  },
  {
    title: 'File Storage System',
    description: 'Build a cloud storage system with file upload and sharing capabilities.',
    difficulty: 'Advanced',
    skills: ['react', 'MongoDB', 'authentication', 'api'],
    imageUrl: 'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Markdown Note Editor',
    description: 'Create a real-time markdown editor with preview and organization features.',
    difficulty: 'Intermediate',
    skills: ['react', 'javascript', 'css'],
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Budget Tracker',
    description: 'Develop a personal finance app with expense tracking and visualizations.',
    difficulty: 'Intermediate',
    skills: ['react', 'typescript', 'MongoDB', 'css', 'python'],
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Machine Learning Model',
    description: 'Train a model using libraries like scikit-learn or TensorFlow for classification, regression, or clustering tasks.',
    difficulty: 'Advanced',
    skills: ['react', 'typescript', 'MongoDB', 'css', 'python'],
    imageUrl: 'https://cdn.pixabay.com/photo/2024/01/29/22/47/ai-generated-8540915_640.jpg',
  },
];

export const allSkills = Array.from(
  new Set(projectDatabase.flatMap((project) => project.skills))
).sort();