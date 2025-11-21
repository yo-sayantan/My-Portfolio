import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-transparent relative">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
            <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter mb-3">Get in Touch</h2>
                <p className="text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                  Ready to build something amazing? Let's start the conversation.
                </p>
            </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          
          <ScrollReveal delay="delay-100">
            <div className="h-full bg-white/10 dark:bg-slate-900/30 backdrop-blur-lg p-8 rounded-[2rem] border border-white/20 dark:border-white/10 shadow-xl flex flex-col justify-center">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center gap-4 p-4 rounded-2xl bg-white/20 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/30 hover:bg-white/30 dark:hover:bg-slate-800/50 transition-all group">
                  <div className="p-3 bg-primary-100/50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-xl group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white break-all">{SOCIAL_LINKS.email}</p>
                  </div>
                </a>

                <a href={`tel:${SOCIAL_LINKS.phone}`} className="flex items-center gap-4 p-4 rounded-2xl bg-white/20 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/30 hover:bg-white/30 dark:hover:bg-slate-800/50 transition-all group">
                  <div className="p-3 bg-primary-100/50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-xl group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">{SOCIAL_LINKS.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/20 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/30">
                  <div className="p-3 bg-primary-100/50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-xl">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-0.5">Location</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Hyderabad, Telangana</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay="delay-200">
            <div className="h-full bg-white/10 dark:bg-slate-900/30 backdrop-blur-lg rounded-[2rem] border border-white/20 dark:border-white/10 p-8 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Send a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2.5 rounded-xl bg-white/30 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-700/50 text-slate-900 dark:text-white focus:border-primary-500 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900/30 outline-none transition-all text-sm font-medium placeholder:text-slate-400" placeholder="John Doe" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2.5 rounded-xl bg-white/30 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-700/50 text-slate-900 dark:text-white focus:border-primary-500 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900/30 outline-none transition-all text-sm font-medium placeholder:text-slate-400" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Subject</label>
                  <input type="text" id="subject" className="w-full px-4 py-2.5 rounded-xl bg-white/30 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-700/50 text-slate-900 dark:text-white focus:border-primary-500 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900/30 outline-none transition-all text-sm font-medium placeholder:text-slate-400" placeholder="Project discussion" />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Message</label>
                  <textarea id="message" rows={3} className="w-full px-4 py-2.5 rounded-xl bg-white/30 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-700/50 text-slate-900 dark:text-white focus:border-primary-500 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900/30 outline-none transition-all resize-none text-sm font-medium placeholder:text-slate-400" placeholder="Tell me about your project..."></textarea>
                </div>

                <button type="submit" className="w-full py-3.5 px-6 bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-500 hover:to-blue-500 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-primary-500/30 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 mt-2">
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default Contact;