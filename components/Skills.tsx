import React from 'react';
import { SKILLS } from '../constants';
import { Terminal, Database, Cloud, Code2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    if (category.includes('Backend')) return <Terminal className="w-6 h-6" />;
    if (category.includes('Database')) return <Database className="w-6 h-6" />;
    if (category.includes('Cloud')) return <Cloud className="w-6 h-6" />;
    return <Code2 className="w-6 h-6" />;
  };

  return (
    <section id="skills" className="py-32 bg-transparent relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter mb-4">Technical Arsenal</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
               A comprehensive toolset for building enterprise-grade applications.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skillGroup, idx) => (
            <ScrollReveal key={idx} delay={`delay-[${(idx * 100)}ms]`}>
              {/* High Transparency Floating Glass Card */}
              <div 
                className="bg-white/30 backdrop-blur-xl p-8 rounded-[2rem] shadow-lg border border-white/40 hover:border-primary-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full group relative overflow-hidden"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 bg-white/50 text-primary-600 group-hover:scale-110 group-hover:bg-primary-50`}>
                  {getIcon(skillGroup.category)}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 text-sm font-bold text-slate-600 bg-white/50 border border-white/50 rounded-lg shadow-sm hover:bg-white transition-colors"
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