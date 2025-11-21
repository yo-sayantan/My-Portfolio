import React, { useEffect, useRef } from 'react';

const ParticleNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: Particle[] = [];
    
    // Mouse state
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
        // Ultra slow, ambient drift
        this.vx = (Math.random() - 0.5) * 0.08; 
        this.vy = (Math.random() - 0.5) * 0.08;
        this.size = Math.random() * 2 + 1.5; 

        // Vivid Colors with high opacity for maximum visibility
        const rand = Math.random();
        if (rand > 0.95) this.color = 'rgba(14, 165, 233, 0.9)'; // Primary Blue
        else if (rand > 0.90) this.color = 'rgba(168, 85, 247, 0.9)'; // Purple
        else this.color = 'rgba(71, 85, 105, 0.6)'; // Slate-600 (Darker grey for contrast)
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
      // Very High Density
      const particleCount = Math.min(Math.floor((width * height) / 3500), 300);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        // Network Connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particle.x - particles[j].x;
          const dy = particle.y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            // Stronger opacity for visibility
            ctx.strokeStyle = `rgba(148, 163, 184, ${0.3 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // Mouse Reactivity
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 250) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(14, 165, 233, ${0.5 * (1 - distance / 250)})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
          
          // Gentle magnetic pull
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
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default ParticleNetwork;