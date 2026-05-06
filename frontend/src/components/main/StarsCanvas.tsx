"use client";

import React, { useRef, useEffect, useState } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
  density: number;
  twinkle: number;
  twinkleSpeed: number;
}

const StarsCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0, radius: 100 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars: Star[] = [];
    const numberOfStars = 1000;

    const init = () => {
      stars = [];
      for (let i = 0; i < numberOfStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        stars.push({
          x,
          y,
          baseX: x,
          baseY: y,
          size: Math.random() * 0.8,
          density: Math.random() * 20 + 1,
          twinkle: Math.random() * Math.PI * 2,
          twinkleSpeed: Math.random() * 0.05 + 0.01,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        
        // Mouse interaction logic
        const dx = mouse.current.x - star.x;
        const dy = mouse.current.y - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = mouse.current.radius;
        const force = (maxDistance - distance) / maxDistance;
        const directionX = forceDirectionX * force * star.density;
        const directionY = forceDirectionY * force * star.density;

        if (distance < mouse.current.radius) {
          star.x -= directionX;
          star.y -= directionY;
        } else {
          if (star.x !== star.baseX) {
            const dxBack = star.x - star.baseX;
            star.x -= dxBack / 10;
          }
          if (star.y !== star.baseY) {
            const dyBack = star.y - star.baseY;
            star.y -= dyBack / 10;
          }
        }

        // Twinkling effect
        star.twinkle += star.twinkleSpeed;
        const opacity = 0.2 + Math.abs(Math.sin(star.twinkle)) * 0.6;

        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = event.x;
      mouse.current.y = event.y;
    };

    window.addEventListener("mousemove", handleMouseMove);
    init();
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [windowSize]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ background: "transparent" }}
    />
  );
};

export default StarsCanvas;
