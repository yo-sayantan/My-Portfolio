
import React from 'react';
import { SUMMARY, AWARDS } from '../constants';
import { Bot, Trophy, Target, Brain, Sparkles, Terminal } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-transparent relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <ScrollReveal variant="slide-right">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tighter mb-4">Beyond the Code</h2>
          </ScrollReveal>
          <ScrollReveal delay="delay-100" variant="fade-in">
            <div className="h-1.5 w-24 bg-primary-600 rounded-full md:mx-0 mx-auto"></div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Summary Block */}
          <div className="md:col-span-8">
            <ScrollReveal variant="fade-up" className="h-full">
              <div className="h-full bg-white/10 dark:bg-slate-900/30 backdrop-blur-lg p-8 md:p-12 rounded-[2.5rem] border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-primary-100/50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    <Brain className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Engineering Philosophy</h3>
                </div>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-loose font-medium animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-forwards">
                  {SUMMARY}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {['Java Champion', 'Backend Engineer', 'AI Enthusiast'].map(tag => (
                    <span key={tag} className="px-4 py-2 rounded-full bg-white/20 dark:bg-white/5 text-slate-700 dark:text-slate-300 font-semibold text-sm border border-white/20 dark:border-white/10 shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Expanded AI Focus Block */}
          <div className="md:col-span-4">
            <ScrollReveal variant="zoom-in" delay="delay-200" className="h-full">
              <div className="relative group rounded-[2.5rem] overflow-hidden h-full">
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-blue-600 opacity-40 group-hover:opacity-100 transition-all duration-500 blur-sm group-hover:blur-md"></div>
                
                {/* Card Content - Always Dark for Tech Feel */}
                <div className="absolute inset-[2px] bg-slate-950 rounded-[2.4rem] overflow-hidden z-10">
                    
                    {/* Dynamic Background */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.1),transparent_50%)]"></div>
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    
                    {/* Animated Glow Orbs */}
                    <div className="absolute top-[-50%] left-[-50%] w-full h-full bg-cyan-500/10 blur-[80px] animate-pulse rounded-full"></div>
                    <div className="absolute bottom-[-50%] right-[-50%] w-full h-full bg-purple-500/10 blur-[80px] animate-pulse rounded-full delay-700"></div>

                    <div className="relative h-full p-8 flex flex-col justify-between">
                        
                        <div>
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                                    <Bot className="w-6 h-6 text-cyan-400" />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 flex items-center gap-2">
                                    <span className="relative flex h-1.5 w-1.5">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
                                    </span>
                                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">AI Native</span>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Intelligent Workflow</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                                Augmenting engineering capabilities with next-gen models to accelerate velocity.
                            </p>

                            {/* Tool Tokens */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {['Cursor', 'Copilot', 'GPT-5', 'MCP Agents'].map((item) => (
                                    <div key={item} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-500/50 text-[11px] font-bold text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-2 group/item cursor-default backdrop-blur-sm">
                                        <Sparkles className="w-3 h-3 text-slate-600 group-hover/item:text-cyan-500 transition-colors" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Interactive Terminal/Code Snippet Visual */}
                        <div className="mt-auto p-4 rounded-xl bg-black/60 border border-white/5 font-mono text-[10px] text-slate-400 leading-relaxed relative overflow-hidden shadow-inner">
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50"></div>
                            <div className="flex items-center gap-2 mb-2 text-slate-600 border-b border-white/5 pb-2">
                                <Terminal size={10} />
                                <span>agent.process_task()</span>
                            </div>
                            <div className="space-y-1">
                                <p className="flex gap-2">
                                    <span className="text-slate-600">1</span>
                                    <span><span className="text-purple-400">const</span> <span className="text-blue-400">context</span> = <span className="text-green-400">await</span> load(docs);</span>
                                </p>
                                <p className="flex gap-2">
                                    <span className="text-slate-600">2</span>
                                    <span><span className="text-purple-400">return</span> <span className="text-yellow-400">generate</span>(context);</span>
                                </p>
                            </div>
                            <div className="mt-2 flex items-center gap-1.5 text-cyan-500/70">
                                 <span className="w-1 h-1 bg-cyan-500 rounded-full animate-pulse"></span>
                                 <span>Optimizing...</span>
                            </div>
                        </div>

                    </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Awards Block */}
          <div className="md:col-span-6">
             <ScrollReveal variant="fade-up" delay="delay-100" className="h-full">
                <div className="h-full bg-white/10 dark:bg-slate-900/30 backdrop-blur-lg p-8 rounded-[2.5rem] border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
                   <div className="flex items-center gap-4 mb-8">
                     <div className="p-3 rounded-2xl bg-yellow-100/50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400">
                       <Trophy className="w-8 h-8" />
                     </div>
                     <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Recognition</h3>
                   </div>
                   <div className="space-y-6">
                     {AWARDS.map((award, idx) => (
                       <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/20 dark:bg-white/5 border border-white/20 dark:border-white/10 hover:bg-white/30 dark:hover:bg-white/10 transition-colors">
                          <span className="text-4xl">🏆</span>
                          <div>
                            <h4 className="font-bold text-slate-900 dark:text-white">{award.title}</h4>
                            <p className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-1">{award.issuer} • {award.year}</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">{award.description}</p>
                          </div>
                       </div>
                     ))}
                   </div>
                </div>
             </ScrollReveal>
          </div>

          {/* Impact Block */}
          <div className="md:col-span-6 grid grid-rows-2 gap-6">
             <ScrollReveal variant="slide-left" delay="delay-200">
                 <div className="bg-white/10 dark:bg-slate-900/30 backdrop-blur-lg p-8 rounded-[2.5rem] border border-white/20 dark:border-white/10 shadow-lg flex items-center gap-6 hover:-translate-y-1 transition-transform h-full">
                    <div className="p-4 bg-green-100/50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl">
                      <Target className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">Result Driven</h4>
                      <p className="text-slate-600 dark:text-slate-400 mt-1">Reduced approval times by <span className="text-slate-900 dark:text-white font-bold">80%</span> via parallel processing.</p>
                    </div>
                 </div>
             </ScrollReveal>
             <ScrollReveal variant="slide-left" delay="delay-300">
                 <div className="bg-white/10 dark:bg-slate-900/30 backdrop-blur-lg p-8 rounded-[2.5rem] border border-white/20 dark:border-white/10 shadow-lg flex items-center gap-6 hover:-translate-y-1 transition-transform h-full">
                    <div className="p-4 bg-purple-100/50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl">
                      <Sparkles className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">Innovation</h4>
                      <p className="text-slate-600 dark:text-slate-400 mt-1">Designed <span className="text-slate-900 dark:text-white font-bold">Dynamic Notification</span> systems boosting user retention.</p>
                    </div>
                 </div>
             </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
