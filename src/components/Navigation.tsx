import React, { useState, useEffect } from 'react';
import { Compass, Calendar, Heart, MapPin, Home } from 'lucide-react';

interface NavigationProps {
  isVisible: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ isVisible }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${scrolled
          ? 'bg-[#190407]/90 backdrop-blur-md border-b border-[#D4AF37]/20 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#190407]/80 to-transparent py-5'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="font-wedding text-2xl md:text-3xl text-[#FCEAA6] group-hover:text-[#D4AF37] transition-colors">
            Udit & Subhadarshini
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-sans-inter tracking-wider text-[#E8DFD1]">
          <a href="#welcome" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
            <Home className="w-4 h-4 text-[#D4AF37]" /> Home
          </a>
          <a href="#couple" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-[#D4AF37]" /> Couple
          </a>
          <a href="#schedule" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#D4AF37]" /> Events
          </a>
          <a href="#blessings" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-[#D4AF37]" /> Blessings
          </a>
          <a href="#location" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#D4AF37]" /> Location
          </a>
        </div>

        <a
          href="#blessings"
          className="px-4 py-2 text-xs font-sans-inter uppercase tracking-widest text-[#1F0408] bg-gradient-to-r from-[#F3DB83] via-[#D4AF37] to-[#AA8822] rounded-full hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all font-semibold"
        >
          Send Blessings
        </a>
      </div>
    </nav>
  );
};
