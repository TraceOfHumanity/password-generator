import {useEffect, useRef} from 'react';

const CHARACTERS = ['0', '1'];
const FONT_SIZE = 18;
const FRAME_INTERVAL = 1000 / 20;
const BACKGROUND_COLOR = '#020408';
const GLYPH_COLOR = '#cae0ba';

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let columnCount = 0;
    let drops: number[] = [];
    let speeds: number[] = [];

    const setup = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      columnCount = Math.ceil(window.innerWidth / FONT_SIZE);
      drops = Array.from({length: columnCount}, () =>
        Math.floor((Math.random() * window.innerHeight) / FONT_SIZE) * -1,
      );
      speeds = Array.from({length: columnCount}, () => 0.5 + Math.random());

      ctx.fillStyle = BACKGROUND_COLOR;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    };

    setup();
    window.addEventListener('resize', setup);

    let animationFrameId: number;
    let lastFrameTime = 0;

    const draw = (time: number) => {
      animationFrameId = requestAnimationFrame(draw);

      if (time - lastFrameTime < FRAME_INTERVAL) return;
      lastFrameTime = time;

      ctx.fillStyle = 'rgba(2, 4, 8, 0.1)';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      ctx.font = `${FONT_SIZE}px monospace`;
      ctx.textAlign = 'center';

      for (let i = 0; i < columnCount; i++) {
        const character =
          CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        const x = i * FONT_SIZE + FONT_SIZE / 2;
        const y = drops[i] * FONT_SIZE;

        ctx.fillStyle = GLYPH_COLOR;
        ctx.fillText(character, x, y);

        if (y > window.innerHeight && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i] += speeds[i];
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', setup);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className='fixed inset-0'
    />
  );
};

export default Background;
