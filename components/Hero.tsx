
import React, { useMemo } from 'react';
import { ArrowRight, Github, Linkedin, Mail, ChevronDown, Terminal } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const experienceYears = useMemo(() => {
    const startDate = new Date('2020-05-01');
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - startDate.getTime());
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
    return diffYears.toFixed(1);
  }, []);

  const socials = [
    { 
      Icon: Github, 
      href: SOCIAL_LINKS.github, 
      label: "GitHub",
      color: "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
    },
    { 
      Icon: Linkedin, 
      href: SOCIAL_LINKS.linkedin, 
      label: "LinkedIn", 
      color: "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
    },
    { 
      Icon: Mail, 
      href: `mailto:${SOCIAL_LINKS.email}`, 
      label: "Email",
      color: "text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
    }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden selection:bg-primary-500/30">
      
      {/* Dramatic Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-primary-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[120px] -z-10 opacity-70"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* 50/50 Grid for maximum impact */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center w-full">
            
            {/* Left Column: Text Content */}
            <div className="flex flex-col items-start text-left order-2 lg:order-1 relative z-20">
                
                {/* Animated Status Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-slate-200/20 backdrop-blur-xl shadow-lg mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0s' }}>
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                    </span>
                    <span className="text-xs font-bold tracking-widest uppercase text-slate-600 dark:text-slate-300">Open to Opportunities</span>
                </div>

                {/* Main Headline - Fixed Clipping & Increased Size */}
                <h1 className="text-6xl md:text-7xl xl:text-8xl font-black tracking-tight mb-8 leading-[1.1] opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <span className="block text-slate-900 dark:text-white mb-2">
                    Engineering
                  </span>
                  {/* Added padding-bottom and padding-right to prevent clipping of gradient text descenders/ascenders */}
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary-500 via-blue-500 to-purple-600 animate-gradient-x bg-[length:200%_auto] pb-4 pr-2">
                    Intelligent Systems
                  </span>
                </h1>

                {/* Introduction Text */}
                <p 
                  className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 max-w-2xl mb-6 leading-snug opacity-0 animate-fade-in-up" 
                  style={{ animationDelay: '0.3s' }}
                >
                  Senior Software Engineer architecting scalable cloud solutions and AI-driven agents.
                </p>

                {/* Detailed Description */}
                <p 
                  className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl mb-10 leading-relaxed opacity-0 animate-fade-in-up" 
                  style={{ animationDelay: '0.4s' }}
                >
                  I bridge the gap between complex business requirements and high-performance code. Specializing in <span className="text-slate-900 dark:text-white font-bold">Java Microservices</span>, <span className="text-slate-900 dark:text-white font-bold">Cloud Architecture</span>, and <span className="text-slate-900 dark:text-white font-bold">Next-Gen AI</span>.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <a 
                        href="#projects" 
                        onClick={(e) => handleScrollTo(e, '#projects')}
                        className="group relative px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden w-full sm:w-auto flex justify-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <span className="relative flex items-center gap-2">
                            Explore Work
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                    <a 
                        href="#contact" 
                        onClick={(e) => handleScrollTo(e, '#contact')}
                        className="group px-8 py-4 rounded-full bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold text-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto flex justify-center"
                    >
                       Get in Touch
                    </a>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-6">
                    {socials.map((s, i) => (
                    <a 
                        key={i} 
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-colors duration-300 transform hover:scale-110 ${s.color} opacity-0 animate-fade-in-up`}
                        style={{ animationDelay: `${0.6 + (i * 0.1)}s` }}
                        aria-label={s.label}
                    >
                        <s.Icon size={32} />
                    </a>
                    ))}
                </div>

            </div>

            {/* Right Column: Massive Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2 relative z-10 mb-12 lg:mb-0 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                {/* Increased sizes: w-[600px] on large screens */}
                <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] pointer-events-auto group perspective-1000">
                    
                    {/* Abstract Background Shapes */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-purple-600 rounded-full rotate-6 scale-105 opacity-20 dark:opacity-40 group-hover:rotate-12 transition-transform duration-700 blur-2xl"></div>
                    
                    {/* Rotating Border Ring */}
                    <div className="absolute inset-0 border-2 border-slate-200 dark:border-white/10 rounded-full -rotate-6 scale-95 group-hover:-rotate-12 transition-transform duration-700"></div>

                    {/* Main Image Container */}
                    <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white/20 dark:border-white/5 bg-white dark:bg-slate-900 z-10 transform transition-transform duration-500 group-hover:scale-[1.01]">
                        <img 
                            src="https://github.com/yo-sayantan.png" 
                            alt="Sayantan Biswas" 
                            className="w-full h-full object-cover"
                        />
                        {/* Slight overlay for integration */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Experience Badge - Scaled up relative to image */}
                    <div className="absolute bottom-8 right-0 md:bottom-10 md:right-6 lg:bottom-16 lg:right-8 z-20 animate-bounce-slow">
                        <div className="relative group cursor-default">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-blue-600 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                            <div className="relative flex items-center gap-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-white/60 dark:border-white/10 py-3 pl-3 pr-6 rounded-full shadow-2xl transition-transform duration-300 group-hover:scale-105">
                                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-primary-500/25">
                                    <Terminal size={20} className="drop-shadow-md" />
                                 </div>
                                 <div className="flex flex-col justify-center">
                                    <p className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-0.5">Experience</p>
                                    <div className="flex items-baseline gap-1">
                                       <span className="text-2xl font-black text-slate-900 dark:text-white leading-none">{experienceYears}</span>
                                       <span className="text-xs font-bold text-primary-600 dark:text-primary-400 leading-none">Years</span>
                                    </div>
                                 </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity cursor-pointer group" onClick={(e) => handleScrollTo(e, '#skills')}>
         <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 group-hover:text-primary-500 transition-colors">Scroll</span>
         <div className="w-10 h-10 rounded-full bg-white/10 dark:bg-slate-900/30 backdrop-blur-md border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-sm group-hover:shadow-lg group-hover:border-primary-500/50 transition-all duration-300 animate-bounce">
            <ChevronDown className="w-5 h-5 text-slate-600 dark:text-slate-300 group-hover:text-primary-500" />
         </div>
      </div>
    </section>
  );
};

export default Hero;
