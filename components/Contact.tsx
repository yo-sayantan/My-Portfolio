import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-secondary text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          
          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
                <p className="text-slate-300 text-lg">
                  I'm always open to discussing product design work or partnership opportunities. 
                  Feel free to reach out if you have an exciting project in mind.
                </p>
              </div>

              <div className="space-y-6">
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-3 bg-primary-600 rounded-full">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email Me</p>
                    <p className="font-medium">{SOCIAL_LINKS.email}</p>
                  </div>
                </a>

                <a href={`tel:${SOCIAL_LINKS.phone}`} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-3 bg-primary-600 rounded-full">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Call Me</p>
                    <p className="font-medium">{SOCIAL_LINKS.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                  <div className="p-3 bg-primary-600 rounded-full">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Location</p>
                    <p className="font-medium">Hyderabad, Telangana</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay="delay-200">
            <div className="bg-white rounded-2xl p-8 text-slate-900 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
                  <input type="text" id="subject" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="Project discussion" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none" placeholder="Tell me about your project..."></textarea>
                </div>

                <button type="submit" className="w-full py-3.5 px-6 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-primary-500/30 transition-all flex items-center justify-center gap-2">
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