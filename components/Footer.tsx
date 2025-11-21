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
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 relative z-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left space-y-2">
          <h3 className="text-2xl font-bold text-white tracking-tight">Sayantan<span className="text-primary-500">.Dev</span></h3>
          <p className="text-sm text-slate-500 max-w-xs">
            Building scalable backend solutions and cloud architectures for the modern web.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex items-center gap-3">
            {socialIcons.map((item, idx) => (
              <a 
                key={idx}
                href={item.href}
                target={item.label !== 'Email' ? "_blank" : undefined}
                rel={item.label !== 'Email' ? "noopener noreferrer" : undefined}
                className={`p-2.5 rounded-lg bg-slate-900 border border-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${item.color}`}
                aria-label={item.label}
              >
                <item.Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <p className="text-xs flex items-center gap-1.5 text-slate-600">
            Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;