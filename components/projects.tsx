'use client';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: 'Enterprise Dashboard Application',
      description: 'A comprehensive enterprise dashboard built with Angular for real-time data visualization and analytics.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Chart.js', 'REST API'],
      features: [
        'Real-time data updates using WebSockets',
        'Advanced filtering and search functionality',
        'Responsive design for all devices',
        'User authentication and role-based access',
      ],
      link: '#',
      github: '#',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce platform with Angular frontend and Java Spring Boot backend.',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'RESTful APIs', 'JWT'],
      features: [
        'Product catalog with search and filtering',
        'Shopping cart and checkout process',
        'Order management system',
        'Payment integration',
      ],
      link: '#',
      github: '#',
    },
    {
      title: 'Social Media Feed',
      description: 'Modern social media feed application with real-time updates and user interactions.',
      technologies: ['React', 'Next.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
      features: [
        'Real-time feed updates',
        'User profiles and followers',
        'Like and comment functionality',
        'Image upload and optimization',
      ],
      link: '#',
      github: '#',
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task management application with team features and notifications.',
      technologies: ['Angular', 'Firebase', 'TypeScript', 'Material Design'],
      features: [
        'Create and manage tasks',
        'Team collaboration features',
        'Real-time notifications',
        'Progress tracking and analytics',
      ],
      link: '#',
      github: '#',
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-secondary/5"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`space-y-12 ${
            isVisible ? 'projects-animate' : 'opacity-0 translate-y-8'
          }`}>
          <div>
            <h2 className="text-4xl font-bold">Projects</h2>
            <p className="text-lg text-muted-foreground mt-2">
              A selection of my recent and notable projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:shadow-lg transition-shadow flex flex-col stagger-item"
                style={{
                  animationDelay: isVisible ? `${index * 0.1}s` : '0s',
                  opacity: isVisible ? 1 : 0,
                }}
              >
                <div className="space-y-4 flex-1">
                  <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Key Features:</p>
                      <ul className="space-y-1">
                        {project.features.slice(0, 2).map((feature, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <div className="flex gap-3 mt-6 pt-6 border-t border-border">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 gap-2 bg-transparent"
                    onClick={() => window.open(project.link)}
                  >
                    <ExternalLink size={16} />
                    View Project
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 gap-2 bg-transparent"
                    onClick={() => window.open(project.github)}
                  >
                    <Github size={16} />
                    Code
                  </Button>
                </div> */}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
