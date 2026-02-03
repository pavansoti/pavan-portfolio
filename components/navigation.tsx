'use client';

import React from "react"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if dark mode is enabled
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      // sessionStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      // sessionStorage.setItem('theme', 'dark');
    }
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <p className="text-2xl font-bold text-primary">
            Soti Pavan Singh
          </p>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={scrollToSection}
                className="relative text-foreground font-medium transition-colors duration-300 group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-secondary hover:bg-secondary transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun
                    size={20}
                    className="inline-block transition-transform duration-300 hover:rotate-12"
                  />
                ) : (
                  <Moon
                    size={20}
                    className="inline-block transition-transform duration-300 hover:rotate-12"
                  />
                )}
              </button>
            )}
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-secondary hover:bg-secondary transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun
                    size={20}
                    className="inline-block transition-transform duration-300 hover:rotate-12"
                  />
                ) : (
                  <Moon
                    size={20}
                    className="inline-block transition-transform duration-300 hover:rotate-12"
                  />
                )}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-border pt-4">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={scrollToSection}
                className="block px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 transition-all duration-300 border border-transparent hover:border-primary/50 group"
                style={{
                  animation: isOpen ? `slideInLeft ${0.3 + index * 0.05}s ease-out forwards` : 'none',
                }}
              >
                <span className="group-hover:text-primary transition-colors">{item.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
