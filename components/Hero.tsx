import React, { useMemo } from 'react';
import { ArrowRight, Github, Linkedin, Mail, ChevronDown, Terminal } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  const experienceYears = useMemo(() => {
    const startDate = new Date('2020-07-01');
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - startDate.getTime());
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
    return diffYears.toFixed(1);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        
        <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 dark:text-white tracking-tighter mb-8 leading-[1.1]">
          Engineering <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 dark:from-primary-400 dark:via-blue-400 dark:to-purple-400">Intelligent Systems</span>
        </h1>

        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Senior Software Engineer specializing in <span className="text-slate-800 dark:text-slate-200 font-semibold">Java, Microservices</span>, <span className="text-slate-800 dark:text-slate-200 font-semibold">Cloud</span>, and <span className="text-slate-800 dark:text-slate-200 font-semibold">AI Agents</span>. 
          I build scalable cloud ecosystems that power the next generation of fintech.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a 
            href="#projects" 
            onClick={(e) => handleScrollTo(e, '#projects')}
            className="px-8 py-4 rounded-full bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold text-lg hover:bg-primary-600 dark:hover:bg-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex items-center gap-2 cursor-pointer shadow-xl"
          >
            View Engineering Work
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="px-8 py-4 rounded-full bg-white/10 dark:bg-slate-800/20 backdrop-blur-md text-slate-900 dark:text-white border border-white/20 dark:border-slate-700/30 font-bold text-lg hover:bg-white/20 dark:hover:bg-slate-800/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
          >
            Let's Connect
          </a>
        </div>

        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-600 rounded-[2.5rem] blur opacity-30 animate-pulse-slow"></div>
          <div className="relative bg-white/10 dark:bg-slate-900/20 backdrop-blur-lg p-2 rounded-[2.5rem] shadow-2xl border border-white/20 dark:border-white/10">
            {/* Increased size here: w-64 h-64 md:w-80 md:h-80 */}
            <img 
              src="https://github.com/yo-sayantan.png" 
              alt="Sayantan Biswas" 
              className="w-64 h-64 md:w-80 md:h-80 rounded-[2rem] object-cover opacity-95"
            />
            
            <div className="absolute -bottom-4 -right-8 bg-white/30 dark:bg-slate-800/50 backdrop-blur-xl px-4 py-2 rounded-xl shadow-xl border border-white/20 dark:border-slate-700/30 flex items-center gap-3 animate-bounce-slow">
                <div className="bg-primary-100/50 dark:bg-primary-900/30 p-2 rounded-lg text-primary-600 dark:text-primary-400">
                    <Terminal size={16} />
                </div>
                <div className="text-left">
                    <p className="text-[10px] uppercase font-bold text-slate-600 dark:text-slate-400 tracking-wider">Experience</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">{experienceYears} Years</p>
                </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
           {[
             { Icon: Github, href: SOCIAL_LINKS.github },
             { Icon: Linkedin, href: SOCIAL_LINKS.linkedin },
             { Icon: Mail, href: `mailto:${SOCIAL_LINKS.email}` }
           ].map((s, i) => (
             <a 
               key={i} 
               href={s.href}
               target="_blank" 
               rel="noreferrer"
               className="p-3 rounded-xl bg-white/10 dark:bg-slate-800/20 hover:bg-white/30 dark:hover:bg-slate-700/40 border border-white/20 dark:border-white/5 hover:border-primary-200 text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-110 hover:shadow-lg transition-all duration-300 backdrop-blur-md"
             >
               <s.Icon size={22} />
             </a>
           ))}
        </div>

      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-slate-400 dark:text-slate-600 w-8 h-8 cursor-pointer" onClick={(e) => handleScrollTo(e as any, '#skills')} />
      </div>
    </section>
  );
};

export default Hero;