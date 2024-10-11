import React from 'react';
import { personalInfo } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-background py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">{personalInfo.name}</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#skills" className="hover:text-primary">Skills</a></li>
            <li><a href="#projects" className="hover:text-primary">Projects</a></li>
            <li><a href="#blog" className="hover:text-primary">Blog</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </nav>
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;