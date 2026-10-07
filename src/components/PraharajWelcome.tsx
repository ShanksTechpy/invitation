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
          <div className="inline-block px-4 py-1 rounded-full border border-[#D4AF37]/30 bg-[#34080E]/60 text-[#FCEAA6] text-xs font-sans-inter uppercase tracking-[0.25em]">
            Royal Welcoming
          </div>

          <h2 className="font-wedding text-5xl sm:text-6xl md:text-7xl font-normal gold-text-gradient py-2">
            Praharaj Family
          </h2>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          className="font-serif-cormorant text-2xl sm:text-3xl md:text-4xl text-[#FDFBF7] font-light leading-relaxed max-w-3xl mx-auto italic"
        >
          “Together with our family, we warmly welcome you to celebrate the sacred union and wedding of Udit Narayan Praharaj & Subhadarshini Panda.”
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pt-4 flex flex-col items-center gap-6"
        >
          <a
            href="#date-reveal"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-[#D4AF37]/60 bg-[#34080E]/80 text-[#FCEAA6] font-sans-inter text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#D4AF37] hover:text-[#1F0408] transition-all duration-300 shadow-lg"
          >
            <Calendar className="w-4 h-4 text-[#D4AF37]" /> View Marriage Date Reveal Card
          </a>

          <div className="flex items-center justify-center gap-3 text-[#D4AF37]/80">
            <span className="h-[1px] w-12 bg-[#D4AF37]/40" />
            <Heart className="w-5 h-5 text-[#E6C657] fill-[#D4AF37] animate-pulse drop-shadow-[0_0_12px_rgba(212,175,55,0.8)]" />
            <span className="h-[1px] w-12 bg-[#D4AF37]/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
