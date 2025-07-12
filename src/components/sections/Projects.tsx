import React, { useState } from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { projects } from '../../data/portfolioData';

const Projects: React.FC = () => {
  const categories = Array.from(new Set(projects.map(project => project.category)));
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const filteredProjects = activeCategory 
    ? projects.filter(project => project.category === activeCategory) 
    : projects;

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <Container>
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Some of my best work and accomplishments"
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
            All Projects
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} hoverable className="overflow-hidden h-full">
              <div className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <Badge variant="secondary" className="mb-2">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-blue-900">
                    {project.title}
                  </h3>
                </div>
                
                <div className="mb-6 flex-grow">
                  <ul className="space-y-2 text-gray-700">
                    {project.description.map((item, idx) => (
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
                
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;