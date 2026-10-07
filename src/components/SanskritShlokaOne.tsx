import React from 'react';
import { motion } from 'framer-motion';

export const SanskritShlokaOne: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-[#190407] via-[#2D0A12] to-[#190407] border-y border-[#D4AF37]/20 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-2xl text-[#D4AF37]"
        >
          ☸
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

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="font-serif-cormorant italic text-base sm:text-lg text-[#E8DFD1]/70 max-w-xl mx-auto font-light"
        >
          “O Lord Ganesha, of grand form and radiant like a million suns, remove all obstacles and bless our auspicious occasion always.”
        </motion.p>
      </div>
    </section>
  );
};
