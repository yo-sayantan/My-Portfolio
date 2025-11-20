import React, { useRef, useState, useLayoutEffect } from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Experience: React.FC = () => {
  const [pathD, setPathD] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  const calculatePath = () => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    
    const points = dotRefs.current
      .map(dot => {
        if (!dot) return null;
        const rect = dot.getBoundingClientRect();
        return {
          x: rect.left - containerRect.left + (rect.width / 2),
          y: rect.top - containerRect.top + (rect.height / 2)
        };
      })
      .filter((p): p is {x: number, y: number} => p !== null);

    if (points.length < 2) return;

    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      d += ` L ${points[i].x} ${points[i].y}`;
    }
    setPathD(d);
  };

  useLayoutEffect(() => {
    calculatePath();
    const timeout = setTimeout(calculatePath, 800); 
    window.addEventListener('resize', calculatePath);
    return () => {
      window.removeEventListener('resize', calculatePath);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section id="experience" className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Work Experience</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        <div ref={containerRef} className="w-full max-w-[95%] 2xl:max-w-[1800px] mx-auto relative">
          
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block z-0 overflow-visible">
            <defs>
              <linearGradient id="zigzagGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#0ea5e9" />
              </linearGradient>
            </defs>
            <path 
              d={pathD} 
              stroke="url(#zigzagGradient)" 
              strokeWidth="3" 
              fill="none" 
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-60"
            />
          </svg>

          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-slate-200 md:hidden"></div>

          <div className="space-y-16 md:space-y-32">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <ScrollReveal key={exp.id} threshold={0.1}>
                  <div className={`relative flex flex-col md:flex-row items-center gap-10 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    
                    <div 
                      ref={(el) => { dotRefs.current[idx] = el; }}
                      className={`
                        absolute hidden md:block w-6 h-6 rounded-full bg-white border-4 border-primary-500 shadow-[0_0_15px_rgba(14,165,233,0.6)] z-10
                        left-1/2 -translate-x-1/2
                      `}
                      style={{
                        marginLeft: isEven ? '2.5rem' : '-2.5rem'
                      }}
                    ></div>

                    <div className="absolute left-4 w-5 h-5 bg-primary-500 rounded-full border-4 border-white shadow-md md:hidden -translate-x-1/2 mt-1.5 z-10"></div>
                    
                    <div className="w-full md:w-[calc(50%-3rem)]">
                      <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg transition-all duration-300 group hover:shadow-2xl hover:scale-[1.02] hover:border-primary-200 cursor-default relative overflow-hidden">
                        
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                        <div className="flex flex-col xl:flex-row xl:items-start justify-between mb-6 gap-4">
                          <div>
                            <h3 className="text-2xl font-bold text-secondary group-hover:text-primary-600 transition-colors duration-300">
                              {exp.role}
                            </h3>
                            <div className="flex items-center gap-2 text-lg font-bold text-primary-700 mt-2 group-hover:text-primary-800 transition-colors duration-300">
                              <Briefcase className="w-5 h-5" />
                              {exp.company}
                            </div>
                          </div>
                          
                          <div className="flex flex-col xl:items-end gap-2 text-sm font-medium text-slate-500">
                             <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg group-hover:bg-primary-50 transition-colors duration-300">
                               <Calendar className="w-4 h-4 text-slate-400 group-hover:text-primary-600" />
                               {exp.period}
                             </div>
                             <div className="flex items-center gap-2 px-2">
                               <MapPin className="w-4 h-4 text-slate-400" />
                               {exp.location}
                             </div>
                          </div>
                        </div>
                        
                        <ul className="space-y-4">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600 text-base leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0 shadow-sm group-hover:bg-primary-600 group-hover:scale-125 transition-all duration-300" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="hidden md:block md:w-[calc(50%-3rem)]"></div>

                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;