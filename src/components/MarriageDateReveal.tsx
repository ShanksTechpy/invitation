import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export const MarriageDateReveal: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isScratching, setIsScratching] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);

  // Initialize Rich Metallic Gold Scratch Foil Overlay
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const card = cardRef.current;
    if (!canvas || !card) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const width = card.offsetWidth || 380;
    const height = card.offsetHeight || 250;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;

    ctx.scale(dpr, dpr);

    // Multi-stop Metallic Gold Foil Gradient
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, '#7B5C15');
    grad.addColorStop(0.18, '#D4AF37');
    grad.addColorStop(0.45, '#FFF3C4');
    grad.addColorStop(0.72, '#D4AF37');
    grad.addColorStop(1, '#4A3508');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Golden Shimmer Sparkles
    ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
    for (let i = 0; i < 180; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const r = Math.random() * 1.8 + 0.4;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Double Filigree Borders (Inner Gold + Dark Accent)
    ctx.strokeStyle = '#FFF5D0';
    ctx.lineWidth = 2;
    ctx.strokeRect(8, 8, width - 16, height - 16);

    ctx.strokeStyle = 'rgba(212, 175, 55, 0.7)';
    ctx.lineWidth = 1;
    ctx.strokeRect(12, 12, width - 24, height - 24);

    // Sacred Ceremonial Bind Thread (Kalava / Red & Gold Thread)
    const centerY = height / 2;

    // Red Base Thread Line
    ctx.strokeStyle = '#B31B1B';
    ctx.lineWidth = 8;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
    ctx.shadowBlur = 6;
    ctx.beginPath();
    ctx.moveTo(16, centerY);
    ctx.lineTo(width - 16, centerY);
    ctx.stroke();

    // Reset Shadow
    ctx.shadowBlur = 0;

    // Golden Intertwined Strand
    ctx.strokeStyle = '#FCEAA6';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    for (let x = 16; x <= width - 16; x += 12) {
      ctx.arc(x, centerY, 3, 0, Math.PI);
    }
    ctx.stroke();

    // Central Sacred Knot Medallion
    ctx.fillStyle = '#8B0000';
    ctx.strokeStyle = '#D4AF37';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(width / 2, centerY, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Center Gold Core Ring
    ctx.fillStyle = '#D4AF37';
    ctx.beginPath();
    ctx.arc(width / 2, centerY, 5, 0, Math.PI * 2);
    ctx.fill();
  }, []);

  useEffect(() => {
    initCanvas();
    const timer = setTimeout(() => {
      initCanvas();
    }, 120);

    const handleResize = () => {
      if (!isRevealed) {
        initCanvas();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [initCanvas, isRevealed]);

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#D4AF37', '#FFF1B0', '#FF3B5C', '#E6C657'],
      });
    } catch {}
  };

  const handleRevealDirectly = () => {
    if (!isRevealed) {
      setIsRevealed(true);
      triggerConfetti();
    }
  };

  const lastCheckRef = useRef<number>(0);

  const checkProgress = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    // Throttle heavy pixel scanning to once per 60ms for silky smooth 60fps scratching
    const now = Date.now();
    if (now - lastCheckRef.current < 60) return;
    lastCheckRef.current = now;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    if (!w || !h) return;

    const step = 20;
    const imgData = ctx.getImageData(0, 0, w, h);
    const data = imgData.data;

    let cleared = 0;
    let total = 0;

    for (let i = 3; i < data.length; i += 4 * step) {
      total++;
      if (data[i] < 60) {
        cleared++;
      }
    }

    const pct = cleared / total;
    // Reveal effortlessly with ~3 scratches (15% cleared area)
    if (pct >= 0.15 && !isRevealed) {
      setIsRevealed(true);
      triggerConfetti();
    }
  }, [isRevealed]);

  const scratchAt = useCallback(
    (clientX: number, clientY: number, isMove = false) => {
      const canvas = canvasRef.current;
      if (!canvas || isRevealed) return;

      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;

      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // Wide scratch brush (desktop 90px, mobile 100px for 3-swipe reveal)
      const isMobile = window.innerWidth < 640;
      const strokeWidth = isMobile ? 100 : 90;
      const radius = strokeWidth / 2;

      ctx.lineWidth = strokeWidth;

      ctx.beginPath();
      if (isMove && lastPosRef.current) {
        ctx.moveTo(lastPosRef.current.x, lastPosRef.current.y);
        ctx.lineTo(x, y);
        ctx.stroke();
      } else {
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      lastPosRef.current = { x, y };
      checkProgress();
    },
    [isRevealed, checkProgress]
  );

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (isRevealed) return;
    setIsScratching(true);
    try {
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}
    scratchAt(e.clientX, e.clientY, false);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isScratching || isRevealed) return;
    scratchAt(e.clientX, e.clientY, true);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    setIsScratching(false);
    lastPosRef.current = null;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  const handleResetScratch = () => {
    setIsRevealed(false);
    setTimeout(() => {
      initCanvas();
    }, 60);
  };

  return (
    <section id="date-reveal" className="py-12 sm:py-16 px-4 bg-gradient-to-b from-[#1F0408] via-[#170306] to-[#120205] text-center relative overflow-hidden">
      {/* Background Soft Glow Ambient */}
      <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
        <div className="w-[400px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37] via-[#5C0612]/30 to-transparent blur-3xl animate-subtle-pulse" />
      </div>

      <div className="max-w-md mx-auto space-y-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-3 flex flex-col items-center"
        >
          <h2 className="font-wedding text-3xl sm:text-4xl md:text-5xl gold-text-gradient font-normal pt-1">
            Scratch to Reveal Our Special Date
          </h2>
        </motion.div>

        {/* ELEGANT COMPACT INVITATION CARD CONTAINER (ROYAL 3D LOOK) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{ y: -6, rotateX: -3, rotateY: 3, scale: 1.02 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="relative mx-auto w-[90vw] max-w-[360px] sm:max-w-[400px] h-[250px] sm:h-[260px] preserve-3d [perspective:1200px] cursor-pointer group"
        >
          {/* Subtle Ambient Radial Gold Aura Behind Card */}
          <div className="absolute inset-0 -m-3 rounded-3xl bg-gradient-to-r from-[#D4AF37]/30 via-[#AA8822]/20 to-[#D4AF37]/30 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* REVEALED CARD CONTENT (MATCHES PAGE THEME COLOR: DEEP PALACE MAROON/DARK RED) */}
          <div
            ref={cardRef}
            className="w-full h-full p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#34080E] via-[#230408] to-[#120205] border-2 border-[#D4AF37]/80 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(212,175,55,0.3)] flex flex-col items-center justify-between relative overflow-hidden text-[#FCEAA6] select-none preserve-3d"
          >
            {/* Corner Decorative Filigree */}
            <div className="absolute top-2 left-2 text-[#D4AF37]/70 text-xs font-serif z-10 pointer-events-none translate-z-10">❖</div>
            <div className="absolute top-2 right-2 text-[#D4AF37]/70 text-xs font-serif z-10 pointer-events-none translate-z-10">❖</div>
            <div className="absolute bottom-2 left-2 text-[#D4AF37]/70 text-xs font-serif z-10 pointer-events-none translate-z-10">❖</div>
            <div className="absolute bottom-2 right-2 text-[#D4AF37]/70 text-xs font-serif z-10 pointer-events-none translate-z-10">❖</div>

            {/* Gold Filigree Inner Line */}
            <div className="absolute inset-2 border border-[#D4AF37]/40 rounded-xl pointer-events-none z-10 translate-z-10" />

            {/* REVEALED CARD CONTENT */}
            {/* Top Subtitle Header */}
            <div className="space-y-0.5 text-center z-10 pt-1 translate-z-20">
              <p className="font-serif-cormorant text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#D4AF37] uppercase">
                THE WEDDING
              </p>
            </div>

            {/* Main Ceremonial Date Display */}
            <div className="space-y-0 text-center z-10 my-auto translate-z-30">
              <p className="font-serif-cormorant text-base sm:text-lg font-semibold text-[#FCEAA6]">
                Wednesday
              </p>

              <h3 className="font-wedding text-3xl sm:text-4xl gold-text-gradient font-normal leading-none py-1 drop-shadow-md">
                10th February
              </h3>

              <p className="font-wedding text-2xl sm:text-3xl text-[#E6C657] font-normal">
                2027
              </p>
            </div>

            {/* Bottom Ceremony Footer */}
            <div className="space-y-0.5 text-center z-10 pb-1 w-full border-t border-[#D4AF37]/40 pt-1.5 translate-z-20">
              <p className="font-serif-cormorant text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase">
                MARRIAGE CEREMONY
              </p>
              <p className="font-sans-inter text-[9px] sm:text-[10px] font-medium text-[#FCEAA6]/80 tracking-wide">
                Salipur, Cuttack
              </p>
            </div>

            {/* GOLDEN SCRATCH OVERLAY CANVAS */}
            <AnimatePresence>
              {!isRevealed && (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 z-30 cursor-pointer select-none touch-none rounded-2xl overflow-hidden shadow-lg translate-z-10"
                >
                  <canvas
                    ref={canvasRef}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                    className="w-full h-full block rounded-2xl touch-none cursor-pointer"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Fallback & Interaction Hint */}
        {!isRevealed ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center pt-2"
          >
            <button
              onClick={handleRevealDirectly}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#F3DB83] via-[#D4AF37] to-[#AA8822] text-[#1F0408] font-sans-inter text-xs uppercase tracking-[0.2em] font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Reveal Wedding Date
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center pt-1"
          >
            <button
              onClick={handleResetScratch}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#D4AF37]/40 bg-[#120205]/80 text-[#E6C657] font-sans-inter text-[11px] uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#120205] transition-all cursor-pointer shadow-md"
            >
              <RotateCcw className="w-3 h-3" />
              Scratch Again
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};








