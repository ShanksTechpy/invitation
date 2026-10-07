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

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          className="font-serif-cormorant text-2xl sm:text-3xl md:text-4xl text-[#FDFBF7] font-light leading-relaxed max-w-4xl mx-auto italic flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5"
        >
          <span>“With hearts filled with joy and blessings, the Praharaj Family warmly welcomes you to celebrate the wedding of</span>
          <span className="font-medium text-[#FCEAA6] not-italic">Udit Narayan Praharaj</span>
          <span className="inline-flex items-center mx-1">
            <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-[#FF3B5C] fill-[#FF3B5C] animate-pulse drop-shadow-[0_0_15px_rgba(255,59,92,0.9)]" />
          </span>
          <span className="font-medium text-[#FCEAA6] not-italic">Subhadarshini Panda.”</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pt-4 flex flex-col items-center gap-6"
        >
          <div className="flex items-center justify-center gap-3 text-[#D4AF37]/80">
            <span className="h-[1px] w-16 bg-[#D4AF37]/40" />
            <Heart className="w-5 h-5 text-[#E6C657] fill-[#D4AF37] animate-pulse drop-shadow-[0_0_12px_rgba(212,175,55,0.8)]" />
            <span className="h-[1px] w-16 bg-[#D4AF37]/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
