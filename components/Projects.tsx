import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { FolderGit2, Briefcase, ArrowUpRight, ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Work' | 'Personal'>('All');

  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.type === filter);

  return (
    <section id="projects" className="py-32 bg-transparent relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10">
              A showcase of professional work and personal innovations.
            </p>
            
            <div className="inline-flex p-1.5 bg-white/30 backdrop-blur-xl rounded-xl border border-white/40 shadow-sm">
              {['All', 'Work', 'Personal'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type as any)}
                  className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                    filter === type 
                      ? 'bg-slate-900 text-white shadow-lg scale-105' 
                      : 'text-slate-500 hover:bg-white/50 hover:text-slate-700'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={`delay-[${(idx % 3) * 100}ms]`} variant="zoom-in">
              <div className={`bg-white/30 backdrop-blur-xl rounded-[2rem] border border-white/40 shadow-lg overflow-hidden transition-all duration-300 flex flex-col h-full group relative hover:-translate-y-2 hover:shadow-2xl`}>
                
                <div className={`h-1.5 w-full transition-all duration-500 ${project.type === 'Work' ? 'bg-blue-500 group-hover:h-2.5' : 'bg-purple-500 group-hover:h-2.5'}`} />
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-2xl transition-all duration-300 ${
                        project.type === 'Work' ? 'bg-blue-50/80 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' : 'bg-purple-50/80 text-purple-600 group-hover:bg-purple-600 group-hover:text-white'
                    }`}>
                      {project.type === 'Work' ? <Briefcase size={20} /> : <FolderGit2 size={20} />}
                    </div>
                    <a 
                      href={project.link || "#"} 
                      className="text-slate-400 hover:text-slate-900 transition-colors hover:scale-110 transform duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        {project.link ? <ExternalLink size={22} /> : <ArrowUpRight size={22} />}
                    </a>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-8 flex-1 leading-relaxed font-medium">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-100/50">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-xs font-bold text-slate-500 bg-white/40 px-3 py-1.5 rounded-lg border border-white/40">
                        {tech}
                      </span>
                    ))}
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