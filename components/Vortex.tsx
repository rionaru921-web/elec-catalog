'use client';

import { useEffect, useRef } from 'react';

/**
 * 渦巻き状のネオングリーン粒子アニメーション
 * Canvas APIのみで実装（依存追加なし）
 */
export default function Vortex({
  particleCount = 2500,
  className = ''
}: {
  particleCount?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      centerX = width / 2;
      centerY = height / 2;
    };
    resize();
    window.addEventListener('resize', resize);

    type Particle = {
      angle: number;
      radius: number;
      baseRadius: number;
      size: number;
      speed: number;
      brightness: number;
      hueOffset: number;
    };

    const particles: Particle[] = Array.from({ length: particleCount }, () => {
      const r = Math.random() * Math.min(width, height) * 0.55 + 20;
      return {
        angle: Math.random() * Math.PI * 2,
        radius: r,
        baseRadius: r,
        size: Math.random() * 1.6 + 0.3,
        speed: (0.0008 + Math.random() * 0.0018) * (1 - r / 600),
        brightness: Math.random() * 0.7 + 0.3,
        hueOffset: Math.random() * 0.2 - 0.1
      };
    });

    let frame = 0;
    let isVisible = true;

    const io = new IntersectionObserver(entries => {
      isVisible = entries[0].isIntersecting;
    });
    io.observe(canvas);

    const render = () => {
      frame++;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.18)';
      ctx.fillRect(0, 0, width, height);

      if (!isVisible) {
        animationRef.current = requestAnimationFrame(render);
        return;
      }

      const grad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 120);
      grad.addColorStop(0, 'rgba(0, 255, 149, 0.45)');
      grad.addColorStop(0.5, 'rgba(0, 255, 149, 0.08)');
      grad.addColorStop(1, 'rgba(0, 255, 149, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      for (const p of particles) {
        p.angle += p.speed;

        const breath = Math.sin(frame * 0.005 + p.baseRadius * 0.01) * 8;
        p.radius = p.baseRadius + breath;

        const x = centerX + Math.cos(p.angle) * p.radius;
        const y = centerY + Math.sin(p.angle) * p.radius * 0.45;

        const distFromCenter = p.radius / (Math.min(width, height) * 0.55);
        const alpha = p.brightness * (0.4 + 0.6 * (1 - distFromCenter));
        const g = Math.floor(255 - distFromCenter * 50);

        ctx.fillStyle = `rgba(${Math.floor(distFromCenter * 60)}, ${g}, ${149 - Math.floor(distFromCenter * 30)}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(render);
    };

    animationRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
      io.disconnect();
    };
  }, [particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden
    />
  );
}
