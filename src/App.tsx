import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { HeroOpening, OpeningState } from './components/HeroOpening';
import { PraharajWelcome } from './components/PraharajWelcome';
import { MarriageDateReveal } from './components/MarriageDateReveal';
import { CoupleReveal } from './components/CoupleReveal';
import { SanskritShlokaOne } from './components/SanskritShlokaOne';
import { CountdownSection } from './components/CountdownSection';
import { DateCardsSection } from './components/DateCardsSection';
import { LocationSection } from './components/LocationSection';
import { BlessingsSection } from './components/BlessingsSection';
import { ThankYouSection } from './components/ThankYouSection';
import { FooterSection } from './components/FooterSection';

export const App: React.FC = () => {
  const [sequenceState, setSequenceState] = useState<OpeningState>('IDLE');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Ensure scroll is enabled as soon as sequence completes or reaches welcome moment
  useEffect(() => {
    if (sequenceState === 'COMPLETED' || sequenceState === 'WELCOME_MOMENT') {
      document.body.classList.remove('scroll-locked');
      document.body.style.overflowY = 'auto';
      document.body.style.touchAction = 'pan-y';
    } else {
      document.body.classList.add('scroll-locked');
      document.body.style.overflowY = 'hidden';
      document.body.style.touchAction = 'none';
    }
  }, [sequenceState]);

  const handleSequenceComplete = () => {
    setSequenceState('COMPLETED');
  };

  return (
    <div className="min-h-screen bg-[#1F0408] text-[#FAF5EC] selection:bg-[#D4AF37]/30 selection:text-[#FFFDF9] relative">
      {/* Golden Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F3DB83] via-[#D4AF37] to-[#AA8822] origin-left z-50 shadow-[0_0_15px_rgba(212,175,55,0.9)] pointer-events-none"
      />

      {/* 1. CONTINUOUS CINEMATIC OPENING (Card -> Doors -> 4K Walkthrough -> Welcome Moment) */}
      <section id="hero">
        <HeroOpening
          sequenceState={sequenceState}
          setSequenceState={setSequenceState}
          onSequenceComplete={handleSequenceComplete}
        />
      </section>

      {/* 2. WEDDING INVITATION STORY CONTENT */}
      <main className="relative z-20">
        {/* 2nd Page: Sanskrit Shloka */}
        <section id="shloka">
          <SanskritShlokaOne />
        </section>

        {/* 3rd Page: Praharaj Family Welcome */}
        <PraharajWelcome />

        {/* 4th Page: Scratch Card (Marriage Date Reveal) */}
        <MarriageDateReveal />

        {/* 5th Page: The Beloved Couple (Groom Udit Narayan Praharaj & Bride Subhadarshini Panda) */}
        <CoupleReveal />

        {/* 6th Page: Live Countdown */}
        <CountdownSection />

        {/* 7th Page: Marriage & Reception Event Date Tiles */}
        <DateCardsSection />

        {/* 8th Page: Wedding Location & Venue */}
        <LocationSection />

        {/* 9th Page: Send Your Blessings */}
        <BlessingsSection />

        {/* 10th Page: Thank You */}
        <ThankYouSection />

        {/* Footer */}
        <FooterSection />
      </main>
    </div>
  );
};

export default App;
