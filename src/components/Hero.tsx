import React from 'react';
import { personalInfo } from '@/data/portfolio';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">{personalInfo.name}</h1>
        <h2 className="text-2xl text-muted-foreground mb-6">{personalInfo.title}</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">{personalInfo.bio}</p>
        <Button asChild>
          <a href="#contact">Hire Me</a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;