import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: string; // CSS class for delay e.g. "delay-100"
  variant?: 'fade-up' | 'zoom-in' | 'fade-in';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = "", 
  threshold = 0.15,
  delay = "delay-0",
  variant = "fade-up"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before bottom
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const getAnimationClasses = () => {
    switch (variant) {
      case 'zoom-in':
        return isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95';
      case 'fade-in':
        return isVisible ? 'opacity-100' : 'opacity-0';
      case 'fade-up':
      default:
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${delay} ${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;