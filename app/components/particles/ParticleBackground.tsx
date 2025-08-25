'use client';

import React, { useEffect, useRef, useMemo } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  life: number;
  maxLife: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const isInteractingRef = useRef(false);

  const colors = useMemo(() => [
    '#38bdf8', // primary-400
    '#0ea5e9', // primary-500
    '#facc15', // accent-400
    '#eab308', // accent-500
    '#64748b', // gray-500
    '#94a3b8', // gray-400
  ], []);

  const createParticle = (x?: number, y?: number): Particle => {
    const canvas = canvasRef.current;
    if (!canvas) return {} as Particle;

    return {
      x: x ?? Math.random() * canvas.width,
      y: y ?? Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 3 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.8 + 0.2,
      life: 0,
      maxLife: Math.random() * 300 + 200,
    };
  };

  const initParticles = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    particlesRef.current = [];
    const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 8000));
    
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(createParticle());
    }
  };

  const updateParticles = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    particlesRef.current.forEach((particle, index) => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life++;

      // Mouse interaction
      if (isInteractingRef.current) {
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.vx += (dx / distance) * force * 0.3;
          particle.vy += (dy / distance) * force * 0.3;
        }
      }

      // Apply friction
      particle.vx *= 0.99;
      particle.vy *= 0.99;

      // Boundary bounce
      if (particle.x <= 0 || particle.x >= canvas.width) {
        particle.vx *= -0.7;
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
      }
      if (particle.y <= 0 || particle.y >= canvas.height) {
        particle.vy *= -0.7;
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      }

      // Fade out near end of life
      if (particle.life > particle.maxLife * 0.8) {
        particle.alpha *= 0.98;
      }

      // Remove dead particles
      if (particle.life > particle.maxLife || particle.alpha < 0.01) {
        particlesRef.current[index] = createParticle();
      }
    });
  };

  const drawParticles = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw particles
    particlesRef.current.forEach(particle => {
      ctx.save();
      ctx.globalAlpha = particle.alpha;
      ctx.fillStyle = particle.color;
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = particle.size * 2;
      
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    // Draw connections
    ctx.save();
    particlesRef.current.forEach((particle, i) => {
      particlesRef.current.slice(i + 1).forEach(otherParticle => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          const alpha = (120 - distance) / 120 * 0.2;
          ctx.globalAlpha = alpha;
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.stroke();
        }
      });
    });
    ctx.restore();
  };

  const animate = () => {
    updateParticles();
    drawParticles();
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
  };

  const handleMouseMove = (e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseEnter = () => {
    isInteractingRef.current = true;
  };

  const handleMouseLeave = () => {
    isInteractingRef.current = false;
  };

  const handleClick = (e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Create burst of particles at click location
    for (let i = 0; i < 5; i++) {
      particlesRef.current.push(createParticle(x, y));
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    resizeCanvas();
    animate();

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleClick);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [animate, handleClick, resizeCanvas]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-auto z-0"
      style={{
        background: 'transparent',
      }}
    />
  );
};

export default ParticleBackground;