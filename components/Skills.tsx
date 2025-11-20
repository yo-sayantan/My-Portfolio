import React from 'react';
import { SKILLS } from '../constants';
import { Terminal, Database, Cloud, Cpu, Code2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    if (category.includes('Backend')) return <Terminal className="w-6 h-6" />;
    if (category.includes('Database')) return <Database className="w-6 h-6" />;
    if (category.includes('Cloud')) return <Cloud className="w-6 h-6" />;
    return <Code2 className="w-6 h-6" />;
  };

  const getColor = (idx: number) => {
    const colors = [
      'bg-blue-50 text-blue-600 border-blue-100',
      'bg-indigo-50 text-indigo-600 border-indigo-100',
      'bg-purple-50 text-purple-600 border-purple-100',
      'bg-teal-50 text-teal-600 border-teal-100',
    ];
    return colors[idx % colors.length];
  };

  return (
    <section id="skills" className="py-20 bg-slate-50/50 border-y border-slate-200/50">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Technical Arsenal</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
               A comprehensive toolset for building enterprise-grade applications.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skillGroup, idx) => (
            <ScrollReveal key={idx} delay={`delay-[${(idx * 100)}ms]`}>
              <div 
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-primary-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full group relative overflow-hidden"
              >
                {/* Subtle gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${getColor(idx)}`}>
                  {getIcon(skillGroup.category)}
                </div>
                <h3 className="text-lg font-bold text-secondary mb-4 group-hover:text-primary-600 transition-colors relative z-10">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {skillGroup.items.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-lg group-hover:bg-white group-hover:shadow-sm group-hover:text-primary-700 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;