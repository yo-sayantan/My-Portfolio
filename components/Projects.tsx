import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Briefcase, Code2, Github, Layers, Lock } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Work' | 'Personal'>('All');
  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.type === filter);

  const renderDoodle = (project: Project) => {
    // Specific visualizations based on project ID
    switch (project.id) {
      case 'book-exchange':
        return (
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
               <path d="M50 150 Q 100 50 150 150 T 250 150" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-300" strokeDasharray="8,8" />
               <rect x="120" y="60" width="40" height="60" rx="4" className="fill-primary-100 dark:fill-primary-900/50 stroke-primary-400" strokeWidth="2" />
               <rect x="130" y="50" width="40" height="60" rx="4" className="fill-white dark:fill-slate-800 stroke-primary-400" strokeWidth="2" />
               <path d="M140 80 H160 M140 95 H160 M140 110 H155" stroke="currentColor" strokeWidth="2" className="text-slate-400" />
               
               <circle cx="280" cy="80" r="15" className="fill-purple-100 dark:fill-purple-900/50 stroke-purple-400 animate-pulse" strokeWidth="2" />
               <circle cx="320" cy="120" r="10" className="fill-blue-100 dark:fill-blue-900/50 stroke-blue-400" strokeWidth="2" />
               <line x1="295" y1="80" x2="320" y2="120" stroke="currentColor" className="text-slate-300" />
            </svg>
          </div>
        );

      case 'quick-task':
        return (
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-8 left-12 w-28 h-48 border-4 border-slate-300 dark:border-slate-600 rounded-[1.5rem] bg-white dark:bg-slate-800 transform -rotate-12 shadow-xl overflow-hidden">
               <div className="h-4 w-full bg-slate-100 dark:bg-slate-700 border-b border-slate-200"></div>
               <div className="p-3 space-y-2">
                  <div className="flex items-center gap-2">
                     <div className="w-4 h-4 rounded-full border-2 border-green-500 bg-green-500/20"></div>
                     <div className="w-16 h-2 bg-slate-200 dark:bg-slate-600 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="w-4 h-4 rounded-full border-2 border-green-500 bg-green-500/20"></div>
                     <div className="w-12 h-2 bg-slate-200 dark:bg-slate-600 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-2 opacity-50">
                     <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>
                     <div className="w-14 h-2 bg-slate-100 dark:bg-slate-700 rounded-full"></div>
                  </div>
               </div>
               <div className="absolute bottom-4 right-4 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-lg font-bold">+</div>
            </div>
            <div className="absolute top-20 right-16 w-6 h-6 rounded-full bg-yellow-400/50 animate-bounce"></div>
          </div>
        );

      case 'investment-tracker':
        return (
          <div className="absolute inset-0 opacity-20 pointer-events-none">
             <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
               <defs>
                 <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="0%" stopColor="#10b981" stopOpacity="0.4"/>
                   <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
                 </linearGradient>
               </defs>
               <path d="M0 150 L 60 130 L 120 160 L 180 100 L 240 120 L 320 40 L 400 60 V 200 H 0 Z" fill="url(#chartGrad)" />
               <polyline points="0,150 60,130 120,160 180,100 240,120 320,40 400,60" fill="none" stroke="#10b981" strokeWidth="3" />
            </svg>
            <div className="absolute top-10 right-10 px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 text-xs font-bold rounded-full border border-green-200 dark:border-green-800 shadow-sm">
              +24.5%
            </div>
          </div>
        );

      default:
        if (project.type === 'Work') {
          return (
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-8 left-10 w-24 h-32 border-2 border-blue-400/30 rounded-lg flex flex-col gap-2 p-2">
                <div className="h-2 w-full bg-blue-400/20 rounded-full animate-pulse"></div>
                <div className="h-2 w-2/3 bg-blue-400/20 rounded-full"></div>
                <div className="h-2 w-full bg-blue-400/20 rounded-full"></div>
                <div className="mt-auto flex gap-1">
                   <div className="w-2 h-2 rounded-full bg-green-400 animate-ping"></div>
                   <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                </div>
              </div>
              <svg className="absolute inset-0 w-full h-full">
                 <path d="M140 60 Q 200 100 250 60" stroke="currentColor" strokeWidth="1" fill="none" className="text-slate-300 dark:text-slate-600" strokeDasharray="5,5" />
                 <circle cx="140" cy="60" r="3" className="fill-blue-400" />
                 <circle cx="250" cy="60" r="3" className="fill-purple-400" />
              </svg>
            </div>
          );
        } else {
          return (
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-6 right-8 w-32 h-24 bg-slate-800/5 border border-purple-400/30 rounded-lg p-2 flex flex-col gap-1.5 transform -rotate-3">
                 <div className="flex gap-1 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                 </div>
                 <div className="w-3/4 h-1 bg-slate-400/30 rounded-full"></div>
                 <div className="w-1/2 h-1 bg-slate-400/30 rounded-full ml-2"></div>
                 <div className="w-2/3 h-1 bg-slate-400/30 rounded-full"></div>
              </div>
              <div className="absolute bottom-8 left-12 text-purple-500/30 rotate-12">
                  <Code2 size={40} />
              </div>
            </div>
          );
        }
    }
  };

  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-20">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tighter mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-500">Projects</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay="delay-100">
            <div className="flex p-1.5 bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-white/5 shadow-sm relative">
               {['All', 'Work', 'Personal'].map((type) => (
                 <button
                   key={type}
                   onClick={() => setFilter(type as any)}
                   className={`relative z-10 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                     filter === type 
                       ? 'text-white shadow-lg' 
                       : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                   }`}
                 >
                   {type}
                   {filter === type && (
                     <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-blue-600 rounded-xl -z-10 animate-in fade-in zoom-in duration-300"></div>
                   )}
                 </button>
               ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={`delay-[${(idx % 3) * 100}ms]`} variant="fade-up">
              <div className="group relative h-full rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/60 hover:border-transparent transition-all duration-500 flex flex-col overflow-hidden shadow-sm hover:shadow-2xl dark:shadow-none">
                
                <div className="absolute -inset-[1px] bg-gradient-to-r from-primary-500 via-purple-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 -z-10"></div>
                <div className="absolute inset-[1px] bg-white dark:bg-slate-950 rounded-[22px] -z-10"></div>

                <div className="h-52 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800/50 group-hover:bg-slate-100 dark:group-hover:bg-slate-800/50 transition-colors duration-500">
                    
                    {renderDoodle(project)}
                    
                    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                    
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-500 group-hover:-translate-y-[60%] z-10">
                         <div className={`p-4 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-700/50 ${project.type === 'Work' ? 'text-blue-500' : 'text-purple-500'}`}>
                             {project.type === 'Work' ? <Briefcase size={28} /> : <Code2 size={28} />}
                         </div>
                    </div>
                    
                    {project.type === 'Personal' && project.link && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 z-20">
                            <a 
                              href={project.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm flex items-center gap-2 shadow-xl hover:scale-105 transition-transform"
                            >
                              <Github size={18} />
                              View Source
                            </a>
                        </div>
                    )}

                    {project.type === 'Work' && (
                         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 pointer-events-none">
                            <div className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-bold border border-white/20 flex items-center gap-2 shadow-lg">
                                 <Lock size={12} /> Proprietary Code
                            </div>
                         </div>
                    )}

                    <div className="absolute top-4 right-4 z-10">
                         <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border shadow-sm backdrop-blur-md ${
                             project.type === 'Work' 
                               ? 'bg-blue-50/80 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 border-blue-100 dark:border-blue-800/30'
                               : 'bg-purple-50/80 dark:bg-purple-900/20 text-purple-600 dark:text-purple-300 border-purple-100 dark:border-purple-800/30'
                         }`}>
                             {project.type}
                         </span>
                    </div>
                </div>

                <div className="p-6 flex flex-col flex-1 relative">
                    <div className="mb-4">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {project.title}
                        </h3>
                        <div className="h-0.5 w-12 bg-slate-200 dark:bg-slate-800 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-purple-500 transition-all duration-500"></div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-medium line-clamp-4">
                        {project.description}
                    </p>

                    <div className="mt-auto">
                         <div className="flex items-center gap-2 mb-3 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                            <Layers size={12} />
                            <span>Tech Stack</span>
                         </div>
                         <div className="flex flex-wrap gap-2">
                            {project.techStack.slice(0, 4).map((tech, i) => (
                                <span key={i} className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 group-hover:border-primary-200 dark:group-hover:border-primary-800/50 transition-colors">
                                    {tech}
                                </span>
                            ))}
                            {project.techStack.length > 4 && (
                                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-50 dark:bg-slate-900 text-slate-400 dark:text-slate-500 border border-slate-100 dark:border-slate-800">
                                    +{project.techStack.length - 4}
                                </span>
                            )}
                         </div>
                    </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;