import React, { useEffect, useRef } from 'react';

interface ParticleNetworkProps {
  isDark: boolean;
}

const ParticleNetwork: React.FC<ParticleNetworkProps> = ({ isDark }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: Particle[] = [];
    
    const mouse = { x: -1000, y: -1000 };

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.15; 
        this.vy = (Math.random() - 0.5) * 0.15;
        this.size = Math.random() * 2 + 1.5; 

        // Theme Aware Colors
        const rand = Math.random();
        if (isDark) {
            // Dark Mode Particles (Light/Neon)
            if (rand > 0.92) this.color = 'rgba(14, 165, 233, 0.7)'; // Cyan
            else if (rand > 0.84) this.color = 'rgba(168, 85, 247, 0.7)'; // Purple
            else this.color = 'rgba(148, 163, 184, 0.3)'; // Slate-400
        } else {
            // Light Mode Particles (Darker)
            if (rand > 0.92) this.color = 'rgba(14, 165, 233, 0.8)'; // Blue
            else if (rand > 0.84) this.color = 'rgba(168, 85, 247, 0.8)'; // Purple
            else this.color = 'rgba(30, 41, 59, 0.6)'; // Slate-800
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor((width * height) / 4000), 250);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particle.x - particles[j].x;
          const dy = particle.y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 130) {
            ctx.beginPath();
            // Theme Aware Lines
            const strokeColor = isDark ? `rgba(148, 163, 184, ${0.15 * (1 - distance / 130)})` : `rgba(71, 85, 105, ${0.25 * (1 - distance / 130)})`;
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 250) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(14, 165, 233, ${0.4 * (1 - distance / 250)})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
          particle.vx += (mouse.x - particle.x) * 0.0001;
          particle.vy += (mouse.y - particle.y) * 0.0001;
        }
      });

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    
    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDark]); // Re-run when theme changes

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default ParticleNetwork;