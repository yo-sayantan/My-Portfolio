
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden selection:bg-primary-500/30">
      
      {/* Modern Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Layout: Flex Col on Mobile, Flex Row on Large, Absolute Image on 2XL for true centering */}
        <div className="flex flex-col lg:flex-row 2xl:block items-center lg:justify-between 2xl:justify-center relative w-full">
            
            {/* Text Content - Takes available space on LG, Centered on 2XL */}
            <div className="flex flex-col items-center text-center lg:flex-1 2xl:w-full 2xl:max-w-5xl 2xl:mx-auto relative z-20">
                
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-slate-200/20 backdrop-blur-xl shadow-lg mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                    </span>
                    <span className="text-xs font-bold tracking-widest uppercase text-slate-600 dark:text-slate-300">Available for New Projects</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-7xl xl:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1] max-w-4xl 2xl:max-w-5xl mx-auto relative z-20">
                  <span className="block text-slate-900 dark:text-white">Engineering</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 via-blue-500 to-purple-600 animate-gradient-x bg-[length:200%_auto]">
                    Intelligent Systems
                  </span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                  Senior Software Engineer architecting scalable <span className="text-slate-900 dark:text-white font-semibold">Cloud Solutions</span> and <span className="text-slate-900 dark:text-white font-semibold">AI Agents</span>. 
                  I turn complex problems into elegant, production-ready code.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16 relative z-20">
                    <a 
                        href="#projects" 
                        onClick={(e) => handleScrollTo(e, '#projects')}
                        className="group relative px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
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
                        className="group px-8 py-4 rounded-full bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold text-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                    >
                       Let's Connect
                    </a>
                </div>

                {/* Social Proof / Icons */}
                <div className="flex items-center justify-center gap-8 mb-12 lg:mb-0 relative z-20">
                   <div className="h-px w-12 bg-gradient-to-r from-transparent to-slate-300 dark:to-slate-700"></div>
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
                   <div className="h-px w-12 bg-gradient-to-l from-transparent to-slate-300 dark:to-slate-700"></div>
                </div>

            </div>

            {/* Image Section */}
            {/* Flex Item on LG (Safe Layout), Absolute on 2XL (True Centering) */}
            <div className="
                w-full flex justify-center pointer-events-none select-none
                mt-12 lg:mt-0 lg:w-auto lg:shrink-0 lg:ml-20
                2xl:absolute 2xl:right-0 2xl:top-1/2 2xl:-translate-y-1/2 2xl:m-0 2xl:block 2xl:pr-0
            ">
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[320px] lg:h-[320px] pointer-events-auto group perspective-1000">
                    
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

                    {/* Experience Badge - Thin Bluish Glassy */}
                    <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 z-20 
                        bg-sky-100/20 dark:bg-sky-900/20 backdrop-blur-xl 
                        p-3 rounded-xl border border-white/30 dark:border-white/10 
                        shadow-[0_8px_32px_0_rgba(14,165,233,0.15)]
                        flex items-center gap-3 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 group-hover:translate-y-2 transition-transform">
                             <div className="p-2 rounded-lg bg-sky-50/50 dark:bg-sky-900/50 text-sky-600 dark:text-sky-300 shadow-inner border border-white/20">
                                <Terminal size={18} />
                             </div>
                             <div className="text-left">
                                <p className="text-[9px] font-bold text-sky-800 dark:text-sky-200 uppercase tracking-wider mb-0.5 drop-shadow-sm">Experience</p>
                                <div className="flex items-baseline gap-1">
                                   <span className="text-lg font-black text-slate-900 dark:text-white drop-shadow-sm">{experienceYears}</span>
                                   <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 drop-shadow-sm">Years</span>
                                </div>
                             </div>
                    </div>

                </div>
            </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="text-slate-300 dark:text-slate-600 w-8 h-8 cursor-pointer hover:text-primary-500 transition-colors" onClick={(e) => handleScrollTo(e as any, '#skills')} />
      </div>
    </section>
  );
};

export default Hero;
    