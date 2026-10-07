import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const CoupleReveal: React.FC = () => {
  const [groomHovered, setGroomHovered] = useState(false);
  const [brideHovered, setBrideHovered] = useState(false);

  return (
    <section id="couple" className="relative py-24 px-6 bg-[#26070B] overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-[#D4AF37]_1px,transparent_1px] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        <div className="text-center space-y-3">
          <p className="font-serif-cormorant text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
            Two Souls, One Sacred Journey
          </p>
          <h2 className="font-wedding text-5xl sm:text-6xl md:text-7xl font-normal gold-text-gradient py-1">
            The Beloved Couple
          </h2>
          <div className="w-28 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </div>

        {/* Groom & Bride Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Udit - Groom */}
          <div className="flex flex-col items-center text-center space-y-6 [perspective:1200px]">
            <motion.div
              onClick={() => setGroomHovered(!groomHovered)}
              onMouseEnter={() => setGroomHovered(true)}
              onMouseLeave={() => setGroomHovered(false)}
              animate={{
                rotateY: groomHovered ? 180 : 0,
                scale: groomHovered ? 1.04 : 1,
              }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-t-full p-2.5 bg-gradient-to-b from-[#D4AF37] via-[#4A0E17] to-[#D4AF37]/50 shadow-[0_20px_45px_rgba(0,0,0,0.85),0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.95),0_0_45px_rgba(212,175,55,0.4)] transition-shadow duration-500 cursor-pointer [transform-style:preserve-3d]"
            >
              {/* Front Side - Groom Photo */}
              <div className="w-full h-full rounded-t-full overflow-hidden relative border-2 border-[#D4AF37]/50 bg-[#1F0408] [backface-visibility:hidden]">
                <img
                  src="/images/udit.jpg"
                  alt="Udit Narayan Praharaj - Groom"
                  className="w-full h-full object-cover object-top filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F0408]/40 via-transparent to-transparent opacity-40" />
              </div>

              {/* Back Side - Parents Name Reveal */}
              <div className="absolute inset-0 rounded-t-full p-2.5 bg-gradient-to-b from-[#4A0E17] via-[#1F0408] to-[#3A0A10] border-2 border-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.6)] flex flex-col items-center justify-center text-center p-6 space-y-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <Heart className="w-8 h-8 text-[#D4AF37] fill-[#D4AF37]/30 animate-pulse" />
                <div className="space-y-1">
                  <span className="font-sans-inter text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                    Son Of
                  </span>
                  <h4 className="font-serif-cormorant text-2xl sm:text-3xl text-[#FCEAA6] font-semibold leading-snug">
                    Mr. Prabin Ketan Praharaj
                  </h4>
                  <p className="font-serif-cormorant text-xl text-[#FDFBF7] italic">&</p>
                  <h4 className="font-serif-cormorant text-2xl sm:text-3xl text-[#FCEAA6] font-semibold leading-snug">
                    Mrs. Sashmita Praharaj
                  </h4>
                </div>
                <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                <span className="font-wedding text-2xl text-[#E8DFD1]/80">Praharaj Family</span>
              </div>
            </motion.div>

            <div className="space-y-2 max-w-sm">
              <span className="font-sans-inter text-xs uppercase tracking-[0.25em] text-[#D4AF37] px-4 py-1.5 rounded-full badge-3d inline-block font-semibold">
                Groom
              </span>
              <h3 className="font-wedding text-3xl sm:text-4xl md:text-5xl text-[#FCEAA6] leading-tight">
                Udit Narayan Praharaj
              </h3>
              <p className="font-serif-cormorant text-base sm:text-lg text-[#E8DFD1]/90 italic leading-relaxed">
                Son of Mr. Prabin Ketan Praharaj<br />& Mrs. Sashmita Praharaj
              </p>
            </div>
          </div>

          {/* Subhadarshini - Bride */}
          <div className="flex flex-col items-center text-center space-y-6 [perspective:1200px]">
            <motion.div
              onClick={() => setBrideHovered(!brideHovered)}
              onMouseEnter={() => setBrideHovered(true)}
              onMouseLeave={() => setBrideHovered(false)}
              animate={{
                rotateY: brideHovered ? 180 : 0,
                scale: brideHovered ? 1.04 : 1,
              }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-t-full p-2.5 bg-gradient-to-b from-[#D4AF37] via-[#4A0E17] to-[#D4AF37]/50 shadow-[0_20px_45px_rgba(0,0,0,0.85),0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.95),0_0_45px_rgba(212,175,55,0.4)] transition-shadow duration-500 cursor-pointer [transform-style:preserve-3d]"
            >
              {/* Front Side - Bride Photo */}
              <div className="w-full h-full rounded-t-full overflow-hidden relative border-2 border-[#D4AF37]/50 bg-[#1F0408] [backface-visibility:hidden]">
                <img
                  src="/images/subhadarshini.jpg"
                  alt="Subhadarshini Panda - Bride"
                  className="w-full h-full object-cover object-top filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F0408]/40 via-transparent to-transparent opacity-40" />
              </div>

              {/* Back Side - Parents Name Reveal */}
              <div className="absolute inset-0 rounded-t-full p-2.5 bg-gradient-to-b from-[#4A0E17] via-[#1F0408] to-[#3A0A10] border-2 border-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.6)] flex flex-col items-center justify-center text-center p-6 space-y-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <Heart className="w-8 h-8 text-[#D4AF37] fill-[#D4AF37]/30 animate-pulse" />
                <div className="space-y-1">
                  <span className="font-sans-inter text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                    Daughter Of
                  </span>
                  <h4 className="font-serif-cormorant text-2xl sm:text-3xl text-[#FCEAA6] font-semibold leading-snug">
                    Mr. Ajit Kumar Panda
                  </h4>
                  <p className="font-serif-cormorant text-xl text-[#FDFBF7] italic">&</p>
                  <h4 className="font-serif-cormorant text-2xl sm:text-3xl text-[#FCEAA6] font-semibold leading-snug">
                    Mrs. Bhanumati Panda
                  </h4>
                </div>
                <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                <span className="font-wedding text-2xl text-[#E8DFD1]/80">Panda Family</span>
              </div>
            </motion.div>

            <div className="space-y-2 max-w-sm">
              <span className="font-sans-inter text-xs uppercase tracking-[0.25em] text-[#D4AF37] px-4 py-1.5 rounded-full badge-3d inline-block font-semibold">
                Bride
              </span>
              <h3 className="font-wedding text-3xl sm:text-4xl md:text-5xl text-[#FCEAA6] leading-tight">
                Subhadarshini Panda
              </h3>
              <p className="font-serif-cormorant text-base sm:text-lg text-[#E8DFD1]/90 italic leading-relaxed">
                Daughter of Mr. Ajit Kumar Panda<br />& Mrs. Bhanumati Panda
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
