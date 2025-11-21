import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Download, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white/30 dark:bg-slate-900/50 backdrop-blur-md border-b border-white/20 dark:border-slate-700/30 py-3 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 group"
        >
          <div className="bg-gradient-to-br from-primary-500 to-blue-600 p-2 rounded-xl text-white shadow-lg shadow-primary-500/30 group-hover:rotate-12 transition-transform duration-300">
            <Code2 size={20} />
          </div>
          <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-slate-900 dark:text-white' : 'text-slate-900 dark:text-white'}`}>
            Sayantan<span className="text-primary-500">.Dev</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white/40 dark:hover:bg-slate-800/50"
            >
              {link.name}
            </a>
          ))}
          
          <div className="ml-4 pl-4 border-l border-slate-200/50 dark:border-slate-700/50 flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-white/20 dark:bg-slate-800/50 hover:bg-white/40 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-200 transition-all duration-300 hover:scale-110 focus:outline-none relative overflow-hidden group"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
              <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-10 transition-opacity rounded-full" />
            </button>

            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-500 hover:to-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/40 hover:-translate-y-0.5 px-6 py-2.5 rounded-full shadow-lg"
            >
              <span>Resume</span>
              <Download size={16} />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/20 dark:bg-slate-800/50 text-slate-900 dark:text-white"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              className="p-2 rounded-full text-slate-900 dark:text-white hover:bg-white/20"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/90 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 shadow-2xl py-8 px-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xl font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 text-center"
            >
              {link.name}
            </a>
          ))}
          <hr className="border-slate-200 dark:border-slate-800 my-2" />
          <a 
            href="/resume.pdf"
            target="_blank"
            className="flex items-center justify-center gap-2 px-5 py-4 text-base font-bold text-white bg-gradient-to-r from-primary-600 to-blue-600 rounded-xl shadow-lg hover:shadow-primary-500/25 transition-all"
          >
            Download Resume
            <Download size={18} />
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;