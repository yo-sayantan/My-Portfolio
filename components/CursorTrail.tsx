import React, { useEffect, useRef } from 'react';

const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    size: number;
    color: string;
    life: number;
    vx: number;
    vy: number;
  }>>([]);
  const animationFrameId = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Colors matching the theme (Primary Blue, Purple, Sky Blue)
    const colors = [
      'rgba(14, 165, 233, 0.6)', // Primary-500
      'rgba(168, 85, 247, 0.6)', // Purple-500
      'rgba(56, 189, 248, 0.6)'  // Sky-400
    ];

    const handleMouseMove = (e: MouseEvent) => {
      // Limit total particles for performance
      if (particlesRef.current.length > 150) return;

      // Spawn particles
      for (let i = 0; i < 2; i++) {
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 4 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 1.0,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
        });
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i];
        
        p.life -= 0.02; // Fade out speed
        p.x += p.vx;
        p.y += p.vy;
        p.size *= 0.95; // Shrink speed
        
        if (p.life <= 0 || p.size < 0.5) {
          particlesRef.current.splice(i, 1);
          i--;
          continue;
        }

        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      animationFrameId.current = requestAnimationFrame(render);
    };

    // Only activate on devices with fine pointer (mouse)
    if (window.matchMedia('(pointer: fine)').matches) {
        window.addEventListener('mousemove', handleMouseMove);
        render();
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[100]"
    />
  );
};

export default CursorTrail;