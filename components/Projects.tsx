
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Briefcase, Code2, Github, Layout, Smartphone, Server, BarChart3, Cpu, Globe } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Work' | 'Personal'>('All');
  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.type === filter);

  // Helper to get a "Doodle" icon for the project
  const getProjectIcon = (id: string, type: string) => {
     if (type === 'Work') {
         switch(id) {
             case 'legal-entity': return <Globe className="w-12 h-12" />;
             case 'parallel-invoice': return <Server className="w-12 h-12" />;
             default: return <Briefcase className="w-12 h-12" />;
         }
     } else {
         switch(id) {
             case 'book-exchange': return <Layout className="w-12 h-12" />;
             case 'quick-task': return <Smartphone className="w-12 h-12" />;
             case 'investment-tracker': return <BarChart3 className="w-12 h-12" />;
             case 'os-scheduler': return <Cpu className="w-12 h-12" />;
             default: return <Code2 className="w-12 h-12" />;
         }
     }
  };

  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-20">
          <ScrollReveal variant="fade-up">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tighter mb-6 text-center">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-500">Projects</span>
            </h2>
          </ScrollReveal>
          
          {/* Modern Segmented Control Filter */}
          <ScrollReveal delay="delay-100" variant="zoom-in">
            <div className="flex p-1.5 bg-slate-200/50 dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/5 shadow-inner relative">
               {['All', 'Work', 'Personal'].map((type) => (
                 <button
                   key={type}
                   onClick={() => setFilter(type as any)}
                   className={`relative z-10 px-8 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
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
              <div className="group relative h-full rounded-[2rem] bg-white/40 dark:bg-slate-900/40 border border-white/20 dark:border-white/10 hover:border-primary-500/30 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.3)] hover:-translate-y-3 flex flex-col overflow-hidden backdrop-blur-md">
                
                {/* Modern Doodle Header Area */}
                <div className={`h-56 relative overflow-hidden flex items-center justify-center transition-colors duration-500 ${
                    project.type === 'Work' 
                      ? 'bg-gradient-to-br from-blue-50/50 to-blue-100/50 dark:from-blue-900/20 dark:to-slate-900' 
                      : 'bg-gradient-to-br from-purple-50/50 to-purple-100/50 dark:from-purple-900/20 dark:to-slate-900'
                }`}>
                    
                    {/* Pattern Background */}
                    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
                         style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '16px 16px' }}>
                    </div>

                    {/* Floating Doodle Icon */}
                    <div className={`
                        relative z-10 p-6 rounded-3xl bg-white/30 dark:bg-white/5 backdrop-blur-md border border-white/20 shadow-2xl
                        text-slate-700 dark:text-white
                        group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out
                        ${project.type === 'Work' ? 'group-hover:text-blue-500' : 'group-hover:text-purple-500'}
                    `}>
                        {getProjectIcon(project.id, project.type)}
                    </div>

                    {/* Animated Background Elements (Doodles) */}
                    <div className={`absolute top-10 right-10 w-12 h-12 border-4 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700 delay-75 ${project.type === 'Work' ? 'border-blue-400' : 'border-purple-400'}`}></div>
                    <div className={`absolute bottom-10 left-10 w-8 h-8 rounded-lg opacity-20 group-hover:rotate-45 transition-transform duration-700 delay-100 ${project.type === 'Work' ? 'bg-blue-400' : 'bg-purple-400'}`}></div>
                    <div className={`absolute top-1/2 left-8 w-2 h-2 rounded-full opacity-40 group-hover:translate-x-4 transition-transform duration-500 ${project.type === 'Work' ? 'bg-blue-600' : 'bg-purple-600'}`}></div>
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-10">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest border backdrop-blur-md shadow-sm ${
                            project.type === 'Work' 
                                ? 'bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-300'
                                : 'bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-300'
                        }`}>
                            {project.type}
                        </span>
                    </div>
                </div>

                {/* Content Body */}
                <div className="p-8 flex-1 flex flex-col relative">
                    {/* Link Button - Only for Personal projects */}
                    {project.type === 'Personal' && project.link && (
                        <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute -top-6 right-8 p-3.5 rounded-2xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xl border border-slate-100 dark:border-slate-700 hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 transition-all duration-300 group/btn z-10 hover:scale-110 hover:-rotate-6"
                            aria-label="View Source"
                        >
                            <Github size={20} />
                        </a>
                    )}

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors pr-2 leading-tight">
                        {project.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-7 mb-8 font-medium flex-grow">
                        {project.description}
                    </p>

                    <div className="mt-auto pt-6 border-t border-slate-200/50 dark:border-white/5">
                         <div className="flex flex-wrap gap-2">
                            {project.techStack.slice(0, 5).map((tech, i) => (
                                <span key={i} className="px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wide bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50 transition-all duration-300 group-hover:border-primary-500/30 group-hover:text-primary-600 dark:group-hover:text-primary-300 cursor-default">
                                    {tech}
                                </span>
                            ))}
                            {project.techStack.length > 5 && (
                                <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-50 dark:bg-slate-900 text-slate-400 border border-slate-200 dark:border-slate-800">
                                    +{project.techStack.length - 5}
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
