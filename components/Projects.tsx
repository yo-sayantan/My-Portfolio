
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Briefcase, ExternalLink, Code2, Github } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Work' | 'Personal'>('All');
  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.type === filter);

  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-20">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tighter mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-500">Projects</span>
            </h2>
          </ScrollReveal>
          
          {/* Modern Segmented Control Filter */}
          <ScrollReveal delay="delay-100">
            <div className="flex p-1.5 bg-slate-200/50 dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/5 shadow-inner relative">
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
              <div className="group relative h-full rounded-3xl bg-white/40 dark:bg-slate-900/40 border border-white/20 dark:border-white/10 hover:border-primary-500/30 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.3)] hover:-translate-y-3 flex flex-col overflow-hidden backdrop-blur-md">
                
                {/* Abstract Cover Art Area */}
                <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${
                    project.type === 'Work' 
                      ? 'from-blue-600/10 via-primary-900/10 to-slate-900/40' 
                      : 'from-purple-600/10 via-fuchsia-900/10 to-slate-900/40'
                } group-hover:scale-105 transition-transform duration-700`}>
                    
                    {/* Noise Texture Overlay */}
                    <div className="absolute inset-0 opacity-20 bg-repeat [background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiAvPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMDAwIiAvPgo8L3N2Zz4=')]"></div>
                    
                    {/* Animated Gradient Border Effect on Top */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-gradient-x transition-opacity duration-500"></div>
                    
                    {/* Animated Glow Blobs */}
                    <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 ${project.type === 'Work' ? 'bg-blue-500' : 'bg-purple-500'}`}></div>
                    <div className={`absolute -left-10 -bottom-10 w-40 h-40 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 ${project.type === 'Work' ? 'bg-cyan-500' : 'bg-pink-500'}`}></div>
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-10">
                        <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider border backdrop-blur-md shadow-sm ${
                            project.type === 'Work' 
                                ? 'bg-blue-500/20 border-blue-500/30 text-blue-600 dark:text-blue-300'
                                : 'bg-purple-500/20 border-purple-500/30 text-purple-600 dark:text-purple-300'
                        }`}>
                            {project.type}
                        </span>
                    </div>

                    {/* Center Icon Art */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${
                            project.type === 'Work' ? 'text-blue-500 dark:text-blue-400' : 'text-purple-500 dark:text-purple-400'
                        }`}>
                             {project.type === 'Work' ? <Briefcase size={32} strokeWidth={1.5} /> : <Code2 size={32} strokeWidth={1.5} />}
                        </div>
                    </div>
                </div>

                {/* Content Body */}
                <div className="p-7 flex-1 flex flex-col relative">
                    {/* Floating Action Button */}
                    <a 
                        href={project.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute -top-6 right-6 p-3 rounded-full bg-slate-800 dark:bg-white text-white dark:text-slate-900 shadow-lg border border-white/10 hover:bg-primary-600 dark:hover:bg-primary-400 hover:text-white transition-all duration-300 group/btn z-10 hover:scale-110 hover:rotate-12"
                        aria-label="View Project"
                    >
                        {project.link ? <ExternalLink size={18} /> : <Github size={18} />}
                    </a>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-1 pr-8">
                        {project.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
                        {project.description}
                    </p>

                    <div className="mt-auto pt-6 border-t border-slate-200/50 dark:border-white/5">
                         <div className="flex flex-wrap gap-2">
                            {project.techStack.slice(0, 4).map((tech, i) => (
                                <span key={i} className="px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wide bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50 transition-all duration-300 group-hover:scale-110 group-hover:bg-white dark:group-hover:bg-slate-700 cursor-default">
                                    {tech}
                                </span>
                            ))}
                            {project.techStack.length > 4 && (
                                <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50 transition-all duration-300 group-hover:scale-110">
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