import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../constants';
import ScrollReveal from './ScrollReveal';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-16">
            {/* Education Column */}
            <div>
                <ScrollReveal>
                    <div className="mb-10 flex items-center gap-3">
                        <div className="p-3 bg-primary-100 text-primary-600 rounded-xl">
                            <GraduationCap className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-bold text-secondary">Education</h2>
                    </div>
                </ScrollReveal>

                <div className="space-y-8">
                    {EDUCATION.map((edu, index) => (
                        <ScrollReveal key={index} delay={`delay-[${index * 150}ms]`}>
                        <div className="relative pl-8 border-l-2 border-slate-100 hover:border-primary-500 transition-colors duration-300">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-primary-500 shadow-sm" />
                            <h3 className="text-xl font-bold text-secondary">{edu.school}</h3>
                            <p className="text-lg font-medium text-primary-600 mb-1">{edu.degree}</p>
                            <p className="text-slate-500 text-sm mb-4 font-medium uppercase tracking-wide">{edu.location}</p>
                            
                            <div className="space-y-2">
                                {edu.details.map((detail, i) => (
                                <p key={i} className="text-slate-600 text-sm leading-relaxed">
                                    • {detail}
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
                    <div className="mb-10 flex items-center gap-3">
                        <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
                            <Award className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-bold text-secondary">Certifications</h2>
                    </div>
                </ScrollReveal>

                <div className="space-y-4">
                  {CERTIFICATIONS.map((cert, index) => (
                    <ScrollReveal key={index} delay={`delay-[${(index * 100) + 200}ms]`}>
                        <div className="flex items-center justify-between p-5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
                                    <Award className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary group-hover:text-purple-700 transition-colors">{cert.name}</h4>
                                    <p className="text-sm text-slate-500 font-medium">{cert.issuer}</p>
                                </div>
                            </div>
                            <span className="text-sm font-medium text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm">
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