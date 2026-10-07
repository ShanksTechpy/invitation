import React from 'react';
import { motion } from 'framer-motion';

export const SanskritShlokaOne: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 px-4 bg-gradient-to-r from-[#170306] via-[#2A080E] to-[#170306] border-y border-[#D4AF37]/30 text-center relative overflow-hidden">
      {/* Background Soft Glow Radial Ambient */}
      <div className="absolute inset-0 opacity-25 pointer-events-none flex items-center justify-center">
        <div className="w-[500px] h-[300px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37] via-[#5C0612]/40 to-transparent blur-3xl animate-subtle-pulse" />
      </div>

      <div className="max-w-4xl mx-auto space-y-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <div className="px-5 py-1.5 rounded-full border border-[#D4AF37]/70 bg-gradient-to-r from-[#2A080E] via-[#120205] to-[#2A080E] shadow-[0_0_25px_rgba(212,175,55,0.6)] flex items-center gap-3">
            <span className="text-[#D4AF37] text-base sm:text-lg select-none drop-shadow-[0_0_8px_rgba(212,175,55,0.7)]">卐</span>
            <span className="text-[#FCEAA6] text-2xl sm:text-3xl font-extrabold leading-none drop-shadow-[0_0_15px_rgba(230,198,87,0.95)]">ॐ</span>
            <span className="text-[#D4AF37] text-base sm:text-lg select-none drop-shadow-[0_0_8px_rgba(212,175,55,0.7)]">卐</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
          className="p-5 sm:p-8 rounded-3xl palace-card border border-[#D4AF37]/50 max-w-3xl mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(212,175,55,0.2)]"
        >
          <div className="space-y-2 sm:space-y-3">
            <p className="font-serif-cormorant text-[clamp(0.95rem,3.8vw,2.2rem)] font-semibold text-[#FCEAA6] tracking-wide leading-snug drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)]">
              ॥ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभः ।
            </p>
            <p className="font-serif-cormorant text-[clamp(0.95rem,3.8vw,2.2rem)] font-semibold text-[#FCEAA6] tracking-wide leading-snug drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)]">
              निर्विघ्नं कुरु मे देव शुभकार्येषु सर्वदा ॥
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
