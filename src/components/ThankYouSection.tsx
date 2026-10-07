import React from 'react';
import { motion } from 'framer-motion';

export const ThankYouSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#120205] via-[#1F0408] to-[#120205] text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="space-y-3"
        >
          <span className="font-sans-inter text-xs uppercase tracking-[0.3em] text-[#D4AF37] px-4 py-1 rounded-full border border-[#D4AF37]/30 bg-[#2A080E]/60 inline-block font-semibold">
            Heartfelt Gratitude
          </span>

          <h2 className="font-serif-cormorant text-4xl sm:text-5xl md:text-6xl text-[#FDFBF7] font-medium tracking-wide">
            With Love & Gratitude
          </h2>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="p-8 sm:p-12 rounded-3xl palace-card border border-[#D4AF37]/30 max-w-2xl mx-auto space-y-6 shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
        >
          <p className="font-serif-cormorant text-2xl sm:text-3xl text-[#E8DFD1] font-light leading-relaxed italic">
            “Thank you for being a part of our special journey. Your presence and blessings mean the world to us as we begin our new life together.”
          </p>

          <div className="pt-4 space-y-2">
            <p className="font-serif-cormorant text-sm uppercase tracking-[0.25em] text-[#D4AF37]">
              With love & warm regards,
            </p>
            <p className="font-wedding text-4xl sm:text-5xl md:text-6xl gold-text-gradient font-normal">
              Udit & Subhadarshini
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
