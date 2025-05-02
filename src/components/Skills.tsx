import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Layout, Server, Globe, Settings } from 'lucide-react';

const Skills = () => {
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

  const skillCategories = [
    {
      icon: <Code />,
      title: 'Frontend Development',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React.js', level: 80 },
        { name: 'TypeScript', level: 75 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      icon: <Server />,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'Java', level: 70 },
        { name: 'Express.js', level: 75 },
        { name: 'RESTful APIs', level: 85 }
      ]
    },
    {
      icon: <Database />,
      title: 'Database',
      skills: [
        { name: 'MongoDB', level: 75 },
        { name: 'MySQL', level: 80 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'Redis', level: 65 },
        { name: 'Firebase', level: 75 }
      ]
    },
    {
      icon: <Layout />,
      title: 'UI/UX Design',
      skills: [
        { name: 'Figma', level: 70 },
        { name: 'Adobe XD', level: 65 },
        { name: 'Responsive Design', level: 85 },
        { name: 'UI Prototyping', level: 75 },
        { name: 'Wireframing', level: 80 }
      ]
    },
    {
      icon: <Globe />,
      title: 'DevOps & Deployment',
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'CI/CD', level: 75 },
        { name: 'Vercel/Netlify', level: 80 }
      ]
    },
    {
      icon: <Settings />,
      title: 'Other Skills',
      skills: [
        { name: 'Agile/Scrum', level: 80 },
        { name: 'Problem Solving', level: 90 },
        { name: 'Team Collaboration', level: 85 },
        { name: 'Technical Writing', level: 75 },
        { name: 'Project Management', level: 80 }
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          My Skills
        </h2>
        
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-3 text-blue-600 dark:text-blue-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <div 
                        className="h-2 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 150) + (skillIndex * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;