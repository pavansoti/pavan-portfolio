'use client';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['Angular', 'React', 'Next.js', 'TypeScript', 'RxJS', 'Tailwind CSS', 'HTML5', 'CSS3'],
      proficiency: 'Expert',
    },
    {
      category: 'Backend',
      skills: ['Java', 'Spring Boot', 'REST APIs', 'JPA/Hibernate', 'JDBC'],
      proficiency: 'Intermediate',
    },
    {
      category: 'Database',
      skills: ['MySQL', 'SQL', 'Database Design', 'Query Optimization'],
      proficiency: 'Intermediate',
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Visual Studio Code', 'Postman', 'Docker Basics', 'Linux'],
      proficiency: 'Advanced',
    },
    {
      category: 'Other Skills',
      skills: ['Responsive Design', 'Web Performance', 'RESTful API Design', 'Agile Methodology', 'Problem Solving'],
      proficiency: 'Advanced',
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`space-y-12 ${
            isVisible ? 'skills-animate' : 'opacity-0 translate-y-8'
          }`}>
          <div>
            <h2 className="text-4xl font-bold">Skills & Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:shadow-lg transition-shadow stagger-item"
                style={{
                  animationDelay: isVisible ? `${index * 0.1}s` : '0s',
                  opacity: isVisible ? 1 : 0,
                }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-primary">{category.category}</h3>
                    <Badge variant="outline">{category.proficiency}</Badge>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
