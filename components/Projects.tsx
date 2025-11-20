import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { FolderGit2, Briefcase, ArrowUpRight, ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Work' | 'Personal'>('All');

  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.type === filter);

  return (
    <section id="projects" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Featured Projects</h2>
            <p className="text-slate-500 max-w-2xl mx-auto mb-8">
              A showcase of professional work and personal innovations.
            </p>
            
            <div className="inline-flex p-1.5 bg-white rounded-xl border border-slate-200 shadow-sm">
              {['All', 'Work', 'Personal'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type as any)}
                  className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                    filter === type 
                      ? 'bg-secondary text-white shadow-lg scale-105' 
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
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
              <div className={`bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 flex flex-col h-full group relative hover:-translate-y-2 ${project.type === 'Work' ? 'hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)]' : 'hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.15)]'}`}>
                
                <div className={`h-1.5 w-full transition-all duration-500 ${project.type === 'Work' ? 'bg-blue-500 group-hover:h-2.5' : 'bg-purple-500 group-hover:h-2.5'}`} />
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl transition-all duration-300 ${
                        project.type === 'Work' ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110' : 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white group-hover:scale-110'
                    }`}>
                      {project.type === 'Work' ? <Briefcase size={20} /> : <FolderGit2 size={20} />}
                    </div>
                    <a 
                      href={project.link || "#"} 
                      className="text-slate-300 hover:text-secondary transition-colors hover:scale-110 transform duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        {project.link ? <ExternalLink size={20} /> : <ArrowUpRight size={20} />}
                    </a>
                  </div>
                  
                  <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm mb-6 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-100">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
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