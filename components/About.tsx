import React from 'react';
import { SUMMARY } from '../constants';
import { Bot, Users, Zap, Shield } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Bot className="w-6 h-6 text-pink-500" />,
      title: "AI & Automation",
      desc: "Accelerating workflows using AI agents, Copilot, and advanced prompt engineering."
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Performance",
      desc: "Reduced process times by 80% via parallel processing strategies."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: "Leadership",
      desc: "Mentored 20+ junior engineers & interns to successful project delivery."
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: "DevOps & Security",
      desc: "Automated secure workflows using Docker & Oracle Cloud infrastructure."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">About Me</h2>
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                {SUMMARY}
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay="delay-200">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary mb-8 text-center">Key Highlights</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-secondary mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;