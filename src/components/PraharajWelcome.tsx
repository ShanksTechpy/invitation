import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Heart } from 'lucide-react';

export const PraharajWelcome: React.FC = () => {
  return (
    <section id="welcome" className="relative py-24 px-6 bg-gradient-to-b from-[#120205] via-[#1F0408] to-[#26070B] overflow-hidden text-center">
      {/* Background Decorative Arch Motif */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full border border-[#D4AF37] blur-sm animate-subtle-pulse" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="space-y-4"
        >
          <h2 className="font-wedding text-4xl sm:text-6xl md:text-7xl font-normal gold-text-gradient py-2">
            Praharaj Family Welcomes You
          </h2>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          className="font-serif-cormorant text-xl sm:text-2xl md:text-3xl text-[#FDFBF7] font-light leading-relaxed max-w-3xl mx-auto space-y-4 text-center"
        >
          <p className="italic text-[#E8DFD1]/90">
            With hearts filled with joy and blessings, the Praharaj Family warmly welcomes you to celebrate the wedding of
          </p>

          <div className="flex flex-col items-center justify-center gap-3 pt-3">
            <span className="font-wedding text-3xl sm:text-5xl md:text-6xl text-[#FCEAA6] tracking-wide block font-normal">
              Udit Narayan Praharaj
            </span>

            <div className="py-2 flex items-center justify-center">
              <div className="relative p-2.5 rounded-full border border-[#D4AF37]/60 bg-gradient-to-b from-[#4A0E17] via-[#26070B] to-[#120205] shadow-[0_0_30px_rgba(212,175,55,0.6),0_0_20px_rgba(255,59,92,0.7)] preserve-3d hover:scale-110 transition-transform">
                <Heart className="w-7 h-7 sm:w-9 sm:h-9 text-[#FF3B5C] fill-[#FF3B5C] animate-pulse filter drop-shadow-[0_0_15px_rgba(255,59,92,0.95)]" />
              </div>
            </div>

            <span className="font-wedding text-3xl sm:text-5xl md:text-6xl text-[#FCEAA6] tracking-wide block font-normal">
              Subhadarshini Panda.
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pt-4 flex flex-col items-center gap-6"
        >
          <div className="flex items-center justify-center gap-3 text-[#D4AF37]/80">
            <span className="h-[1px] w-16 bg-[#D4AF37]/40" />
            <span className="text-[#E6C657] font-bold text-lg leading-none drop-shadow-[0_0_12px_rgba(212,175,55,0.8)] select-none">ॐ</span>
            <span className="h-[1px] w-16 bg-[#D4AF37]/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
