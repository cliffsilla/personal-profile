import React from 'react';
import { Quote } from 'lucide-react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { testimonials } from '../data';
import { AnimatedSection } from './ui/AnimatedSection';

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      title="What People Say"
      className="bg-gray-900"
      titleClassName="text-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <AnimatedSection
            key={testimonial.name}
            animation="fade-up"
            delay={index * 200}
          >
            <Card className="bg-gray-800 p-6 relative">
              <Quote className="absolute top-4 right-4 text-gray-700 w-8 h-8" />
              <p className="mb-6 text-gray-300">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
