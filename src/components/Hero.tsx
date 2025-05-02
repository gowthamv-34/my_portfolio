import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import profilePic from '../assets/my_img.jpg';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-16 flex flex-col items-center justify-center relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Profile Picture Container */}
          <div className={`mb-8 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'} animate-pulse-once`}>
            <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto group">
              {/* Gradient Border and Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg transform scale-115 opacity-80 blur-md group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 p-1">
                {/* Hexagonal Image */}
                <img
                  src={profilePic}
                  alt="Gowtham Vigneswaran"
                  className="w-full h-full object-contain object-center transition-all duration-300 group-hover:scale-105 group-hover:rotate-3"
                  style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 40%, 80% 100%, 20% 100%, 0% 40%)' }}
                />
              </div>
              {/* Subtle Overlay Frame */}
              <div className="absolute inset-0 border-2 border-transparent rounded-lg bg-gradient-to-r from-blue-600/20 to-teal-500/20 pointer-events-none group-hover:border-blue-600/50 transition-all duration-300"></div>
            </div>
          </div>

          <h1 className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="block text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
              Gowtham Vigneswaran
            </span>
            <span className="block text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mt-2">
              Software Engineer & Developer
            </span>
          </h1>
          
          <p className={`mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            I craft beautiful, user-friendly digital experiences with clean code and innovative solutions.
          </p>
          
          <div className={`mt-10 flex flex-wrap justify-center gap-4 transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a href="#contact" className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              Get in Touch
            </a>
            <a href="#projects" className="px-6 py-3 rounded-full border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              View My Work
            </a>
          </div>
          
          <div className={`mt-12 flex justify-center gap-6 transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a href="https://github.com/gowthamv-34" aria-label="Github" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://leetcode.com/gowthamvigneswaran" aria-label="LeetCode" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:gowthamvignesh611@gmail.com" aria-label="Email" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>

      {/* Custom Keyframe Animation for Pulse Effect */}
      <style>
        {`
          @keyframes pulse-once {
            0% { transform: scale(0.95); opacity: 0; }
            50% { transform: scale(1.05); opacity: 0.8; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-pulse-once {
            animation: pulse-once 1s ease-in-out;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;