'use client';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail, Phone } from 'lucide-react';

export function Hero() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="home"
      ref={ref}
      className="hero-tile-bg min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 pt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div
          className={`text-center space-y-6 ${
            isVisible ? 'hero-animate' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                Fullstack Developer
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground">
              Crafting elegant solutions with Angular, React, and modern backend technologies
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            1.5+ years of professional experience building scalable applications at Cyepro Solutions Pvt Ltd
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="gap-2"
              onClick={() => {
                const element = document.querySelector('#projects');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work <ArrowRight size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.querySelector('#contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-8">
            <a
              href="https://github.com/pavansoti"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary transition-colors hover:text-primary-foreground"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/soti-pavan-singh-357079270"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary transition-colors hover:text-primary-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:pavansoti@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-primary transition-colors hover:text-primary-foreground"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="tel:+917032159522"
              className="p-3 rounded-full bg-secondary hover:bg-primary transition-colors hover:text-primary-foreground"
              aria-label="Phone"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
