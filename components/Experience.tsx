import React, { useRef, useState, useLayoutEffect } from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Experience: React.FC = () => {
  const [pathD, setPathD] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  // The Magic: Calculate SVG Path to connect the center of milestones
  const calculatePath = () => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    
    const points = dotRefs.current
      .map((dot) => {
        if (!dot) return null;
        const dotRect = dot.getBoundingClientRect();
        
        // The "Connection Point" is the center of the Milestone Dot
        return {
          x: dotRect.left - containerRect.left + (dotRect.width / 2),
          y: dotRect.top - containerRect.top + (dotRect.height / 2)
        };
      })
      .filter((p): p is {x: number, y: number} => p !== null);

    if (points.length < 2) return;

    // Draw a Bezier Curve between points for that smooth "Cable" look
    let d = `M ${points[0].x} ${points[0].y}`;
    
    for (let i = 0; i < points.length - 1; i++) {
      const p1 = points[i];
      const p2 = points[i+1];
      const midY = (p1.y + p2.y) / 2;
      
      // Cubic Bezier for S-Curve
      // C controlPoint1, controlPoint2, endPoint
      d += ` C ${p1.x} ${midY}, ${p2.x} ${midY}, ${p2.x} ${p2.y}`;
    }
    setPathD(d);
  };

  useLayoutEffect(() => {
    calculatePath();
    const t1 = setTimeout(calculatePath, 500);
    const t2 = setTimeout(calculatePath, 1000);
    window.addEventListener('resize', calculatePath);
    return () => {
      window.removeEventListener('resize', calculatePath);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <section id="experience" className="py-32 bg-transparent relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="mb-24 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter mb-6">Professional Journey</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Building enterprise scale solutions across the globe.
            </p>
          </div>
        </ScrollReveal>

        {/* Container */}
        <div ref={containerRef} className="relative max-w-[1600px] mx-auto">
          
          {/* The Cable (SVG) */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block z-0 overflow-visible">
            <defs>
              <linearGradient id="cableGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#0ea5e9" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
            </defs>
            <path 
              d={pathD} 
              stroke="url(#cableGradient)" 
              strokeWidth="4" 
              fill="none" 
              strokeLinecap="round"
              filter="url(#glow)"
              className="opacity-30"
            />
          </svg>

          {/* Mobile Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-slate-200 md:hidden"></div>

          <div className="space-y-24">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <ScrollReveal key={exp.id} threshold={0.1}>
                  <div className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* 1. The Card (45% Width) */}
                    <div className="w-full md:w-[45%] pl-20 md:pl-0">
                       <div className={`
                          relative bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-[2rem] border border-white/60 shadow-xl 
                          transition-all duration-500 group
                          hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(14,165,233,0.3)] hover:border-primary-300/50
                          ${isEven ? 'md:mr-16' : 'md:ml-16'}
                       `}>
                          {/* Subtle Gradient Glow on Hover */}
                          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                          <div className="flex flex-col xl:flex-row justify-between items-start gap-4 mb-6">
                            <div>
                               <h3 className="text-2xl font-bold text-slate-900 transition-all duration-300 group-hover:text-primary-600 group-hover:scale-105 origin-left">
                                 {exp.role}
                               </h3>
                               <div className="flex items-center gap-2 text-primary-600 font-bold mt-1 text-lg transition-all duration-300 group-hover:text-primary-700 group-hover:scale-105 origin-left">
                                 <Briefcase className="w-5 h-5" />
                                 {exp.company}
                               </div>
                            </div>
                            <div className="text-sm font-medium text-slate-500 bg-slate-100 px-4 py-2 rounded-xl group-hover:bg-white group-hover:shadow-sm transition-all">
                               {exp.period}
                            </div>
                          </div>

                          <ul className="space-y-4 mb-8">
                            {exp.description.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
                                <ArrowRight className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                                {item}
                              </li>
                            ))}
                          </ul>

                          {/* Tech Stack Pills */}
                          <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100">
                            {(exp.description && exp.description.length > 0) && (
                               // If skills aren't explicitly in the type yet (based on previous inputs), we skip or use a placeholder. 
                               // Assuming the type might have changed or we use data if available.
                               // For this visual update, we focus on the card interaction.
                               <></>
                            )}
                            {/* We can re-add the visual pills if data exists in constants. Assuming 'skills' property might be added later or inferred */}
                          </div>
                       </div>
                    </div>

                    {/* 2. The Milestone Dot (Center) */}
                    <div className="absolute left-0 md:left-1/2 w-full md:w-0 flex justify-center">
                         <div 
                           ref={el => { dotRefs.current[idx] = el; }}
                           className="relative z-20 w-16 h-16 rounded-full bg-white border-4 border-slate-100 shadow-[0_0_30px_rgba(14,165,233,0.3)] flex items-center justify-center group transition-transform hover:scale-110"
                         >
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary-500 to-purple-600 shadow-inner group-hover:animate-ping"></div>
                            <div className="absolute inset-0 rounded-full border border-slate-200 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity"></div>
                         </div>
                    </div>

                    {/* 3. Empty Space (45% Width) */}
                    <div className="hidden md:block md:w-[45%]"></div>

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