import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-transparent relative">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
            <div className="mb-16 text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter mb-4">Get in Touch</h2>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                  Have a project in mind or want to discuss modern tech? I'm just a message away.
                </p>
            </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          
          <ScrollReveal delay="delay-100">
            {/* High Transparency Glass */}
            <div className="bg-white/30 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center gap-5 p-4 rounded-2xl bg-white/40 border border-white/50 hover:bg-white/60 hover:shadow-md transition-all group">
                  <div className="p-3 bg-primary-100 text-primary-600 rounded-xl group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-base font-bold text-slate-900 break-all">{SOCIAL_LINKS.email}</p>
                  </div>
                </a>

                <a href={`tel:${SOCIAL_LINKS.phone}`} className="flex items-center gap-5 p-4 rounded-2xl bg-white/40 border border-white/50 hover:bg-white/60 hover:shadow-md transition-all group">
                  <div className="p-3 bg-primary-100 text-primary-600 rounded-xl group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="text-base font-bold text-slate-900">{SOCIAL_LINKS.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-5 p-4 rounded-2xl bg-white/40 border border-white/50">
                  <div className="p-3 bg-primary-100 text-primary-600 rounded-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Location</p>
                    <p className="text-base font-bold text-slate-900">Hyderabad, Telangana</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay="delay-200">
            {/* High Transparency Glass */}
            <div className="bg-white/30 backdrop-blur-xl rounded-[2.5rem] border border-white/40 p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-3 rounded-xl bg-white/40 border border-white/50 text-slate-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all font-medium placeholder:text-slate-400" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-white/40 border border-white/50 text-slate-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all font-medium placeholder:text-slate-400" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Subject</label>
                  <input type="text" id="subject" className="w-full px-4 py-3 rounded-xl bg-white/40 border border-white/50 text-slate-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all font-medium placeholder:text-slate-400" placeholder="Project discussion" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-white/40 border border-white/50 text-slate-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none font-medium placeholder:text-slate-400" placeholder="Tell me about your project..."></textarea>
                </div>

                <button type="submit" className="w-full py-4 px-6 bg-slate-900 hover:bg-primary-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 hover:-translate-y-1">
                  Send Message
                  <Send className="w-5 h-5" />
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