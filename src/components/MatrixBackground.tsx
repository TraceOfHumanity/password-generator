import {useEffect, useRef, useState} from "react";

export const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const columns = Math.floor(width / 20) + 1;
  const yPositions = Array(columns).fill(0);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "rgba(0, 0, 0, 0.2)");
    gradient.addColorStop(1, "rgba(17, 17, 17, 0.7)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const matrix = () => {
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = "16pt monospace";

      yPositions.forEach((y, index) => {
        const text = String.fromCharCode(Math.random() * 256);
        const x = index * 20;

        const hue = 183 + Math.random() * 25;
        const color = `hsl(${hue}, 0%, 40%)`;

        ctx.fillStyle = color;
        ctx.fillText(text, x, y);

        if (y > 100 + Math.random() * 1e4) {
          yPositions[index] = 0;
        } else {
          yPositions[index] = y + 20;
        }
      });
    };

    window.onresize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    const interval = setInterval(matrix, 60);

    return () => clearInterval(interval);
  }, [width, height, yPositions]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
    />
  );
};
