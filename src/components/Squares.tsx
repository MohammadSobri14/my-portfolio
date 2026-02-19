import React, { useRef, useEffect } from "react";

type CanvasStrokeStyle = string | CanvasGradient | CanvasPattern;

interface SquaresProps {
  direction?: "diagonal" | "up" | "right" | "down" | "left";
  speed?: number;
  borderColor?: CanvasStrokeStyle;
  squareSize?: number;
  hoverFillColor?: CanvasStrokeStyle;
}

interface GridOffset {
  x: number;
  y: number;
}

const Squares: React.FC<SquaresProps> = ({
  direction = "right",
  speed = 1,
  borderColor = "#999",
  squareSize = 40,
  hoverFillColor = "#14D1F2",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const gridOffset = useRef<GridOffset>({ x: 0, y: 0 });
  const hoveredSquare = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const offsetX = gridOffset.current.x % squareSize;
      const offsetY = gridOffset.current.y % squareSize;

      for (
        let x = -squareSize;
        x < canvas.width + squareSize;
        x += squareSize
      ) {
        for (
          let y = -squareSize;
          y < canvas.height + squareSize;
          y += squareSize
        ) {
          const drawX = x - offsetX;
          const drawY = y - offsetY;

          const currentX = Math.floor((x + gridOffset.current.x) / squareSize);
          const currentY = Math.floor((y + gridOffset.current.y) / squareSize);

          // Hover fill
          if (
            hoveredSquare.current &&
            currentX === hoveredSquare.current.x &&
            currentY === hoveredSquare.current.y
          ) {
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(drawX, drawY, squareSize, squareSize);
          }

          // Border
          ctx.strokeStyle = borderColor;
          ctx.strokeRect(drawX, drawY, squareSize, squareSize);
        }
      }

      // Radial fade overlay (biar lebih aesthetic)
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2,
      );

      gradient.addColorStop(0, "rgba(0,0,0,0)");
      gradient.addColorStop(1, "#060010");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = () => {
      const effectiveSpeed = Math.max(speed, 0.1);

      switch (direction) {
        case "right":
          gridOffset.current.x -= effectiveSpeed;
          break;
        case "left":
          gridOffset.current.x += effectiveSpeed;
          break;
        case "up":
          gridOffset.current.y += effectiveSpeed;
          break;
        case "down":
          gridOffset.current.y -= effectiveSpeed;
          break;
        case "diagonal":
          gridOffset.current.x -= effectiveSpeed;
          gridOffset.current.y -= effectiveSpeed;
          break;
      }

      draw();
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const adjustedX = mouseX + gridOffset.current.x;
      const adjustedY = mouseY + gridOffset.current.y;

      hoveredSquare.current = {
        x: Math.floor(adjustedX / squareSize),
        y: Math.floor(adjustedY / squareSize),
      };
    };

    const handleMouseLeave = () => {
      hoveredSquare.current = null;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [direction, speed, borderColor, hoverFillColor, squareSize]);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
};

export default Squares;
