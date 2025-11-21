
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
  threshold = 0.1,
  delay = "delay-0",
  variant = "fade-up"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility state based on intersection
        // This allows the animation to replay whenever the element enters or leaves the viewport
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: '0px 0px -10% 0px' // Trigger slightly earlier
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
        // Changed translate-y-8 to translate-y-4 for a more subtle effect
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4';
    }
  };

  // duration-700 makes it slower and more elegant
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
