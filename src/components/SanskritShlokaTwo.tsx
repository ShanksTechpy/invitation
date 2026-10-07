import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const SanskritShlokaTwo: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-[#190407] via-[#2A080E] to-[#190407] border-y border-[#D4AF37]/20 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <Heart className="w-7 h-7 text-[#E6C657] fill-[#D4AF37] animate-pulse drop-shadow-[0_0_15px_rgba(212,175,55,0.9)]" />
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="font-serif-cormorant text-2xl sm:text-3xl md:text-4xl leading-relaxed text-[#FCEAA6] tracking-wide font-medium max-w-3xl mx-auto"
        >
          ॥ यदेतद्धृदयं तव तदस्तु हृदयं मम ।<br />
          यदमुं हृदयं मम तदस्तु हृदयं तव ॥
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="font-serif-cormorant italic text-base sm:text-lg text-[#E8DFD1]/70 max-w-xl mx-auto font-light"
        >
          “May your heart be my heart, and may my heart be your heart. May two souls unite into one harmonious lifetime of love, trust, and companionship.”
        </motion.p>
      </div>
    </section>
  );
};
