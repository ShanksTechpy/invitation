import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowDown } from 'lucide-react';

export type OpeningState =
  | 'IDLE'
  | 'CARD_OPENING'
  | 'DOORS_OPENING'
  | 'FLYING'
  | 'WELCOME_MOMENT'
  | 'COMPLETED';

interface HeroOpeningProps {
  onSequenceComplete: () => void;
  sequenceState: OpeningState;
  setSequenceState: (state: OpeningState) => void;
}

export const HeroOpening: React.FC<HeroOpeningProps> = ({
  onSequenceComplete,
  sequenceState,
  setSequenceState,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-play video on sequence transition
  useEffect(() => {
    if (sequenceState === 'DOORS_OPENING' || sequenceState === 'FLYING' || sequenceState === 'COMPLETED') {
      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.warn('Autoplay prevented or video interrupted:', err);
        });
      }
    }
  }, [sequenceState]);

  // Lock body scroll during intro sequence to prevent accidental scrolling on mobile
  useEffect(() => {
    if (sequenceState !== 'COMPLETED') {
      document.body.classList.add('scroll-locked');
    } else {
      document.body.classList.remove('scroll-locked');
    }
    return () => {
      document.body.classList.remove('scroll-locked');
    };
  }, [sequenceState]);

  // Allow fast completion via wheel or touch swipe after intro starts
  useEffect(() => {
    const handleUserInteraction = () => {
      if (sequenceState !== 'IDLE' && sequenceState !== 'COMPLETED') {
        setSequenceState('COMPLETED');
        onSequenceComplete();
      }
    };

    window.addEventListener('wheel', handleUserInteraction, { passive: true });
    window.addEventListener('touchmove', handleUserInteraction, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleUserInteraction);
      window.removeEventListener('touchmove', handleUserInteraction);
    };
  }, [sequenceState, onSequenceComplete, setSequenceState]);

  const handleStartSequence = () => {
    if (sequenceState !== 'IDLE') return;

    setSequenceState('CARD_OPENING');

    setTimeout(() => {
      setSequenceState('DOORS_OPENING');
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch((err) => console.log('Video play error:', err));
      }

      setTimeout(() => {
        setSequenceState('FLYING');
        onSequenceComplete();
      }, 1800);
    }, 400);
  };

  const isVideoVisible =
    sequenceState === 'DOORS_OPENING' ||
    sequenceState === 'FLYING' ||
    sequenceState === 'WELCOME_MOMENT' ||
    sequenceState === 'COMPLETED';

  return (
    <div
      className={`relative w-full h-[100svh] min-h-[100svh] overflow-hidden bg-[#120205] select-none ${
        sequenceState === 'COMPLETED' ? 'pointer-events-auto' : ''
      }`}
    >
      {/* 1. FULL-SCREEN PALACE FLY-THROUGH VIDEO HERO BACKGROUND (Behind the Doors) */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-[#120205]">
        <video
          ref={videoRef}
          playsInline
          muted
          autoPlay
          loop
          preload="auto"
          className="w-full h-full object-cover object-center filter contrast-105 saturate-110 brightness-100"
        >
          <source src="/use%20this.mp4" type="video/mp4" />
          <source src="/use-this.mp4" type="video/mp4" />
          <source src="/videos/palace-flythrough.mp4" type="video/mp4" />
        </video>

        {/* Ambient Dark Golden Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-radial-vignette from-transparent via-[#120205]/40 to-[#120205]/85" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#120205]/70 via-transparent to-[#120205]/90" />
      </div>

      {/* 2. GLOWING GAJANANA & INVITATION TEXT OVERLAY (Revealed Over Video) */}
      <AnimatePresence>
        {isVideoVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            className="absolute inset-0 z-30 flex flex-col items-center justify-center px-4 py-8 text-center pointer-events-none"
          >
            <div className="max-w-4xl w-full mx-auto space-y-4 sm:space-y-6 flex flex-col items-center">
              {/* Responsive Glowing Gajanana Emblem */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7, y: -15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                className="flex flex-col items-center"
              >
                <div className="relative p-1 rounded-full border-2 border-[#D4AF37]/80 shadow-[0_0_35px_rgba(212,175,55,0.6)] bg-gradient-to-b from-[#34080E]/90 to-[#120205]/90 overflow-hidden">
                  <div className="w-[clamp(75px,18vw,120px)] h-[clamp(75px,18vw,120px)] rounded-full overflow-hidden relative">
                    <img
                      src="/images/gajanana.jpg"
                      alt="Lord Ganesha Gajanana"
                      className="w-full h-full object-cover filter brightness-110 contrast-115 animate-pulse"
                    />
                    <div className="absolute inset-0 bg-radial-vignette from-transparent via-transparent to-[#120205]/50" />
                  </div>
                  <div className="absolute inset-0 rounded-full border border-[#FCEAA6]/50 pointer-events-none animate-ping opacity-25" />
                </div>
                <span className="mt-2.5 font-serif-cormorant text-[clamp(0.85rem,3vw,1.25rem)] text-[#FCEAA6] tracking-[0.25em] font-medium uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  ॥ श्री गणेशाय नमः ॥
                </span>
              </motion.div>

              {/* Gold Divider Line */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="w-28 sm:w-44 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-0.5"
              />

              {/* Main Responsive Text Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.9, ease: 'easeOut' }}
                className="space-y-1.5 sm:space-y-3"
              >
                <h2 className="font-serif-cormorant text-[clamp(1rem,4vw,2.2rem)] text-[#FCEAA6] tracking-[0.3em] uppercase font-light drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
                  You Are Invited To
                </h2>
                <h1 className="font-wedding text-[clamp(3.5rem,12vw,7.5rem)] gold-text-gradient py-1 font-normal leading-none tracking-wide drop-shadow-[0_8px_25px_rgba(0,0,0,0.95)]">
                  Celebrate Love
                </h1>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. PHYSICAL GRAND ROYAL PALACE DOORS (Exact matching door image that splits open in 3D) */}
      <div
        className={`absolute inset-0 z-20 pointer-events-none flex transition-opacity duration-1000 ${
          sequenceState === 'FLYING' || sequenceState === 'WELCOME_MOMENT' || sequenceState === 'COMPLETED'
            ? 'opacity-0'
            : 'opacity-100'
        }`}
        style={{ perspective: '1400px', transformStyle: 'preserve-3d' }}
      >
        {/* Left Palace Door Panel */}
        <motion.div
          className="w-1/2 h-full bg-[#120205] border-r-2 border-[#D4AF37]/80 shadow-2xl relative overflow-hidden gpu-layer"
          animate={
            sequenceState === 'DOORS_OPENING' ||
            sequenceState === 'FLYING' ||
            sequenceState === 'WELCOME_MOMENT' ||
            sequenceState === 'COMPLETED'
              ? { rotateY: -105, x: '-15%' }
              : { rotateY: 0, x: '0%' }
          }
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: 'left center', backfaceVisibility: 'hidden', willChange: 'transform' }}
        >
          <img
            src="/images/royal_doors_hero.jpg"
            alt="Palace Door Left"
            className="w-[200%] max-w-none h-full object-cover object-left filter brightness-95 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-[#D4AF37]/20 pointer-events-none" />
        </motion.div>

        {/* Right Palace Door Panel */}
        <motion.div
          className="w-1/2 h-full bg-[#120205] border-l-2 border-[#D4AF37]/80 shadow-2xl relative overflow-hidden gpu-layer"
          animate={
            sequenceState === 'DOORS_OPENING' ||
            sequenceState === 'FLYING' ||
            sequenceState === 'WELCOME_MOMENT' ||
            sequenceState === 'COMPLETED'
              ? { rotateY: 105, x: '15%' }
              : { rotateY: 0, x: '0%' }
          }
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: 'right center', backfaceVisibility: 'hidden', willChange: 'transform' }}
        >
          <img
            src="/images/royal_doors_hero.jpg"
            alt="Palace Door Right"
            className="w-[200%] max-w-none h-full object-cover object-right filter brightness-95 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-[#D4AF37]/20 pointer-events-none" />
        </motion.div>
      </div>

      {/* 4. INITIAL RESPONSIVE INVITATION CARD OVERLAY */}
      <AnimatePresence>
        {(sequenceState === 'IDLE' || sequenceState === 'CARD_OPENING') && (
          <motion.div
            className="absolute inset-0 z-30 flex flex-col items-center justify-center px-4 py-6 text-center pointer-events-auto bg-black/35 backdrop-blur-[1px] pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))]"
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.4, ease: 'easeIn' } }}
          >
            <div className="w-[min(88vw,420px)] mx-auto flex flex-col items-center space-y-3.5 sm:space-y-5">
              {/* Top Shloka Header Badge */}
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/60 bg-[#2A080E]/90 shadow-lg text-[#FCEAA6]"
              >
                <span className="text-[#D4AF37] text-xs">❖</span>
                <span className="font-serif-cormorant text-[clamp(0.7rem,2.8vw,0.85rem)] tracking-widest font-semibold">
                  ॥ श्री गणेशाय नमः ॥
                </span>
                <span className="text-[#D4AF37] text-xs">❖</span>
              </motion.div>

              {/* Central Royal Invitation Card (Clickable on Mobile & Desktop) */}
              <motion.div
                onClick={handleStartSequence}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="w-full p-4 sm:p-7 rounded-3xl palace-card border border-[#D4AF37]/60 bg-gradient-to-b from-[#3A0A10]/95 via-[#230408]/95 to-[#150205]/95 shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative flex flex-col items-center text-center space-y-2 sm:space-y-3 cursor-pointer group"
              >
                {/* Sacred Gajanana Medallion */}
                <div className="relative p-1 rounded-full border border-[#D4AF37]/70 shadow-[0_0_20px_rgba(212,175,55,0.4)] bg-[#120205]">
                  <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full overflow-hidden relative">
                    <img
                      src="/images/gajanana.jpg"
                      alt="Lord Ganesha"
                      className="w-full h-full object-cover filter brightness-110 contrast-110"
                    />
                  </div>
                </div>

                <p className="font-serif-cormorant text-[clamp(0.65rem,2.5vw,0.8rem)] uppercase tracking-[0.25em] text-[#FCEAA6]/80 font-medium">
                  TOGETHER WITH THEIR FAMILIES
                </p>

                <h1 className="font-wedding text-[clamp(2.1rem,7.5vw,4.2rem)] font-normal leading-tight tracking-wide gold-text-gradient py-0.5">
                  Udit & Subhadarshini
                </h1>

                <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />

                <h2 className="font-serif-cormorant text-[clamp(1.15rem,4vw,1.8rem)] italic text-[#FCEAA6] tracking-wider font-light">
                  Wedding Invitation
                </h2>

                <div className="pt-0.5">
                  <span className="inline-block px-4 py-1 sm:px-5 sm:py-1.5 rounded-full border border-[#D4AF37]/50 bg-[#120205]/80 text-[#FCEAA6] font-serif-cormorant text-[clamp(0.7rem,2.5vw,0.85rem)] tracking-widest shadow-inner">
                    Cuttack, Odisha
                  </span>
                </div>
              </motion.div>

              {/* Touch-Friendly OPEN INVITATION Button */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="pt-0.5"
              >
                <button
                  onClick={handleStartSequence}
                  disabled={sequenceState !== 'IDLE'}
                  className="group relative inline-flex items-center justify-center gap-2.5 w-[min(220px,70vw)] h-[48px] sm:h-[54px] rounded-full bg-gradient-to-r from-[#5C0612] via-[#3A0A10] to-[#5C0612] border border-[#D4AF37]/80 text-[#FCEAA6] font-sans-inter text-xs sm:text-sm uppercase tracking-[0.2em] font-bold shadow-[0_0_25px_rgba(212,175,55,0.4)] active:scale-95 hover:scale-[1.02] transition-all duration-200 cursor-pointer"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    OPEN INVITATION
                    <Play className="w-3.5 h-3.5 text-[#FCEAA6] fill-[#FCEAA6]" />
                  </span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. ROYAL GOLDEN SCROLL INDICATOR (Renders strictly AFTER opening invitation) */}
      {isVideoVisible && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-[max(1.5rem,env(safe-area-inset-bottom))] inset-x-0 w-full flex flex-col items-center justify-center z-40 pointer-events-auto text-center"
        >
          <a
            href="#shloka"
            className="inline-flex flex-col items-center gap-1.5 px-5 py-2 rounded-full border border-[#D4AF37]/60 bg-[#120205]/85 backdrop-blur-md shadow-[0_0_25px_rgba(212,175,55,0.4)] group hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span className="font-serif-cormorant text-xs tracking-[0.25em] uppercase font-bold text-[#FCEAA6] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Scroll Down to Explore
            </span>
            <ArrowDown className="w-4 h-4 text-[#D4AF37] drop-shadow-[0_0_10px_rgba(212,175,55,0.9)] animate-bounce" />
          </a>
        </motion.div>
      )}
    </div>
  );
};



