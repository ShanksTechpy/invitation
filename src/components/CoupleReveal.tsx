import React from 'react';
import { motion } from 'framer-motion';

export const CoupleReveal: React.FC = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center preserve-3d">
          {/* Udit - Groom */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -8, rotateX: 4, rotateY: 5, scale: 1.02 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center text-center space-y-6 group preserve-3d cursor-pointer"
          >
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-t-full p-2.5 bg-gradient-to-b from-[#D4AF37] via-[#4A0E17] to-[#D4AF37]/50 shadow-[0_20px_45px_rgba(0,0,0,0.85),0_0_30px_rgba(212,175,55,0.2)] group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.95),0_0_45px_rgba(212,175,55,0.4)] transition-all duration-700 preserve-3d">
              <div className="w-full h-full rounded-t-full overflow-hidden relative border-2 border-[#D4AF37]/50 bg-[#1F0408] translate-z-10">
                <img
                  src="/images/udit.jpg"
                  alt="Udit - Groom"
                  className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F0408]/80 via-transparent to-transparent opacity-40" />
              </div>
            </div>

            <div className="space-y-2 translate-z-20">
              <span className="font-sans-inter text-xs uppercase tracking-[0.25em] text-[#D4AF37] px-4 py-1.5 rounded-full badge-3d inline-block font-semibold">
                Groom
              </span>
              <h3 className="font-wedding text-4xl sm:text-5xl text-[#FCEAA6]">
                Udit
              </h3>
              <p className="font-serif-cormorant text-lg text-[#E8DFD1]/80 italic">
                Son of Praharaj Family
              </p>
            </div>
          </motion.div>

          {/* Sima - Bride */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -8, rotateX: 4, rotateY: -5, scale: 1.02 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center text-center space-y-6 group preserve-3d cursor-pointer"
          >
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-t-full p-2.5 bg-gradient-to-b from-[#D4AF37] via-[#4A0E17] to-[#D4AF37]/50 shadow-[0_20px_45px_rgba(0,0,0,0.85),0_0_30px_rgba(212,175,55,0.2)] group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.95),0_0_45px_rgba(212,175,55,0.4)] transition-all duration-700 preserve-3d">
              <div className="w-full h-full rounded-t-full overflow-hidden relative border-2 border-[#D4AF37]/50 bg-[#1F0408] translate-z-10">
                <img
                  src="/images/sima.jpg"
                  alt="Sima - Bride"
                  className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F0408]/80 via-transparent to-transparent opacity-40" />
              </div>
            </div>

            <div className="space-y-2 translate-z-20">
              <span className="font-sans-inter text-xs uppercase tracking-[0.25em] text-[#D4AF37] px-4 py-1.5 rounded-full badge-3d inline-block font-semibold">
                Bride
              </span>
              <h3 className="font-wedding text-4xl sm:text-5xl text-[#FCEAA6]">
                Sima
              </h3>
              <p className="font-serif-cormorant text-lg text-[#E8DFD1]/80 italic">
                Daughter of Royal Heritage
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
