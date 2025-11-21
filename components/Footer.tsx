
import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Github, Linkedin, Heart, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socialIcons = [
    { 
      Icon: Github, 
      href: SOCIAL_LINKS.github, 
      label: "GitHub", 
      color: "bg-white text-gray-600 hover:bg-gray-600 hover:text-white dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-white dark:hover:text-slate-900" 
    },
    { 
      Icon: Linkedin, 
      href: SOCIAL_LINKS.linkedin, 
      label: "LinkedIn", 
      color: "bg-white text-blue-600 hover:bg-blue-600 hover:text-white dark:bg-slate-800 dark:text-slate-400" 
    },
    { 
      Icon: Mail, 
      href: `mailto:${SOCIAL_LINKS.email}`, 
      label: "Email", 
      color: "bg-white text-red-600 hover:bg-red-600 hover:text-white dark:bg-slate-800 dark:text-slate-400" 
    }
  ];

  return (
    <footer className="bg-white/5 dark:bg-slate-900/20 backdrop-blur-xl border-t border-slate-200/50 dark:border-white/5 text-slate-600 dark:text-slate-400 py-6 relative z-20 mt-10">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
           {/* Brand Section - Left */}
           <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                Sayantan<span className="text-primary-500">.Dev</span>
              </h3>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-500 max-w-xs">
                Engineering robust cloud architectures for the modern web.
              </p>
           </div>

           {/* Social Icons - Right */}
           <div className="flex items-center gap-3">
              {socialIcons.map((item, idx) => (
                <a 
                  key={idx}
                  href={item.href}
                  target={item.label !== 'Email' ? "_blank" : undefined}
                  rel={item.label !== 'Email' ? "noopener noreferrer" : undefined}
                  className={`flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-lg group ${item.color}`}
                  aria-label={item.label}
                  title={item.label}
                >
                  <item.Icon className="w-4 h-4 transition-transform group-hover:rotate-12" />
                </a>
              ))}
           </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent mb-4"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
          <p>
            © {new Date().getFullYear()} Sayantan Biswas. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" /> using React
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
