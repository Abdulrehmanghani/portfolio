import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import * as LucideIcons from 'lucide-react';

const Hero: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => {
      if (scrollRef.current) {
        observer.unobserve(scrollRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center section-gradient pt-20">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            ref={scrollRef} 
            className="opacity-0 transition-opacity duration-1000"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-4">
              Hello, I'm <span className="gradient-text">Abdul Rehman</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-secondary mb-6">
              Computer Vision and Machine Learning Engineer
            </h2>
            <p className="text-accent mb-8 leading-relaxed">
              {personalInfo.summary}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => window.location.href = '#projects'}
                variant="primary"
                size="lg"
              >
                View My Work
              </Button>
              <Button 
                onClick={() => window.location.href = '#contact'}
                variant="outline"
                size="lg"
              >
                Contact Me
              </Button>
            </div>
            
            <div className="mt-8 flex items-center gap-4">
              {socialLinks.map((link) => {
                const IconComponent = LucideIcons[link.icon as keyof typeof LucideIcons];
                return (
                  <a 
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-light transition-colors"
                    aria-label={link.platform}
                  >
                    {IconComponent && <IconComponent size={24} />}
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="hidden md:flex justify-center">
            <img 
              src="/profile.jpg" 
              alt="Abdul Rehman" 
              className="profile-image w-96 h-auto object-cover"
            />
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-primary" size={32} />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Hero;