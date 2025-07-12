import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { experiences } from '../../data/portfolioData';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <Container>
        <SectionHeading 
          title="Professional Experience" 
          subtitle="My journey through various roles and companies"
        />
        
        <div className="relative border-l-2 border-blue-900 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {experiences.map((experience, index) => (
            <div 
              key={index}
              className="relative transition-all duration-300 hover:translate-x-1"
            >
              {/* Timeline dot */}
              <div className="absolute w-5 h-5 rounded-full bg-teal-600 left-0 transform -translate-x-[calc(0.75rem+1px)]" />
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-blue-900 mb-1">
                  {experience.role}
                </h3>
                
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Building size={16} className="mr-1" />
                    <span>{experience.company}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Calendar size={16} className="mr-1" />
                    <span>{experience.period}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-1" />
                    <span>{experience.location}</span>
                  </div>
                </div>
                
                <ul className="space-y-2 text-gray-700">
                  {experience.description.map((item, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start"
                    >
                      <span className="inline-block w-2 h-2 rounded-full bg-teal-600 mt-2 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;