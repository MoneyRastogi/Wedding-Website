import { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random(),
      y: Math.random(),
      radius: Math.random() * 1.4 + 0.45,
      speed: Math.random() * 0.00028 + 0.0001,
      alpha: Math.random() * 0.28 + 0.12,
    }));
    let width = 0;
    let height = 0;
    let frameId;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      particles.forEach((particle) => {
        particle.y = (particle.y - particle.speed + 1) % 1;
        context.beginPath();
        context.arc(particle.x * width, particle.y * height, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(197, 160, 89, ${particle.alpha})`;
        context.fill();
      });
      frameId = window.requestAnimationFrame(draw);
    };

    const start = () => {
      window.cancelAnimationFrame(frameId);
      if (reduceMotion.matches) {
        context.clearRect(0, 0, width, height);
        return;
      }
      draw();
    };

    resize();
    start();
    window.addEventListener('resize', resize);
    reduceMotion.addEventListener('change', start);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      reduceMotion.removeEventListener('change', start);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />;
}