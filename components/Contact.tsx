
import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative">
      {/* Distinct Background for Contact Section */}
      <div className="absolute inset-0 bg-slate-900/5 dark:bg-black/20 backdrop-blur-sm clip-path-slant"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="bg-slate-900 dark:bg-slate-950 rounded-[3rem] p-8 md:p-16 overflow-hidden relative shadow-2xl border border-slate-800">
           {/* Background Accents */}
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/10 blur-[100px] rounded-full pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>

           <div className="grid lg:grid-cols-2 gap-16 items-center">
             
             {/* Left Side - Text & Info */}
             <div className="text-left">
                <ScrollReveal variant="slide-right">
                  <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
                    Let's build something <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">extraordinary.</span>
                  </h2>
                  <p className="text-slate-400 text-lg mb-10 max-w-md leading-relaxed">
                    Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
                  </p>
                </ScrollReveal>

                <ScrollReveal delay="delay-100" variant="fade-up">
                  <div className="space-y-6">
                    <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center gap-5 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary-500 group-hover:border-primary-400 transition-all duration-300 shadow-lg">
                        <Mail className="w-6 h-6 text-slate-300 group-hover:text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email Me</p>
                        <p className="text-lg font-medium text-white group-hover:text-primary-400 transition-colors">{SOCIAL_LINKS.email}</p>
                      </div>
                    </a>

                    <a href={`tel:${SOCIAL_LINKS.phone}`} className="flex items-center gap-5 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500 group-hover:border-purple-400 transition-all duration-300 shadow-lg">
                        <Phone className="w-6 h-6 text-slate-300 group-hover:text-white" />
                      </div>
                      <div>
                         <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Call Me</p>
                         <p className="text-lg font-medium text-white group-hover:text-purple-400 transition-colors">{SOCIAL_LINKS.phone}</p>
                      </div>
                    </a>
                    
                    <div className="flex items-center gap-5 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg">
                        <MapPin className="w-6 h-6 text-slate-300" />
                      </div>
                      <div>
                         <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Location</p>
                         <p className="text-lg font-medium text-white">Hyderabad, Telangana</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
             </div>

             {/* Right Side - Form */}
             <ScrollReveal delay="delay-200" variant="slide-left">
               <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] relative shadow-2xl">
                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Your Name</label>
                      <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary-500/50 focus:bg-black/40 transition-all font-medium" placeholder="John Doe" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                      <input type="email" className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary-500/50 focus:bg-black/40 transition-all font-medium" placeholder="john@example.com" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                      <textarea rows={4} className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary-500/50 focus:bg-black/40 transition-all font-medium resize-none" placeholder="Tell me about your project..."></textarea>
                    </div>

                    <button className="w-full bg-white text-slate-900 font-bold py-4 rounded-xl hover:bg-primary-50 transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1 shadow-lg hover:shadow-white/10">
                       Send Message
                       <ArrowRight size={20} />
                    </button>
                  </form>
               </div>
             </ScrollReveal>

           </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
