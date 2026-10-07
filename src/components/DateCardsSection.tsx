import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Heart, Phone, Sparkles } from 'lucide-react';

export const DateCardsSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#120205] relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-14 relative z-10">
        <div className="text-center space-y-3">
          <p className="font-serif-cormorant text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
            Ceremonial Schedule
          </p>
          <h2 className="font-wedding text-5xl sm:text-6xl md:text-7xl font-normal gold-text-gradient py-1">
            Wedding & Reception Events
          </h2>
          <div className="w-28 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </div>

        {/* Two Main Date Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 preserve-3d">
          {/* Tile 1: Marriage Ceremony */}
          <motion.div
            initial={{ opacity: 0, y: 45, rotateX: 6 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            whileHover={{ y: -10, rotateX: -4, rotateY: 4, scale: 1.025 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="p-8 sm:p-10 rounded-3xl palace-card border border-[#D4AF37]/40 relative overflow-hidden flex flex-col justify-between space-y-8 group hover:border-[#D4AF37] transition-all duration-500 shadow-[0_20px_45px_rgba(0,0,0,0.7)] preserve-3d cursor-pointer"
          >
            <div className="space-y-6 translate-z-20">
              <h3 className="font-wedding text-4xl sm:text-5xl text-[#FCEAA6]">
                Marriage Ceremony
              </h3>

              <div className="space-y-4 font-serif-cormorant text-lg text-[#FDFBF7]">
                <div className="flex items-start gap-4 p-3 rounded-xl badge-3d">
                  <Calendar className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-xl text-[#FCEAA6]">Wednesday, 10th February 2027</p>
                    <p className="text-sm text-[#E8DFD1]/70">Shubh Vivah Lagna</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-xl badge-3d">
                  <Clock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-lg text-[#FDFBF7]">12:00 PM Onwards</p>
                    <p className="text-sm text-[#E8DFD1]/70">Lunch & Sacred Rituals</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-xl badge-3d">
                  <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-lg text-[#FDFBF7]">Kalyani Mandap</p>
                    <p className="text-sm text-[#E8DFD1]/70">Tilda, Salipur, Katak – 754201</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tile 2: Reception */}
          <motion.div
            initial={{ opacity: 0, y: 45, rotateX: 6 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            whileHover={{ y: -10, rotateX: -4, rotateY: -4, scale: 1.025 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="p-8 sm:p-10 rounded-3xl palace-card border border-[#D4AF37]/40 relative overflow-hidden flex flex-col justify-between space-y-8 group hover:border-[#D4AF37] transition-all duration-500 shadow-[0_20px_45px_rgba(0,0,0,0.7)] preserve-3d cursor-pointer"
          >
            <div className="space-y-6 translate-z-20">
              <h3 className="font-wedding text-4xl sm:text-5xl text-[#FCEAA6]">
                Wedding Reception
              </h3>

              <div className="space-y-4 font-serif-cormorant text-lg text-[#FDFBF7]">
                <div className="flex items-start gap-4 p-3 rounded-xl badge-3d">
                  <Calendar className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-xl text-[#FCEAA6]">Sunday, 14th February 2027</p>
                    <p className="text-sm text-[#E8DFD1]/70">Priti Bhoj & Blessings</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-xl badge-3d">
                  <Clock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-lg text-[#FDFBF7]">7:30 PM Onwards</p>
                    <p className="text-sm text-[#E8DFD1]/70">Royal Banquet & Festivities</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-xl badge-3d">
                  <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-lg text-[#FDFBF7]">Praharaj Grand Venue</p>
                    <p className="text-sm text-[#E8DFD1]/70">Tarito, Kishorenagar, Katak – 754131</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-xl badge-3d border border-[#D4AF37]/30 bg-[#34080E]/60">
                  <Phone className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-lg text-[#FCEAA6]">Contact Information</p>
                    <p className="text-sm text-[#E8DFD1]/90 font-sans-inter">Ankit: +91 79 7866 3088</p>
                    <p className="text-sm text-[#E8DFD1]/90 font-sans-inter">Udit: +91 79 7852 0715</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
