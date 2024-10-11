import React from 'react';
import { personalInfo } from '@/data/portfolio';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <div className="mt-4">
          <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-primary">GitHub</a>
          <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-primary">LinkedIn</a>
          <a href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-primary">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;