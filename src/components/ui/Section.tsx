import React from 'react';

interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

export function Section({ 
  id, 
  title, 
  children, 
  className = '', 
  titleClassName = '' 
}: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-16 ${titleClassName}`}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
