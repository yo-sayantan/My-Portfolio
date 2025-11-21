
import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Github, Linkedin, Heart, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socialIcons = [
    { Icon: Github, href: SOCIAL_LINKS.github, label: "GitHub", color: "hover:bg-slate-700 hover:text-white" },
    { Icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn", color: "hover:bg-[#0077b5] hover:text-white" },
    { Icon: Mail, href: `mailto:${SOCIAL_LINKS.email}`, label: "Email", color: "hover:bg-red-500 hover:text-white" }
  ];

  return (
    <footer className="bg-white/10 dark:bg-slate-900/40 backdrop-blur-xl border-t border-white/10 text-slate-600 dark:text-slate-400 py-6 relative z-20 shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left space-y-1">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Sayantan<span className="text-primary-500">.Dev</span></h3>
          <p className="text-xs font-medium text-slate-600 dark:text-slate-500 max-w-xs">
            Building scalable backend solutions and cloud architectures.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-2">
            {socialIcons.map((item, idx) => (
              <a 
                key={idx}
                href={item.href}
                target={item.label !== 'Email' ? "_blank" : undefined}
                rel={item.label !== 'Email' ? "noopener noreferrer" : undefined}
                className={`p-2 rounded-lg bg-white/40 dark:bg-slate-800/50 border border-white/20 dark:border-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${item.color}`}
                aria-label={item.label}
              >
                <item.Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <p className="text-[10px] flex items-center gap-1 font-semibold text-slate-600 dark:text-slate-500">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
