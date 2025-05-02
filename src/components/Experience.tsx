import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
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
  
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Petrus Technologies',
      location: 'Coimbatore',
      period: 'Mar 2024 - Mar 2025',
      description: [
        'Developed machine learning and deep learning models to predict wheel dressing time in CNC grinding machines, optimizing manufacturing processes.',
        'Developed an Agentic AI-based API to create a rule engine, enabling dynamic template creation and rule-triggered alerts/notifications for real-time monitoring.',
        'Created an AI chatbot to enable customers to interact with data seamlessly, improving user experience and operational efficiency.',
        'Designed and implemented IoT solutions using AWS IoT Core and AWS Greengrass for real-time device management and data processing.',
        'Developed Digital Twin models using AWS TwinMaker to simulate and optimize physical systems in a cloud environment.',
        'Built and maintained cloud backend systems using AWS services to support scalable applications.'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'Petrus Technologies',
      location: 'Coimbatore',
      period: 'Sep 2023 - Feb 2024',
      description: [
        'Assisted in configuring AWS IoT Core for device connectivity and data ingestion under supervision.',
        'Supported the deployment of edge computing solutions using AWS Greengrass for IoT devices.',
        'Contributed to initial Digital Twin prototyping with AWS TwinMaker, exploring real-time system simulations.',
        'Learned and applied cloud backend development techniques to support team projects.'
      ]
    }
  ];
  
  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Work Experience
        </h2>
        
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-12"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
            
            {/* Experience items */}
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative mb-12 md:mb-0 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-600 border-4 border-white dark:border-gray-800 z-10"></div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12 md:pr-0' : 'md:pr-12 md:pl-0'} pl-10 mb-10 md:mb-24`}>
                    <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <Briefcase className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.title}</h3>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <div className="w-5 flex justify-center">
                            <Calendar className="text-gray-500 dark:text-gray-400" size={16} />
                          </div>
                          <span className="ml-2 text-gray-600 dark:text-gray-300">{exp.period}</span>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="w-5 flex justify-center">
                            <MapPin className="text-gray-500 dark:text-gray-400" size={16} />
                          </div>
                          <span className="ml-2 text-gray-600 dark:text-gray-300">{exp.company}, {exp.location}</span>
                        </div>
                      </div>
                      
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-1.5 mr-2"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;