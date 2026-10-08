"use client";

import { useEffect, useRef, useState } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const canvasEl = canvas;
    const context = ctx;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    // Reduce particle count on mobile for performance
    const particleCount = isMobile ? 40 : 80;
    const connectionDistance = isMobile ? 120 : 150;
    const mouse = { x: -1000, y: -1000 };

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
      color: string;
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvasEl.width = width * devicePixelRatio;
      canvasEl.height = height * devicePixelRatio;
      canvasEl.style.width = `${width}px`;
      canvasEl.style.height = `${height}px`;
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    }

    function createParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          color: Math.random() > 0.5 ? "#00d4aa" : "#6366f1",
        });
      }
    }

    function drawParticles() {
      context.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.15;
            context.beginPath();
            context.moveTo(particles[i].x, particles[i].y);
            context.lineTo(particles[j].x, particles[j].y);
            context.strokeStyle = `rgba(0, 212, 170, ${opacity})`;
            context.lineWidth = 1;
            context.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        context.beginPath();
        context.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        const opacityHex = Math.floor(p.opacity * 255).toString(16).padStart(2, "0");
        context.fillStyle = `${p.color}${opacityHex}`;
        context.fill();

        // Glow effect - simplified on mobile
        if (!isMobile) {
          const gradient = context.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4);
          gradient.addColorStop(0, `${p.color}40`);
          gradient.addColorStop(1, `${p.color}00`);
          context.beginPath();
          context.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2);
          context.fillStyle = gradient;
          context.fill();
        }
      });
    }

    function updateParticles() {
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Mouse interaction - disable on mobile for performance
        if (!isMobile) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 200 && distance > 0) {
            const force = (200 - distance) / 200 * 0.5;
            p.vx -= (dx / distance) * force;
            p.vy -= (dy / distance) * force;
          }
        }

        // Boundary bounce
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Clamp position
        p.x = Math.max(0, Math.min(width, p.x));
        p.y = Math.max(0, Math.min(height, p.y));

        // Velocity damping
        p.vx *= 0.99;
        p.vy *= 0.99;
      });
    }

    function animate() {
      updateParticles();
      drawParticles();
      animationRef.current = requestAnimationFrame(animate);
    }

    function handleMouseMove(e: MouseEvent) {
      if (!isMobile) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }
    }

    function handleResize() {
      const prevWidth = width;
      const prevHeight = height;
      resize();
      // Adjust particle positions
      particles.forEach((p) => {
        p.x = (p.x / prevWidth) * width;
        p.y = (p.y / prevHeight) * height;
      });
    }

    // Handle prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return;
    }

    resize();
    createParticles();
    animate();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isMobile]);

  return <canvas ref={canvasRef} id="particles-canvas" aria-hidden="true" />;
}