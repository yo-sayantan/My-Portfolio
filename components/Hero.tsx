
import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const socialIcons = [
    { Icon: Github, href: SOCIAL_LINKS.github, label: "GitHub", color: "hover:bg-[#333] hover:text-white hover:border-[#333]" },
    { Icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn", color: "hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5]" },
    { Icon: Mail, href: `mailto:${SOCIAL_LINKS.email}`, label: "Email", color: "hover:bg-red-500 hover:text-white hover:border-red-500" }
  ];

  const handleScrollDown = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#about');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden pt-20">
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-96 h-96 bg-primary-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-[10%] left-[10%] w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center md:text-left md:flex md:items-center md:justify-between gap-12">
        <div className="md:w-1/2 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-300 bg-primary-900/30 rounded-full border border-primary-700/50 backdrop-blur-sm hover:bg-primary-900/50 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Senior Software Engineer
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
            Architecting Intelligent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-blue-400 to-purple-400 animate-gradient-x">Cloud Ecosystems</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Senior Software Engineer specializing in scalable Java microservices. I combine deep technical expertise with AI-driven workflows to build high-performance, future-ready software solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a 
              href="#projects" 
              className="px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-full hover:shadow-lg hover:shadow-primary-500/25 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 text-base font-bold text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1 backdrop-blur-sm flex items-center justify-center"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 pt-6">
            {socialIcons.map((item, idx) => (
              <a 
                key={idx}
                href={item.href} 
                target={item.label !== 'Email' ? "_blank" : undefined}
                rel={item.label !== 'Email' ? "noopener noreferrer" : undefined}
                className={`p-3 rounded-full bg-white/5 border border-white/10 text-slate-400 transition-all duration-300 hover:scale-110 hover:shadow-lg ${item.color}`}
                aria-label={item.label}
              >
                <item.Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:flex md:w-1/2 relative justify-center">
           <div className="relative z-10 max-w-sm w-full">
              <div className="relative bg-slate-900 rounded-[2rem] border border-slate-800 p-2 overflow-hidden shadow-2xl group">
                <img 
                  src="https://github.com/yo-sayantan.png" 
                  alt="Sayantan Biswas" 
                  className="rounded-[1.5rem] w-full h-auto object-cover shadow-inner"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>
              </div>
              
              {/* Floating Badge - Compact Version */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-20 hover:scale-105 transition-transform">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 shadow-inner">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider leading-tight">Experience</p>
                  <p className="text-xl font-black text-slate-900 leading-tight">5 Years</p>
                </div>
              </div>
           </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <a 
          href="#about"
          onClick={handleScrollDown}
          className="text-slate-400 hover:text-primary-400 transition-colors duration-300 cursor-pointer block p-2 hover:scale-110 transform"
          aria-label="Scroll down to About section"
        >
          <ChevronDown className="w-10 h-10" strokeWidth={1.5} />
        </a>
      </div>

    </section>
  );
};

export default Hero;
