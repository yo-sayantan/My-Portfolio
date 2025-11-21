
import React, { useEffect, useRef } from 'react';

interface ParticleNetworkProps {
  isDark: boolean;
}

const ParticleNetwork: React.FC<ParticleNetworkProps> = ({ isDark }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Using refs for mouse state to avoid re-renders/closure staleness in animation loop
  const interactionRef = useRef({
    x: -1000,
    y: -1000,
    isClicked: false
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: Particle[] = [];
    
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
      baseVx: number;
      baseVy: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        
        // Liquid-like slow movement
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.3 + 0.1; // Very slow base speed
        this.baseVx = Math.cos(angle) * speed;
        this.baseVy = Math.sin(angle) * speed;
        
        this.vx = this.baseVx;
        this.vy = this.baseVy;
      }

      update() {
        // Smooth return to base velocity (viscosity/damping)
        // This creates the "heavy" liquid feel where momentum is lost slowly
        this.vx += (this.baseVx - this.vx) * 0.02;
        this.vy += (this.baseVy - this.vy) * 0.02;

        // Interaction calculations
        const dx = this.x - interactionRef.current.x;
        const dy = this.y - interactionRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Mouse Repulsion (Pushing through liquid)
        const hoverRadius = 250;
        if (distance < hoverRadius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (hoverRadius - distance) / hoverRadius;
          
          // Gentle push
          const pushStrength = 0.6; 
          this.vx += forceDirectionX * force * pushStrength;
          this.vy += forceDirectionY * force * pushStrength;
        }

        // Click Shockwave
        if (interactionRef.current.isClicked && distance < 400) {
           const forceDirectionX = dx / distance;
           const forceDirectionY = dy / distance;
           const force = (400 - distance) / 400;
           
           const clickStrength = 4; // Strong impulse
           this.vx += forceDirectionX * force * clickStrength;
           this.vy += forceDirectionY * force * clickStrength;
        }

        // Update position
        this.x += this.vx;
        this.y += this.vy;

        // Screen wrapping for continuous flow
        if (this.x < 0) { this.x = width; }
        else if (this.x > width) { this.x = 0; }
        
        if (this.y < 0) { this.y = height; }
        else if (this.y > height) { this.y = 0; }
      }
    }

    const initParticles = () => {
      particles = [];
      // Adjust density for a good mesh
      const particleCount = Math.min(Math.floor((width * height) / 12000), 120);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update physics
      particles.forEach(p => p.update());

      // Reset click state after frame
      if (interactionRef.current.isClicked) {
          interactionRef.current.isClicked = false;
      }

      // Draw Connections
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        
        // Connect to other particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) { // Connection threshold
            ctx.beginPath();
            const opacity = (1 - distance / 180) * 0.5;
            
            // Theme colors: Cyan/Blue for visibility in dark mode, Slate for light
            ctx.strokeStyle = isDark 
                ? `rgba(56, 189, 248, ${opacity})` // Primary-400
                : `rgba(15, 23, 42, ${opacity})`; // Slate-900
            
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Connect to mouse for extra interactivity
        const dx = p1.x - interactionRef.current.x;
        const dy = p1.y - interactionRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 250) {
             ctx.beginPath();
             const opacity = (1 - dist / 250) * 0.5;
             ctx.strokeStyle = isDark 
                ? `rgba(56, 189, 248, ${opacity})` 
                : `rgba(15, 23, 42, ${opacity})`; 
             ctx.moveTo(p1.x, p1.y);
             ctx.lineTo(interactionRef.current.x, interactionRef.current.y);
             ctx.stroke();
        }
      }

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      interactionRef.current.x = e.clientX;
      interactionRef.current.y = e.clientY;
    };

    const handleMouseDown = () => {
        interactionRef.current.isClicked = true;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    
    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default ParticleNetwork;
