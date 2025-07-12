import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  className = '' 
}) => {
  return (
    <div className={`mb-12 text-center ${className}`}>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          {subtitle}
        </p>
      )}
      <div className="mt-6 mx-auto w-24 h-1 bg-teal-600 rounded-full"></div>
    </div>
  );
};

export default SectionHeading;