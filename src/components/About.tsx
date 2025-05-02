import React, { useEffect, useRef, useState } from 'react';
import { User, Award, BookOpen } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            About Me
          </h2>
          
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-10"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-sm transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mb-4">
                <User className="text-blue-600 dark:text-blue-300" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Who I Am</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                I'm a passionate software engineer with expertise in building responsive web applications and solving complex problems.
              </p>
            </div>
            
            <div className={`flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-sm transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mb-4">
                <Award className="text-blue-600 dark:text-blue-300" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">My Experience</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                With years of experience in software development, I've worked on diverse projects across multiple domains and technologies.
              </p>
            </div>
            
            <div className={`flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-sm transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mb-4">
                <BookOpen className="text-blue-600 dark:text-blue-300" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">My Education</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                I hold a degree in Computer Science and continuously expand my knowledge through courses and self-learning.
              </p>
            </div>
          </div>
          
          <div className={`mt-12 text-gray-700 dark:text-gray-300 space-y-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p>
              I'm a Software Engineer with a passion for creating elegant solutions to complex problems. My journey in technology began several years ago, and I've been developing my skills in various programming languages and frameworks ever since.
            </p>
            <p>
              My approach to development focuses on writing clean, maintainable code that delivers exceptional user experiences. I believe in continuous learning and staying updated with the latest industry trends and best practices.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities to maintain a healthy work-life balance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;