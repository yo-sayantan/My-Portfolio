import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto">
          
          <ScrollReveal>
            <div className="space-y-10">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Let's Work Together</h2>
                <p className="text-slate-600 text-xl leading-relaxed font-medium">
                  I'm always open to discussing product design work or partnership opportunities. 
                  Feel free to reach out if you have an exciting project in mind.
                </p>
              </div>

              <div className="space-y-6">
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center gap-6 p-6 rounded-[2rem] bg-white/80 backdrop-blur-md border border-white/60 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group">
                  <div className="p-4 bg-primary-100 text-primary-600 rounded-full group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-bold mb-1">Email Me</p>
                    <p className="text-lg font-bold text-slate-900">{SOCIAL_LINKS.email}</p>
                  </div>
                </a>

                <a href={`tel:${SOCIAL_LINKS.phone}`} className="flex items-center gap-6 p-6 rounded-[2rem] bg-white/80 backdrop-blur-md border border-white/60 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group">
                  <div className="p-4 bg-primary-100 text-primary-600 rounded-full group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-bold mb-1">Call Me</p>
                    <p className="text-lg font-bold text-slate-900">{SOCIAL_LINKS.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-6 p-6 rounded-[2rem] bg-white/80 backdrop-blur-md border border-white/60 shadow-lg">
                  <div className="p-4 bg-primary-100 text-primary-600 rounded-full">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-bold mb-1">Location</p>
                    <p className="text-lg font-bold text-slate-900">Hyderabad, Telangana</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay="delay-200">
            <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] border border-white/60 p-10 text-slate-900 shadow-xl">
              <h3 className="text-3xl font-bold mb-8">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-slate-700">Name</label>
                    <input type="text" id="name" className="w-full px-6 py-4 rounded-xl bg-white/60 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all font-medium" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700">Email</label>
                    <input type="email" id="email" className="w-full px-6 py-4 rounded-xl bg-white/60 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all font-medium" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold text-slate-700">Subject</label>
                  <input type="text" id="subject" className="w-full px-6 py-4 rounded-xl bg-white/60 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all font-medium" placeholder="Project discussion" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700">Message</label>
                  <textarea id="message" rows={4} className="w-full px-6 py-4 rounded-xl bg-white/60 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none font-medium" placeholder="Tell me about your project..."></textarea>
                </div>

                <button type="submit" className="w-full py-4 px-8 bg-slate-900 hover:bg-primary-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 hover:-translate-y-1">
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