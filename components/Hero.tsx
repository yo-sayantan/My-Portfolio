import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, ChevronDown, Terminal } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 tracking-tighter mb-8 leading-[1.1]">
          Architecting <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600">Intelligent Systems</span>
        </h1>

        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Senior Software Engineer specializing in <span className="text-slate-800 font-semibold">Java Microservices</span>, <span className="text-slate-800 font-semibold">AWS Cloud</span>, and <span className="text-slate-800 font-semibold">AI Agents</span>. 
          I architect scalable cloud ecosystems that power the next generation of fintech.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a 
            href="#projects" 
            onClick={(e) => handleScrollTo(e, '#projects')}
            className="px-8 py-4 rounded-full bg-slate-900 text-white font-bold text-lg hover:bg-primary-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex items-center gap-2 cursor-pointer"
          >
            View Engineering Work
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="px-8 py-4 rounded-full bg-white text-slate-900 border border-slate-200 font-bold text-lg hover:bg-slate-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
          >
            Let's Connect
          </a>
        </div>

        {/* Profile Image - Glass Card Container */}
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-600 rounded-[2.5rem] blur opacity-40 animate-pulse-slow"></div>
          <div className="relative bg-white p-2 rounded-[2.5rem] shadow-2xl">
            <img 
              src="https://github.com/yo-sayantan.png" 
              alt="Sayantan Biswas" 
              className="w-40 h-40 md:w-48 md:h-48 rounded-[2rem] object-cover"
            />
            
            {/* Experience Floating Badge */}
            <div className="absolute -bottom-4 -right-8 bg-white px-4 py-2 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce-slow">
                <div className="bg-primary-100 p-2 rounded-lg text-primary-600">
                    <Terminal size={16} />
                </div>
                <div className="text-left">
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Experience</p>
                    <p className="text-lg font-bold text-slate-900">5 Years</p>
                </div>
            </div>
          </div>
        </div>

        {/* Social Links Row */}
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
               className="p-3 rounded-xl bg-white/50 hover:bg-white border border-white/50 hover:border-primary-200 text-slate-500 hover:text-primary-600 hover:scale-110 hover:shadow-lg transition-all duration-300"
             >
               <s.Icon size={22} />
             </a>
           ))}
        </div>

      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-slate-400 w-8 h-8 cursor-pointer" onClick={(e) => handleScrollTo(e as any, '#about')} />
      </div>
    </section>
  );
};

export default Hero;