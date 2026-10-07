import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const SanskritShlokaOne: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-[#190407] via-[#2D0A12] to-[#190407] border-y border-[#D4AF37]/20 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <Heart className="w-6 h-6 text-[#E6C657] fill-[#D4AF37] animate-pulse drop-shadow-[0_0_12px_rgba(212,175,55,0.8)]" />
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="font-serif-cormorant text-2xl sm:text-3xl md:text-4xl leading-relaxed text-[#FCEAA6] tracking-wide font-medium max-w-3xl mx-auto"
        >
          ॥ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभः ।<br />
          निर्विघ्नं कुरु मे देव शुभकार्येषु सर्वदा ॥
        </motion.h3>
      </div>
    </section>
  );
};
