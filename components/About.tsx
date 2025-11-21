
import React from 'react';
import { SUMMARY, AWARDS } from '../constants';
import { Bot, Trophy, Target, Brain, Sparkles, Server } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-transparent relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter mb-4">Beyond the Code</h2>
            <div className="h-1.5 w-24 bg-primary-600 rounded-full"></div>
          </div>
        </ScrollReveal>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Summary Block - High Transparency Glass */}
          <div className="md:col-span-8 bg-white/30 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-primary-100 text-primary-600">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Engineering Philosophy</h3>
            </div>
            <p className="text-lg text-slate-600 leading-loose font-medium">
              {SUMMARY}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Java Champion', 'Cloud Architect', 'AI Enthusiast'].map(tag => (
                <span key={tag} className="px-4 py-2 rounded-full bg-white/50 text-slate-600 font-semibold text-sm border border-white/50">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* AI Focus Block */}
          <div className="md:col-span-4 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 bg-white/10 rounded-2xl w-fit backdrop-blur-sm">
                   <Bot className="w-8 h-8 text-primary-400" />
                 </div>
                 <div className="p-3 bg-white/10 rounded-2xl w-fit backdrop-blur-sm">
                   <Server className="w-8 h-8 text-purple-400" />
                 </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Native Workflow</h3>
              <p className="text-slate-300 leading-relaxed mb-6 text-sm">
                Integrating <span className="text-primary-400 font-bold">Gemini</span> & <span className="text-primary-400 font-bold">ChatGPT</span> agents with custom <span className="text-purple-400 font-bold">MCP Servers</span> to automate complex backend architecture.
              </p>
              <div className="flex gap-2">
                 <div className="h-1.5 flex-1 bg-primary-500 rounded-full"></div>
                 <div className="h-1.5 w-8 bg-slate-600 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Awards Block - High Transparency */}
          <div className="md:col-span-6 bg-white/30 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300">
             <div className="flex items-center gap-4 mb-8">
               <div className="p-3 rounded-2xl bg-yellow-100 text-yellow-600">
                 <Trophy className="w-8 h-8" />
               </div>
               <h3 className="text-2xl font-bold text-slate-800">Recognition</h3>
             </div>
             <div className="space-y-6">
               {AWARDS.map((award, idx) => (
                 <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/40 border border-white/50 hover:bg-white/60 transition-colors">
                    <span className="text-4xl">🏆</span>
                    <div>
                      <h4 className="font-bold text-slate-900">{award.title}</h4>
                      <p className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-1">{award.issuer} • {award.year}</p>
                      <p className="text-sm text-slate-500">{award.description}</p>
                    </div>
                 </div>
               ))}
             </div>
          </div>

          {/* Impact Block - High Transparency */}
          <div className="md:col-span-6 grid grid-rows-2 gap-6">
             <div className="bg-white/30 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/40 shadow-xl flex items-center gap-6 hover:-translate-y-1 transition-transform">
                <div className="p-4 bg-green-100 text-green-600 rounded-2xl">
                  <Target className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Result Driven</h4>
                  <p className="text-slate-600 mt-1">Reduced approval times by <span className="text-slate-900 font-bold">80%</span> via parallel processing.</p>
                </div>
             </div>
             <div className="bg-white/30 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/40 shadow-xl flex items-center gap-6 hover:-translate-y-1 transition-transform">
                <div className="p-4 bg-purple-100 text-purple-600 rounded-2xl">
                  <Sparkles className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Innovation</h4>
                  <p className="text-slate-600 mt-1">Designed <span className="text-slate-900 font-bold">Dynamic Notification</span> systems boosting user retention.</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;