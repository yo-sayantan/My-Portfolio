import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../constants';
import ScrollReveal from './ScrollReveal';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-32 bg-transparent relative">
      <div className="container mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-16">
            {/* Education Column */}
            <div>
                <ScrollReveal>
                    <div className="mb-10 flex items-center gap-4">
                        <div className="p-3 bg-primary-100 text-primary-600 rounded-2xl">
                            <GraduationCap className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Education</h2>
                    </div>
                </ScrollReveal>

                <div className="space-y-8">
                    {EDUCATION.map((edu, index) => (
                        <ScrollReveal key={index} delay={`delay-[${index * 150}ms]`}>
                        <div className="bg-white/30 backdrop-blur-xl p-8 rounded-[2rem] border border-white/40 shadow-lg hover:shadow-xl transition-all">
                            <h3 className="text-xl font-bold text-slate-900">{edu.school}</h3>
                            <p className="text-lg font-medium text-primary-600 mb-1">{edu.degree}</p>
                            <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-4">{edu.location}</p>
                            
                            <div className="space-y-2">
                                {edu.details.map((detail, i) => (
                                <p key={i} className="text-slate-600 leading-relaxed flex items-start gap-2">
                                    <span className="mt-2 w-1.5 h-1.5 bg-slate-400 rounded-full shrink-0"></span>
                                    {detail}
                                </p>
                                ))}
                            </div>
                        </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            {/* Certifications Column */}
            <div>
                <ScrollReveal delay="delay-200">
                    <div className="mb-10 flex items-center gap-4">
                        <div className="p-3 bg-purple-100 text-purple-600 rounded-2xl">
                            <Award className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Certifications</h2>
                    </div>
                </ScrollReveal>

                <div className="space-y-4">
                  {CERTIFICATIONS.map((cert, index) => (
                    <ScrollReveal key={index} delay={`delay-[${(index * 100) + 200}ms]`}>
                        <div className="flex items-center justify-between p-6 rounded-[1.5rem] bg-white/30 backdrop-blur-xl border border-white/40 shadow-sm hover:shadow-lg hover:bg-white/50 transition-all duration-300 group">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-purple-50/50 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
                                    <Award className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 group-hover:text-purple-700 transition-colors">{cert.name}</h4>
                                    <p className="text-sm text-slate-500 font-medium">{cert.issuer}</p>
                                </div>
                            </div>
                            <span className="text-xs font-bold text-slate-400 bg-white/40 px-3 py-1 rounded-full">
                                {cert.date}
                            </span>
                        </div>
                    </ScrollReveal>
                  ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Education;