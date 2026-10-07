import React from 'react';
import { Heart } from 'lucide-react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-[#0B0103] border-t border-[#D4AF37]/20 text-center relative">
      <div className="max-w-4xl mx-auto space-y-4 text-center">
        {/* Subtle Decorative Arch/Motif */}
        <div className="flex items-center justify-center gap-3 text-[#D4AF37]/60">
          <span className="h-[1px] w-16 bg-[#D4AF37]/30" />
          <Heart className="w-4 h-4 text-[#E6C657] fill-[#D4AF37] animate-pulse drop-shadow-[0_0_10px_rgba(212,175,55,0.7)]" />
          <span className="h-[1px] w-16 bg-[#D4AF37]/30" />
        </div>

        <h3 className="font-wedding text-4xl sm:text-5xl text-[#FCEAA6]">
          Udit & Subhadarshini
        </h3>

        <p className="font-serif-cormorant text-lg text-[#E8DFD1]/70 italic tracking-widest font-light">
          Forever begins here.
        </p>

        <div className="pt-4 text-xs font-sans-inter text-[#E8DFD1]/40 tracking-wider">
          © 2027 Praharaj Family Wedding Celebration • Tarito, Salipur, Cuttack, Odisha
        </div>
      </div>
    </footer>
  );
};
