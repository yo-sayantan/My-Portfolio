import React from 'react';
import { SUMMARY, AWARDS } from '../constants';
import { Bot, Trophy, Target, Brain, Sparkles, Server, Cpu, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-transparent relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tighter mb-4">Beyond the Code</h2>
            <div className="h-1.5 w-24 bg-primary-600 rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Summary Block */}
          <div className="md:col-span-8 bg-white/20 dark:bg-slate-900/40 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] border border-white/30 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-primary-100/80 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Engineering Philosophy</h3>
            </div>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-loose font-medium animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-forwards">
              {SUMMARY}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Java Champion', 'Backend Engineer', 'AI Enthusiast'].map(tag => (
                <span key={tag} className="px-4 py-2 rounded-full bg-white/30 dark:bg-white/10 text-slate-700 dark:text-slate-300 font-semibold text-sm border border-white/30 dark:border-white/10 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Expanded AI Focus Block */}
          <div className="md:col-span-4 bg-slate-900/80 dark:bg-black/60 backdrop-blur-sm p-8 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden group border border-white/10">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 bg-white/10 rounded-2xl w-fit backdrop-blur-sm">
                   <Bot className="w-8 h-8 text-primary-400" />
                 </div>
                 <div className="p-3 bg-white/10 rounded-2xl w-fit backdrop-blur-sm">
                   <Cpu className="w-8 h-8 text-purple-400" />
                 </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Native Workflow</h3>
              <p className="text-slate-300 leading-relaxed mb-4 text-sm">
                As the team's <strong>AI Champ</strong>, I integrate <span className="text-primary-400 font-bold">GitHub Copilot</span>, <span className="text-primary-400 font-bold">Cursor</span>, and <span className="text-primary-400 font-bold">GPT-5</span> into daily development to accelerate research and troubleshooting.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span>Fluent in advanced <strong>Prompt Engineering</strong></span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Server className="w-4 h-4 text-purple-400" />
                    <span>Building <strong>MCP Servers</strong> for Confluence</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Target className="w-4 h-4 text-green-400" />
                    <span>Mentoring team on AI productivity</span>
                </div>
              </div>
            </div>
          </div>

          {/* Awards Block */}
          <div className="md:col-span-6 bg-white/20 dark:bg-slate-900/40 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/30 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
             <div className="flex items-center gap-4 mb-8">
               <div className="p-3 rounded-2xl bg-yellow-100/80 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400">
                 <Trophy className="w-8 h-8" />
               </div>
               <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Recognition</h3>
             </div>
             <div className="space-y-6">
               {AWARDS.map((award, idx) => (
                 <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/30 dark:bg-white/5 border border-white/40 dark:border-white/10 hover:bg-white/50 dark:hover:bg-white/10 transition-colors">
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

          {/* Impact Block */}
          <div className="md:col-span-6 grid grid-rows-2 gap-6">
             <div className="bg-white/20 dark:bg-slate-900/40 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/30 dark:border-white/10 shadow-lg flex items-center gap-6 hover:-translate-y-1 transition-transform">
                <div className="p-4 bg-green-100/80 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl">
                  <Target className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">Result Driven</h4>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">Reduced approval times by <span className="text-slate-900 dark:text-white font-bold">80%</span> via parallel processing.</p>
                </div>
             </div>
             <div className="bg-white/20 dark:bg-slate-900/40 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/30 dark:border-white/10 shadow-lg flex items-center gap-6 hover:-translate-y-1 transition-transform">
                <div className="p-4 bg-purple-100/80 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl">
                  <Sparkles className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">Innovation</h4>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">Designed <span className="text-slate-900 dark:text-white font-bold">Dynamic Notification</span> systems boosting user retention.</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;