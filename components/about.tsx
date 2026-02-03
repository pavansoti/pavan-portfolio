'use client';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Card } from '@/components/ui/card';

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  const highlights = [
    {
      title: 'Current Role',
      description: 'Fullstack Developer at Cyepro Solutions Pvt Ltd',
    },
    {
      title: 'Experience',
      description: '1 year 6 months of professional development',
    },
    {
      title: 'Primary Tech',
      description: 'Angular - 1.25+ years of hands-on experience',
    },
    {
      title: 'Backend Expertise',
      description: '3 months of Java Spring Boot & MySQL development',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`space-y-12 ${
            isVisible ? 'about-animate' : 'opacity-0 translate-y-8'
          }`}>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate fullstack developer with a strong foundation in modern web technologies.
              Throughout my career at Cyepro Solutions, I've specialized in building robust Angular applications
              while also expanding my skillset into React, Next.js, and backend technologies like Java Spring Boot and MySQL.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I thrive in collaborative environments and am committed to writing clean, maintainable code that solves real-world problems.
              Whether it's crafting responsive user interfaces or designing scalable backend systems, I bring dedication and expertise to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:shadow-lg transition-shadow stagger-item"
                style={{
                  animationDelay: isVisible ? `${index * 0.1}s` : '0s',
                  opacity: isVisible ? 1 : 0,
                }}
              >
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
