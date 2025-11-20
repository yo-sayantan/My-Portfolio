import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Header: React.FC = () => {
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
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 text-xl font-bold text-white"
        >
          <div className="bg-primary-600 p-1.5 rounded-lg text-white shadow-lg shadow-primary-500/20">
            <Code2 size={20} />
          </div>
          <span>Sayantan<span className="text-primary-400">.Dev</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-sm font-bold text-white bg-primary-600 rounded-full hover:bg-primary-700 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900 border-t border-slate-800 shadow-2xl py-6 px-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg font-medium text-slate-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <hr className="border-slate-800 my-2" />
          <a 
            href="/resume.pdf"
            target="_blank"
            className="text-center px-5 py-3 text-base font-bold text-white bg-primary-600 rounded-xl hover:bg-primary-700 transition-colors"
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;