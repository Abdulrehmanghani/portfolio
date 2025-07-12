import React from 'react';
import Container from '../ui/Container';
import { socialLinks } from '../../data/portfolioData';
import * as LucideIcons from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">
              Abdul<span className="text-teal-500">Rehman</span>
            </h3>
            <p className="mt-2 text-gray-400">Computer Vision and Machine Learning Engineer</p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => {
              const IconComponent = LucideIcons[link.icon as keyof typeof LucideIcons];
              return (
                <a 
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-500 transition-colors"
                  aria-label={link.platform}
                >
                  {IconComponent && <IconComponent size={20} />}
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {currentYear} Abdul Rehman. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;