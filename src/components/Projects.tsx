import React, { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, Tag } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  
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
  
  const projects = [
    {
      title: 'Wheel Dressing Time Prediction for CNC Grinding Machine',
      description: 'Built machine learning and deep learning models at Petrus Technologies to predict wheel dressing time in CNC grinding machines, enhancing precision and efficiency in manufacturing.',
      image: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['machine-learning', 'python', 'tensorflow', 'scikit-learn'],
      github: 'https://github.com/gowthamv-34',
      demo: '#'
    },
    {
      title: 'Agentic AI Rule Engine API',
      description: 'Built an Agentic AI-based API at Petrus Technologies to design a rule engine, supporting dynamic template creation and triggering alerts/notifications based on predefined rules.',
      image: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['aws', 'python', 'api', 'backend'],
      github: 'https://github.com/gowthamv-34',
      demo: '#'
    },
    {
      title: 'AI Chatbot for Customer Data Interaction',
      description: 'Developed an AI-powered chatbot at Petrus Technologies to simplify customer interaction with complex datasets, enhancing accessibility and engagement.',
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['aws', 'python', 'nlp', 'chatbot'],
      github: 'https://github.com/gowthamv-34',
      demo: '#'
    },
    {
      title: 'Digital Twin with AWS TwinMaker',
      description: 'Developed a Digital Twin solution using AWS TwinMaker to create virtual representations of physical systems, enabling real-time monitoring and optimization.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['aws', 'iot', 'python', 'digital-twin'],
      github: 'https://github.com/gowthamv-34',
      demo: '#'
    },
    {
      title: 'Medi-Quick',
      description: 'A website for handling emergency cases in hospitals and providing guidelines to patients.',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['react', 'node', 'web', 'javascript'],
      github: 'https://github.com/gowthamv-34',
      demo: '#'
    },
    {
      title: 'Personal Portfolio',
      description: 'A personal portfolio website built using React JS.',
      image: 'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['react', 'web', 'javascript'],
      github: '#',
      demo: '#'
    },
    {
      title: 'PhotoGraphic Website',
      description: 'A real-time project for a professional photographer to showcase photos.',
      image: 'https://images.pexels.com/photos/17834/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['web', 'javascript', 'html', 'css'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Virtual Vision',
      description: 'A project to navigate blind people using OpenCV and Machine Learning.',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['machine-learning', 'python', 'opencv'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Online Food Ordering',
      description: 'A website for online food ordering.',
      image: 'https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['web', 'javascript', 'firebase', 'html'],
      github: '#',
      demo: '#'
    }
  ];
  
  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Machine Learning', value: 'machine-learning' },
    { name: 'AWS', value: 'aws' },
    { name: 'React', value: 'react' },
    { name: 'Web', value: 'web' },
    { name: 'Python', value: 'python' }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));
  
  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          My Projects
        </h2>
        
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-12"></div>
        
        {/* Filter buttons */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.value 
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className={`group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden h-52">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center gap-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <a href={project.github} aria-label="GitHub" className="p-2 bg-white bg-opacity-90 rounded-full text-gray-800 hover:bg-blue-600 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} aria-label="Live Demo" className="p-2 bg-white bg-opacity-90 rounded-full text-gray-800 hover:bg-blue-600 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                    >
                      <Tag size={12} className="mr-1" />
                      {tag.charAt(0).toUpperCase() + tag.slice(1)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-10 text-gray-600 dark:text-gray-400">
            No projects found with the selected filter.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;