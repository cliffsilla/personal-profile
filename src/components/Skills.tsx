import React from 'react';
import { Code2, Layout, Server, Smartphone } from 'lucide-react';
import { AnimatedSection } from './ui/AnimatedSection';

const skills = [
  {
    category: 'Frontend',
    icon: <Layout className="w-6 h-6" />,
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
  },
  {
    category: 'Backend',
    icon: <Server className="w-6 h-6" />,
    items: ['Node.js', 'Python', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'Mobile',
    icon: <Smartphone className="w-6 h-6" />,
    items: ['React Native', 'Flutter', 'iOS', 'Android'],
  },
  {
    category: 'Other',
    icon: <Code2 className="w-6 h-6" />,
    items: ['Git', 'Docker', 'AWS', 'CI/CD'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-16">Skills & Expertise</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <AnimatedSection
              key={skill.category}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-cyan-100 rounded-lg text-cyan-600">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
