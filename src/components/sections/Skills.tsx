import React, { useState } from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { skills } from '../../data/portfolioData';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(skills.map(skill => skill.category)));
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const filteredSkills = activeCategory 
    ? skills.filter(skill => skill.category === activeCategory) 
    : skills;

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <Container>
        <SectionHeading 
          title="Technical Skills" 
          subtitle="My expertise in various technologies and tools"
        />
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === null
                ? 'bg-blue-900 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setActiveCategory(null)}
          >
            All Skills
          </button>
          
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-blue-900">{skill.name}</h3>
                <span className="text-sm font-medium text-gray-500">
                  {skill.proficiency}%
                </span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-teal-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              
              <p className="mt-3 text-sm text-gray-600">{skill.category}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;