'use client';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      title: 'Fullstack Developer',
      company: 'Cyepro Solutions Pvt Ltd',
      period: '2022 - Present',
      duration: '1 year 6 months',
      description: 'Developed and maintained multiple enterprise-level Angular applications',
      skills: ['Angular', 'TypeScript', 'RxJS', 'REST APIs'],
      highlights: [
        'Built responsive web applications serving 100+ users',
        'Optimized application performance reducing load time by 40%',
        'Collaborated with backend team on API integration',
      ],
    },
    {
      title: 'Backend Developer (Contract)',
      company: 'Cyepro Solutions Pvt Ltd',
      period: '2024 - 2024',
      duration: '3 months',
      description: 'Developed backend services using Java Spring Boot framework',
      skills: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'JPA/Hibernate'],
      highlights: [
        'Designed and implemented RESTful APIs',
        'Optimized database queries improving response time',
        'Implemented database schema and migrations',
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 bg-secondary/5"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`space-y-12 ${
            isVisible ? 'experience-animate' : 'opacity-0 translate-y-8'
          }`}>
          <div>
            <h2 className="text-4xl font-bold">Experience</h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:shadow-lg transition-shadow stagger-item"
                style={{
                  animationDelay: isVisible ? `${index * 0.15}s` : '0s',
                  opacity: isVisible ? 1 : 0,
                }}
              >
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
                      <p className="text-lg text-muted-foreground">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">{exp.period}</p>
                      <p className="text-sm text-muted-foreground">{exp.duration}</p>
                    </div>
                  </div>

                  <p className="text-foreground">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <ul className="space-y-2 text-muted-foreground">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
