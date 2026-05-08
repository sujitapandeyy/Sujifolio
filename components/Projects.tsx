'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github, Eye } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  category: 'Full Stack' | 'Frontend' | 'Mobile' | string;
}

const Projects: React.FC = () => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Full Stack',
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
      tech: ['React', 'TypeScript', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Frontend',
    },
    {
      id: 3,
      title: 'Data Analytics',
      description:
        'An interactive dashboard for data visualization and analytics, featuring charts, graphs, and real-time data processing.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop',
      tech: ['React', 'D3.js', 'Python', 'FastAPI'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Full Stack',
    },
    {
      id: 4,
      title: 'Mobile Banking App',
      description:
        'A secure mobile banking application with biometric authentication, transaction history, and budget tracking features.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop',
      tech: ['React Native', 'Node.js', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Mobile',
    },
  ]);
  const truncateWords = (text: string, limit = 10): string => {
    if (!text) return "";

    const words = text.split(" ");
    return words.length > limit
      ? words.slice(0, limit).join(" ") + "..."
      : text;
  };
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Full Stack', 'Frontend', 'Mobile'];

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? 'default' : 'outline'}
              className={`px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 ${filter === category
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 group overflow-hidden hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-38 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                      variant="outline"
                    >
                      <Eye size={16} />
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                      variant="outline"
                    >
                      <Github size={16} />
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                      variant="outline"
                    >
                      <ExternalLink size={16} />
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-gray-900">{project.title}</h3>
                  <span className="px-1 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {truncateWords(project.description, 12)}
                </p>                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-1 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mb-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-300 text-blue-600 hover:bg-blue-50 flex items-center gap-2 text-xs"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center gap-2 text-xs"
                  >
                    <Github size={16} />
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg hover:scale-105 transition-all duration-300"
          >
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
