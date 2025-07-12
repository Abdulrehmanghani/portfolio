import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { personalInfo } from '../../data/portfolioData';
import { MapPin, Mail, Phone, Languages } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <Container>
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know more about my background and expertise"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Professional Summary</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {personalInfo.summary}
            </p>
            
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Languages</h3>
            <div className="flex flex-col space-y-2 mb-6">
              {personalInfo.languages.map((language, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Languages size={16} className="text-teal-600" />
                  <span className="text-gray-700">
                    <strong>{language.name}:</strong> {language.level}
                  </span>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Volunteer Work</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {personalInfo.volunteer.map((item, index) => (
                <li key={index} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <div className="bg-blue-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-blue-900 mb-6 pb-4 border-b border-blue-200">
                Personal Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-teal-600 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-700">{personalInfo.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="text-teal-600 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a 
                      href={`mailto:${personalInfo.email}`} 
                      className="text-blue-700 hover:underline break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="text-teal-600 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a 
                      href={`tel:${personalInfo.phone}`} 
                      className="text-blue-700 hover:underline"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;