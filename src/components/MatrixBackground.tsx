import React, {useRef, useEffect} from "react";

export const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const cols = Math.floor(width / 20) + 1;
  const yPosition = Array(cols).fill(0);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;

    if (!ctx) return;

    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, "rgba(0, 0, 0, 0.2)");
    gradient.addColorStop(1, "rgba(17, 17, 17, 0.7)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    const matrix = () => {
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      ctx.font = "15pt monospace";

      yPosition.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 256);
        const x = ind * 20;

        const hue = 183;
        const color = `hsl(${hue}, 0%, 40%)`;
        ctx.fillStyle = color;

        ctx.fillText(text, x, y);

        if (y > 100 + Math.random() * 10000) {
          yPosition[ind] = 0;
        } else {
          yPosition[ind] = y + 20;
        }
      });
    };

    window.onresize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    const interval = setInterval(matrix, 60);

    return () => clearInterval(interval);
  }, [height, width, yPosition]);

  return (
    <canvas
      ref={canvasRef}
      style={{position: "absolute", top: 0, left: 0}}></canvas>
  );
};
