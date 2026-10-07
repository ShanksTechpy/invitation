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
                  alt="Udit Narayan Praharaj - Groom"
                  className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F0408]/80 via-transparent to-transparent opacity-40" />
              </div>
            </div>

            <div className="space-y-2 translate-z-20 max-w-sm">
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
          </motion.div>

          {/* Subhadarshini - Bride */}
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
                  src="/images/subhadarshini.jpg"
                  alt="Subhadarshini Panda - Bride"
                  className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F0408]/80 via-transparent to-transparent opacity-40" />
              </div>
            </div>

            <div className="space-y-2 translate-z-20 max-w-sm">
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
          </motion.div>
        </div>

        {/* Sacred Mangalya Sutra Mantra in Golden Glowing 3D Letters */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl palace-card border-2 border-[#D4AF37]/60 bg-gradient-to-b from-[#3A0A10]/95 via-[#230408]/95 to-[#150205]/95 shadow-[0_0_50px_rgba(212,175,55,0.4)] text-center relative overflow-hidden preserve-3d mt-12"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37] via-transparent to-transparent blur-2xl pointer-events-none" />

          <div className="relative z-10 space-y-3">
            <div className="flex justify-center pb-1">
              <div className="relative p-0.5 rounded-full border border-[#D4AF37]/80 shadow-[0_0_15px_rgba(212,175,55,0.6)] bg-[#120205] overflow-hidden">
                <div className="w-10 h-10 rounded-full overflow-hidden relative">
                  <img
                    src="/images/gajanana.jpg"
                    alt="Lord Ganesha Gajanana"
                    className="w-full h-full object-cover filter brightness-110 contrast-115 animate-pulse"
                  />
                </div>
              </div>
            </div>
            <motion.h3
              animate={{
                textShadow: [
                  '0 0 15px rgba(212,175,55,0.6), 0 0 30px rgba(212,175,55,0.4)',
                  '0 0 25px rgba(252,234,166,0.95), 0 0 50px rgba(212,175,55,0.7)',
                  '0 0 15px rgba(212,175,55,0.6), 0 0 30px rgba(212,175,55,0.4)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="font-serif-cormorant text-xl sm:text-2xl md:text-3xl font-semibold text-[#FCEAA6] leading-relaxed tracking-wider drop-shadow-[0_4px_15px_rgba(0,0,0,0.95)] translate-z-20"
            >
              ॥ ॐ मांगल्यं तन्तुनानेन मम जीवनहेतुना ।<br />
              कण्ठे बध्नामि शुभगे सा जीव शरदः शतम् ॥
            </motion.h3>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto pt-1" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
