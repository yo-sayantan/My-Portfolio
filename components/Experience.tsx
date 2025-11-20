import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-slate-50/50 skew-y-3 transform origin-top-right z-0 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Work Experience</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="relative space-y-12">
            {/* Vertical Line with Gradient */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-slate-200 -translate-x-1/2 hidden md:block"></div>

            {EXPERIENCES.map((exp, idx) => (
              <ScrollReveal key={exp.id} threshold={0.2}>
                <div className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot with Glow */}
                  <div className="absolute left-4 md:left-1/2 w-5 h-5 bg-primary-500 rounded-full border-4 border-white shadow-[0_0_15px_rgba(14,165,233,0.5)] -translate-x-1/2 mt-1.5 hidden md:block z-10"></div>
                  
                  {/* Content Card */}
                  <div className="flex-1">
                    <div className={`bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary-100 transition-all duration-300 group ${idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 gap-2">
                        <div>
                          <h3 className="text-xl font-bold text-secondary group-hover:text-primary-600 transition-colors">{exp.role}</h3>
                          <div className="flex items-center gap-2 text-primary-700 font-bold mt-1">
                            <Briefcase className="w-4 h-4" />
                            {exp.company}
                          </div>
                        </div>
                        <div className="flex flex-col sm:items-end gap-1 text-sm text-slate-500">
                           <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-50 rounded-md">
                             <Calendar className="w-3.5 h-3.5 text-slate-400" />
                             {exp.period}
                           </div>
                           <div className="flex items-center gap-1.5 px-2 py-1">
                             <MapPin className="w-3.5 h-3.5 text-slate-400" />
                             {exp.location}
                           </div>
                        </div>
                      </div>
                      
                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0 shadow-sm" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Spacer for opposite side */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;