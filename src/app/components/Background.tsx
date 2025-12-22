import { useEffect, useRef } from "react";

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create flowing waves
    const waves: Array<{
      y: number;
      length: number;
      amplitude: number;
      frequency: number;
      speed: number;
      color: string;
    }> = [
      {
        y: canvas.height * 0.3,
        length: canvas.width,
        amplitude: 50,
        frequency: 0.01,
        speed: 0.02,
        color: "rgba(16, 185, 129, 0.1)" // emerald
      },
      {
        y: canvas.height * 0.5,
        length: canvas.width,
        amplitude: 70,
        frequency: 0.008,
        speed: 0.015,
        color: "rgba(6, 182, 212, 0.08)" // cyan
      },
      {
        y: canvas.height * 0.7,
        length: canvas.width,
        amplitude: 60,
        frequency: 0.012,
        speed: 0.025,
        color: "rgba(236, 72, 153, 0.06)" // pink
      }
    ];

    // Create floating orbs
    const orbs: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
      opacity: number;
    }> = [];

    for (let i = 0; i < 30; i++) {
      orbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 100 + 50,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        color: ["#10b981", "#06b6d4", "#ec4899", "#f59e0b"][Math.floor(Math.random() * 4)],
        opacity: Math.random() * 0.05 + 0.02
      });
    }

    let increment = 0;
    let animationFrameId: number;

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.02)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw waves
      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, wave.y);

        for (let x = 0; x < wave.length; x++) {
          const y =
            wave.y +
            Math.sin(x * wave.frequency + increment * wave.speed) * wave.amplitude;
          ctx.lineTo(x, y);
        }

        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 3;
        ctx.stroke();
      });

      // Draw and move orbs
      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < -orb.radius) orb.x = canvas.width + orb.radius;
        if (orb.x > canvas.width + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = canvas.height + orb.radius;
        if (orb.y > canvas.height + orb.radius) orb.y = -orb.radius;

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        gradient.addColorStop(0, orb.color + Math.floor(orb.opacity * 255).toString(16).padStart(2, '0'));
        gradient.addColorStop(1, orb.color + "00");

        ctx.fillStyle = gradient;
        ctx.fillRect(
          orb.x - orb.radius,
          orb.y - orb.radius,
          orb.radius * 2,
          orb.radius * 2
        );
      });

      increment += 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      waves.forEach((wave) => {
        wave.length = canvas.width;
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-950/30 via-black to-pink-950/30 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent pointer-events-none z-0" />
    </>
  );
}
