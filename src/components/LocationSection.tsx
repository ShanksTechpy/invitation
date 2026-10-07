import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation as NavIcon, Compass } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const address = "C3VC+C4J, Tarito, Odisha 754131";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "C3VC+C4J, Tarito, Odisha 754131"
  )}`;
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    "C3VC+C4J, Tarito, Odisha 754131"
  )}&output=embed`;

  return (
    <section id="location" className="py-24 px-6 bg-[#120205] relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-14 relative z-10">
        <div className="text-center space-y-3">
          <p className="font-serif-cormorant text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
            Venue & Destination
          </p>
          <h2 className="font-wedding text-5xl sm:text-6xl md:text-7xl font-normal gold-text-gradient py-1">
            Wedding Location
          </h2>
          <div className="w-28 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </div>

        {/* Desktop: Grid / Mobile: Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Location Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 p-8 sm:p-10 rounded-3xl palace-card border border-[#D4AF37]/40 flex flex-col justify-between space-y-8 shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
          >
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-[#34080E] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <MapPin className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <span className="font-sans-inter text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                  Royal Residence & Venue
                </span>
                <h3 className="font-wedding text-4xl text-[#FCEAA6]">
                  Praharaj Palace
                </h3>
              </div>

              <div className="space-y-4 font-serif-cormorant text-lg text-[#FDFBF7]">
                <p className="leading-relaxed font-light text-[#E8DFD1]">
                  We look forward to welcoming you to celebrate our Marriage Ceremony and Grand Reception.
                </p>

                <div className="p-4 rounded-2xl bg-[#1F0408]/80 border border-[#D4AF37]/20 flex items-start gap-3">
                  <Compass className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#D4AF37] font-sans-inter font-bold">Marriage Venue</p>
                    <p className="font-semibold text-[#FCEAA6]">Kalyani Mandap</p>
                    <p className="text-xs text-[#E8DFD1]/70 font-sans-inter mt-0.5">Tilda, Salipur, Katak – 754201</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#1F0408]/80 border border-[#D4AF37]/20 flex items-start gap-3">
                  <Compass className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#D4AF37] font-sans-inter font-bold">Reception Venue</p>
                    <p className="font-semibold text-[#FCEAA6]">Praharaj Grand Venue</p>
                    <p className="text-xs text-[#E8DFD1]/70 font-sans-inter mt-0.5">Tarito, Kishorenagar, Katak – 754131</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 py-4 px-8 rounded-full bg-gradient-to-r from-[#F3DB83] via-[#D4AF37] to-[#AA8822] text-[#1F0408] font-sans-inter text-xs uppercase tracking-[0.25em] font-bold shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] hover:scale-[1.02] transition-all cursor-pointer"
              >
                <NavIcon className="w-4 h-4 fill-[#1F0408]" /> Get Directions on Google Maps
              </a>
            </div>
          </motion.div>

          {/* Embedded Responsive Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-[0_15px_35px_rgba(0,0,0,0.6)] relative min-h-[350px] lg:min-h-[450px]"
          >
            <iframe
              title="Wedding Location Map"
              src={embedUrl}
              className="w-full h-full min-h-[350px] lg:min-h-[450px] border-0 filter contrast-105 saturate-90"
              loading="lazy"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
