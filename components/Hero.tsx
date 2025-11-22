
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden selection:bg-primary-500/30">
      
      {/* Modern Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] -z-10 opacity-60"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Grid Layout: Text Left (Centered Content), Image Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
            
            {/* Text Content - Centered Alignment */}
            <div className="flex flex-col items-center text-center order-2 lg:order-1 relative z-20">
                
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-slate-200/20 backdrop-blur-xl shadow-lg mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                    </span>
                    <span className="text-xs font-bold tracking-widest uppercase text-slate-600 dark:text-slate-300">Looking for Exciting Opportunities</span>
                </div>

                {/* Main Headline with Improved Spacing */}
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tight mb-8 leading-[1.15]">
                  <span className="block bg-clip-text text-transparent bg-gradient-to-b from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-500 drop-shadow-sm pb-2">
                    I Transform Complex Business Requirements
                  </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 via-blue-500 to-purple-600 animate-gradient-x bg-[length:200%_auto] py-1 block">
                    Into High-Performance, Scalable Microservices
                  </span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mb-10 leading-relaxed font-medium">
                  Specializing in <span className="text-slate-900 dark:text-white font-bold">Java, SQL/NoSQL, AWS Ecosystems</span> and <span className="text-slate-900 dark:text-white font-bold">AI-Driven Development</span>. I turn complex problems into elegant, production-ready code.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-5 mb-12">
                    <a 
                        href="#projects" 
                        onClick={(e) => handleScrollTo(e, '#projects')}
                        className="group relative px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden w-full sm:w-auto flex justify-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <span className="relative flex items-center gap-2">
                            View Engineering Work
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                    <a 
                        href="#contact" 
                        onClick={(e) => handleScrollTo(e, '#contact')}
                        className="group px-8 py-4 rounded-full bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold text-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto flex justify-center"
                    >
                       Let's Connect
                    </a>
                </div>

                {/* Social Proof / Icons */}
                <div className="flex items-center gap-6">
                   <div className="flex gap-6">
                      {socials.map((s, i) => (
                        <a 
                          key={i} 
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`transition-colors duration-300 transform hover:scale-110 ${s.color}`}
                          aria-label={s.label}
                        >
                          <s.Icon size={24} />
                        </a>
                      ))}
                   </div>
                </div>

            </div>

            {/* Image Section - Right Column */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2 relative z-10 mb-12 lg:mb-0">
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] pointer-events-auto group perspective-1000">
                    
                    {/* Partition/Background Elements - Circular */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-purple-600 rounded-full rotate-6 scale-105 opacity-20 dark:opacity-40 group-hover:rotate-12 transition-transform duration-500"></div>
                    
                    <div className="absolute inset-0 border-2 border-slate-200 dark:border-white/10 rounded-full -rotate-6 scale-95 group-hover:-rotate-12 transition-transform duration-500"></div>

                    {/* Main Image Container - Circular */}
                    <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border border-white/20 dark:border-white/5 bg-white dark:bg-slate-900 z-10 transform transition-transform duration-500 group-hover:scale-[1.02]">
                        <img 
                            src="https://github.com/yo-sayantan.png" 
                            alt="Sayantan Biswas" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Experience Badge - Elegant & Optimised */}
                    <div className="absolute bottom-4 -right-4 md:bottom-8 md:-right-12 z-20 animate-bounce-slow">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-blue-600 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                            <div className="relative flex items-center gap-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-white/60 dark:border-white/10 py-3 pl-3 pr-6 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-105">
                                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-primary-500/25">
                                    <Terminal size={22} className="drop-shadow-md" />
                                 </div>
                                 <div className="flex flex-col justify-center">
                                    <p className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5">Experience</p>
                                    <div className="flex items-baseline gap-1.5">
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="text-slate-300 dark:text-slate-600 w-8 h-8 cursor-pointer hover:text-primary-500 transition-colors" onClick={(e) => handleScrollTo(e, '#skills')} />
      </div>
    </section>
  );
};

export default Hero;
