import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { education, certificates } from '../../data/portfolioData';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <Container>
        <SectionHeading 
          title="Education & Certifications" 
          subtitle="My academic background and professional development"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-6 flex items-center">
              <GraduationCap className="mr-2" size={24} />
              Education
            </h3>
            
            {education.map((edu, index) => (
              <Card key={index} className="mb-6 p-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-bold text-gray-900">
                    {edu.institution}
                  </h4>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {edu.period}
                  </div>
                </div>
                
                <p className="text-blue-900 font-medium mb-3">
                  {edu.degree}
                </p>
                
                {edu.details && (
                  <div className="mt-4 text-gray-700 border-t border-gray-200 pt-4">
                    <p><strong>Final Year Project:</strong></p>
                    <p>{edu.details}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-6 flex items-center">
              <Award className="mr-2" size={24} />
              Certifications
            </h3>
            
            <div className="space-y-6">
              {certificates.map((cert, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold text-gray-900">
                      {cert.title}
                    </h4>
                    <div className="text-teal-600 font-medium">
                      {cert.year}
                    </div>
                  </div>
                  
                  <p className="text-blue-900 font-medium mb-3">
                    {cert.issuer}
                  </p>
                  
                  <p className="text-gray-700">
                    {cert.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Education;