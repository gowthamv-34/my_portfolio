import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
              Gowtham V.
            </a>
          </div>
          
          <div className="mb-4 md:mb-0">
            <nav className="flex flex-wrap justify-center gap-6">
              <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
              <a href="#experience" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
              <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
        
        <hr className="my-6 border-gray-300 dark:border-gray-800" />
        
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center">
            <span>{currentYear} &copy; All Rights Reserved</span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              Made with <Heart size={16} className="text-red-500 mx-1" /> by Gowtham Vigneswaran
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;