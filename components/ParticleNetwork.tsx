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
        this.vx = (Math.random() - 0.5) * 0.3; // Slower, calmer movement
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 2.5 + 1.5; // Slightly larger, varied sizes

        // Assign colors based on reference image distribution (mostly dark, some accents)
        const rand = Math.random();
        if (rand > 0.96) this.color = 'rgba(249, 115, 22, 0.8)'; // Orange-500
        else if (rand > 0.90) this.color = 'rgba(59, 130, 246, 0.8)'; // Blue-500
        else if (rand > 0.84) this.color = 'rgba(236, 72, 153, 0.8)'; // Pink-500
        else this.color = 'rgba(51, 65, 85, 0.6)'; // Slate-700 (Dark Grey)
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
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
      // Adjust density to match the clean look of the image
      const particleCount = Math.min(Math.floor((width * height) / 12000), 90);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        // Connect particles (The Network Effect)
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particle.x - particles[j].x;
          const dy = particle.y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 130) {
            ctx.beginPath();
            // Very subtle grey lines for the network
            ctx.strokeStyle = `rgba(100, 116, 139, ${0.15 * (1 - distance / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // Reactive Mouse Connections
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 220) {
          ctx.beginPath();
          // Blue tint for mouse interactions to highlight reactivity
          ctx.strokeStyle = `rgba(14, 165, 233, ${0.3 * (1 - distance / 220)})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
          
          // Slight attraction effect (optional, keeping subtle)
          particle.vx += (mouse.x - particle.x) * 0.00005;
          particle.vy += (mouse.y - particle.y) * 0.00005;
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
      // Multiply mode helps the grey dots sit nicely on the light background
      style={{ mixBlendMode: 'multiply' }} 
    />
  );
};

export default ParticleNetwork;