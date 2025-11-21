
import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Experience: React.FC = () => {
  const [pathD, setPathD] = useState('');
  const [pathLength, setPathLength] = useState(0);
  const [drawProgress, setDrawProgress] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  const calculatePath = () => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    
    const points = dotRefs.current
      .map((dot) => {
        if (!dot) return null;
        const dotRect = dot.getBoundingClientRect();
        return {
          x: dotRect.left - containerRect.left + (dotRect.width / 2),
          y: dotRect.top - containerRect.top + (dotRect.height / 2)
        };
      })
      .filter((p): p is {x: number, y: number} => p !== null);

    if (points.length < 2) return;

    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p1 = points[i];
      const p2 = points[i+1];
      const midY = (p1.y + p2.y) / 2;
      d += ` C ${p1.x} ${midY}, ${p2.x} ${midY}, ${p2.x} ${p2.y}`;
    }
    setPathD(d);
  };

  useLayoutEffect(() => {
    calculatePath();
    const t1 = setTimeout(() => {
        calculatePath();
        if (pathRef.current) {
            setPathLength(pathRef.current.getTotalLength());
        }
    }, 500);
    const handleResize = () => {
        calculatePath();
        if (pathRef.current) setPathLength(pathRef.current.getTotalLength());
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(t1);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const start = rect.top;
        const height = rect.height;
        let progress = (windowHeight - start - (windowHeight * 0.2)) / height;
        progress = Math.max(0, Math.min(1, progress));
        setDrawProgress(Math.min(1, progress * 1.2)); 
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathLength]);

  return (
    <section id="experience" className="py-32 bg-transparent relative overflow-hidden">
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-24 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tighter mb-6">Professional Journey</h2>
          </ScrollReveal>
          <ScrollReveal delay="delay-100">
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Building enterprise scale solutions across the globe.
            </p>
          </ScrollReveal>
        </div>

        <div ref={containerRef} className="relative max-w-[1800px] mx-auto">
          
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block z-0 overflow-visible">
            <defs>
              <linearGradient id="cableGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#0ea5e9" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
            </defs>
            
            <path 
              d={pathD} 
              stroke="currentColor"
              strokeOpacity="0.2" 
              strokeWidth="4" 
              fill="none" 
              strokeLinecap="round"
              className="text-slate-300 dark:text-slate-700"
            />

            <path 
              ref={pathRef}
              d={pathD} 
              stroke="url(#cableGradient)" 
              strokeWidth="4" 
              fill="none" 
              strokeLinecap="round"
              filter="url(#glow)"
              style={{
                strokeDasharray: pathLength,
                strokeDashoffset: pathLength - (pathLength * drawProgress),
                transition: 'stroke-dashoffset 0.1s linear'
              }}
            />
          </svg>

          <div className="absolute left-8 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-800 md:hidden"></div>

          <div className="space-y-24">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <ScrollReveal key={exp.id} threshold={0.1} variant="fade-in">
                  <div className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    
                    <div className="w-full md:w-[48%] pl-20 md:pl-0">
                       <div className={`
                          relative bg-white/10 dark:bg-slate-900/30 backdrop-blur-lg p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-xl 
                          transition-all duration-500 group
                          hover:-translate-y-2 hover:shadow-[0_0_40px_-5px_rgba(14,165,233,0.4)] hover:border-primary-400/60
                          ${isEven ? 'md:mr-10' : 'md:ml-10'}
                       `}>
                          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                          <div className="flex flex-col xl:flex-row justify-between items-start gap-4 mb-8">
                            <div className="space-y-2">
                               <h3 className="text-3xl font-bold text-slate-900 dark:text-white transition-all duration-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 group-hover:scale-[1.02] origin-left">
                                 {exp.role}
                               </h3>
                               <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-bold text-xl transition-all duration-300 group-hover:text-primary-700 dark:group-hover:text-primary-300 group-hover:scale-[1.02] origin-left">
                                 <Briefcase className="w-6 h-6" />
                                 {exp.company}
                               </div>
                            </div>
                            <div className="text-sm font-bold text-slate-500 dark:text-slate-400 bg-white/20 dark:bg-white/5 px-5 py-3 rounded-2xl group-hover:bg-white/40 dark:group-hover:bg-white/10 group-hover:shadow-md transition-all whitespace-nowrap">
                               {exp.period}
                            </div>
                          </div>

                          <ul className="space-y-5 mb-8">
                            {exp.description.map((item, i) => (
                              <li key={i} className="flex items-start gap-4 text-slate-700 dark:text-slate-300 text-lg leading-relaxed group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                <ArrowRight className="w-5 h-5 text-primary-400 mt-1.5 flex-shrink-0 group-hover:translate-x-1 transition-transform stroke-[3px]" />
                                {item}
                              </li>
                            ))}
                          </ul>

                          {exp.skills && (
                            <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-200 dark:border-slate-700/50">
                              {exp.skills.map((skill) => (
                                <span key={skill} className="px-3 py-1 text-xs font-bold text-slate-600 dark:text-slate-300 bg-white/20 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700/50 shadow-sm">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          )}
                       </div>
                    </div>

                    <div className="absolute left-0 md:left-1/2 w-full md:w-0 flex justify-center items-center h-full pointer-events-none">
                         <div 
                           ref={el => { dotRefs.current[idx] = el; }}
                           className={`
                             relative z-20 w-16 h-16 rounded-full bg-white/20 dark:bg-slate-800/30 backdrop-blur-md border-4 border-white/40 dark:border-slate-700 shadow-[0_0_30px_rgba(14,165,233,0.3)] 
                             flex items-center justify-center group transition-transform duration-500 hover:scale-110 pointer-events-auto
                             ${isEven ? 'md:-translate-x-12' : 'md:translate-x-12'}
                           `}
                         >
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary-500 to-purple-600 shadow-inner group-hover:animate-ping"></div>
                            <div className="absolute inset-0 rounded-full border border-slate-200/50 dark:border-slate-600/50 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity"></div>
                         </div>
                    </div>

                    <div className="hidden md:block md:w-[48%]"></div>

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
