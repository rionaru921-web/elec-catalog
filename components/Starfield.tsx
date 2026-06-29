'use client';

import { useEffect, useRef } from 'react';

/**
 * 控えめなランダム星空（インナーページ用）
 */
export default function Starfield({
  starCount = 180,
  className = ''
}: {
  starCount?: number;
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

    type Star = {
      x: number;
      y: number;
      size: number;
      twinkleSpeed: number;
      twinkleOffset: number;
      isGreen: boolean;
    };
    let stars: Star[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      stars = Array.from({ length: starCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.4 + 0.3,
        twinkleSpeed: 0.002 + Math.random() * 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
        isGreen: Math.random() < 0.18
      }));
    };
    resize();
    window.addEventListener('resize', resize);

    let frame = 0;
    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      for (const s of stars) {
        const twinkle = (Math.sin(frame * s.twinkleSpeed + s.twinkleOffset) + 1) / 2;
        const alpha = 0.2 + twinkle * 0.6;

        if (s.isGreen) {
          ctx.fillStyle = `rgba(0, 255, 149, ${alpha})`;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.7})`;
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(render);
    };
    animationRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [starCount]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 -z-10 ${className}`}
      aria-hidden
    />
  );
}
