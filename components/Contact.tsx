
import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Mail, Phone, MapPin, Send, ArrowRight, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setStatus('submitting');

    // Simulate API call
    setTimeout(() => {
      // For demonstration, we'll assume success
      const success = true;

      if (success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset status to allow new submissions after delay
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 relative">
      
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="bg-white/10 dark:bg-slate-900/30 backdrop-blur-lg rounded-[3rem] p-8 md:p-16 overflow-hidden relative shadow-2xl border border-slate-200 dark:border-white/10">
           {/* Background Accents */}
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/20 dark:bg-primary-600/10 blur-[100px] rounded-full pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/20 dark:bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>

           <div className="grid lg:grid-cols-2 gap-16 items-center">
             
             {/* Left Side - Text & Info */}
             <div className="text-left">
                <ScrollReveal variant="slide-right">
                  <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tighter mb-6">
                    Let's build something <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-500">extraordinary.</span>
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-md leading-relaxed">
                    Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
                  </p>
                </ScrollReveal>

                <ScrollReveal delay="delay-100" variant="fade-up">
                  <div className="space-y-6">
                    <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center gap-5 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-400 transition-all duration-300 shadow-sm group-hover:shadow-blue-500/30">
                        <Mail className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email Me</p>
                        <p className="text-lg font-medium text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">{SOCIAL_LINKS.email}</p>
                      </div>
                    </a>

                    <a href={`tel:${SOCIAL_LINKS.phone}`} className="flex items-center gap-5 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:bg-green-500 group-hover:border-green-400 transition-all duration-300 shadow-sm group-hover:shadow-green-500/30">
                        <Phone className="w-6 h-6 text-green-500 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                         <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Call Me</p>
                         <p className="text-lg font-medium text-slate-900 dark:text-white group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors">{SOCIAL_LINKS.phone}</p>
                      </div>
                    </a>
                    
                    <div className="flex items-center gap-5 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-sm">
                        <MapPin className="w-6 h-6 text-slate-400 dark:text-slate-400" />
                      </div>
                      <div>
                         <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Location</p>
                         <p className="text-lg font-medium text-slate-900 dark:text-white">Hyderabad, Telangana</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
             </div>

             {/* Right Side - Form */}
             <ScrollReveal delay="delay-200" variant="slide-left">
               <div className="bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-8 rounded-[2.5rem] relative shadow-xl">
                  <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Your Name</label>
                      <input 
                        id="name"
                        name="name"
                        type="text" 
                        value={formData.name}
                        onChange={handleChange}
                        className={`
                          w-full bg-white dark:bg-black/20 border rounded-xl px-5 py-3.5 text-slate-900 dark:text-white placeholder:text-slate-400 
                          focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 focus:bg-white dark:focus:bg-black/40 
                          transition-all duration-300 font-medium
                          ${errors.name ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-white/10'}
                        `}
                        placeholder="John Doe" 
                      />
                      {errors.name && <p className="text-red-500 text-xs ml-1 animate-in slide-in-from-left-1">{errors.name}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                      <input 
                        id="email"
                        name="email"
                        type="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className={`
                          w-full bg-white dark:bg-black/20 border rounded-xl px-5 py-3.5 text-slate-900 dark:text-white placeholder:text-slate-400 
                          focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 focus:bg-white dark:focus:bg-black/40 
                          transition-all duration-300 font-medium
                          ${errors.email ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-white/10'}
                        `}
                        placeholder="john@example.com" 
                      />
                      {errors.email && <p className="text-red-500 text-xs ml-1 animate-in slide-in-from-left-1">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Message</label>
                      <textarea 
                        id="message"
                        name="message"
                        rows={4} 
                        value={formData.message}
                        onChange={handleChange}
                        className={`
                          w-full bg-white dark:bg-black/20 border rounded-xl px-5 py-3.5 text-slate-900 dark:text-white placeholder:text-slate-400 
                          focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 focus:bg-white dark:focus:bg-black/40 
                          transition-all duration-300 font-medium resize-none
                          ${errors.message ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-white/10'}
                        `}
                        placeholder="Tell me about your project..."
                      ></textarea>
                      {errors.message && <p className="text-red-500 text-xs ml-1 animate-in slide-in-from-left-1">{errors.message}</p>}
                    </div>

                    <button 
                      type="submit" 
                      disabled={status === 'submitting' || status === 'success'}
                      className={`
                        w-full font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg 
                        active:scale-95 disabled:opacity-80 disabled:cursor-not-allowed disabled:active:scale-100
                        ${status === 'success' 
                          ? 'bg-green-500 text-white hover:bg-green-600 shadow-green-500/20' 
                          : 'bg-slate-900 text-white hover:bg-primary-600 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 shadow-slate-900/10'
                        }
                        ${status === 'error' ? 'bg-red-500 text-white hover:bg-red-600 shadow-red-500/20' : ''}
                      `}
                    >
                       {status === 'submitting' ? (
                         <>
                           <Loader2 className="w-5 h-5 animate-spin" />
                           Sending...
                         </>
                       ) : status === 'success' ? (
                         <>
                           <CheckCircle className="w-5 h-5 animate-bounce" />
                           Message Sent!
                         </>
                       ) : status === 'error' ? (
                         <>
                           <AlertCircle className="w-5 h-5" />
                           Failed. Try Again.
                         </>
                       ) : (
                         <>
                           Send Message
                           <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                         </>
                       )}
                    </button>

                    {status === 'success' && (
                        <p className="text-green-600 dark:text-green-400 text-sm text-center font-medium animate-in fade-in mt-2">
                            Thanks for reaching out! I'll get back to you soon.
                        </p>
                    )}
                     {status === 'error' && (
                        <p className="text-red-500 dark:text-red-400 text-sm text-center font-medium animate-in fade-in mt-2">
                            Something went wrong. Please email me directly.
                        </p>
                    )}
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
