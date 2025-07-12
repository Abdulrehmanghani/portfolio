import React, { useState } from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import * as LucideIcons from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thanks for your message! This form is a demo and does not actually send emails.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-blue-50">
      <Container>
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Let's discuss how we can work together"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {socialLinks.map((link) => {
                const IconComponent = LucideIcons[link.icon as keyof typeof LucideIcons];
                return (
                  <div key={link.platform} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                      {IconComponent && <IconComponent size={24} className="text-white" />}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">{link.platform}</h4>
                      <a 
                        href={link.url}
                        target={link.platform !== 'Phone' && link.platform !== 'Email' ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:underline"
                      >
                        {link.platform === 'LinkedIn' && 'linkedin.com/in/abdulrehman197'}
                        {link.platform === 'GitHub' && 'github.com/Abdulrehmanghani'}
                        {link.platform === 'Email' && personalInfo.email}
                        {link.platform === 'Phone' && personalInfo.phone}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-6">
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <Button 
                type="submit"
                variant="primary"
                className="w-full sm:w-auto"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;