'use client';

import React from "react"

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast'

export function Contact() {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        'service_eb5fsal',     // SERVICE ID
        'template_h18ors8',    // TEMPLATE ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString()
        },
        '7u8rtPDoPERkqWvyj'       // PUBLIC KEY
      );

      toast({
        title: 'Message sent 🎉',
        description: 'Thanks for reaching out! I’ll get back to you soon.',
      });
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Failed to send message',
        description: 'Something went wrong. Please try again later.',
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pavansoti@gmail.com',
      href: 'mailto:pavansoti@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(+91) 70321-59522',
      href: 'tel:+917032159522',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, Telangana',
      href: 'https://www.google.com/maps/place/SRI+VENKATESWARA+EXECUTIVE+MENS+PG+AND+HOSTAL/@17.4310595,78.3272603,18.41z/data=!4m6!3m5!1s0x3bcb93003ec7a2eb:0x4d8fadbb6cc2483a!8m2!3d17.4304398!4d78.3267175!16s%2Fg%2F11x21yyjzy?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D',
      external: true, 
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`space-y-12 ${
            isVisible ? 'contact-animate' : 'opacity-0 translate-y-8'
          }`}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    target={info.external ? '_blank' : undefined}
                    rel={info.external ? 'noopener noreferrer' : undefined}
                    className="group stagger-item"
                    style={{
                      animationDelay: isVisible ? `${index * 0.1}s` : '0s',
                      opacity: isVisible ? 1 : 0,
                    }}
                  >
                    <Card className="p-6 bg-card border-border hover:shadow-lg hover:border-primary transition-all cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Icon size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="font-semibold text-foreground">{info.value}</p>
                        </div>
                      </div>
                    </Card>
                  </a>
                );
              })}

              {/* Social Links */}
              <div className="space-y-4 pt-6">
                <p className="text-sm font-semibold text-muted-foreground">Follow me:</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/pavansoti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/soti-pavan-singh-357079270"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 stagger-item"
              style={{
                animationDelay: isVisible ? '0.2s' : '0s',
                opacity: isVisible ? 1 : 0,
              }}>
              <Card className="p-8 bg-card border-border">
                <form suppressHydrationWarning onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={submitted}
                  >
                    {submitted ? '✓ Message Sent!' : 'Send Message'}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
