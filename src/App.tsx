import React, { useState, useEffect } from 'react';
import { HeroOpening, OpeningState } from './components/HeroOpening';
import { PraharajWelcome } from './components/PraharajWelcome';
import { MarriageDateReveal } from './components/MarriageDateReveal';
import { CoupleReveal } from './components/CoupleReveal';
import { SanskritShlokaOne } from './components/SanskritShlokaOne';
import { CountdownSection } from './components/CountdownSection';
import { DateCardsSection } from './components/DateCardsSection';
import { BlessingsSection } from './components/BlessingsSection';
import { LocationSection } from './components/LocationSection';
import { ThankYouSection } from './components/ThankYouSection';
import { FooterSection } from './components/FooterSection';

export const App: React.FC = () => {
  const [sequenceState, setSequenceState] = useState<OpeningState>('IDLE');

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
    <div className="min-h-screen bg-[#1F0408] text-[#FAF5EC] selection:bg-[#D4AF37]/30 selection:text-[#FFFDF9]">
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

        {/* Step G: Marriage & Reception Event Date Tiles */}
        <DateCardsSection />

        {/* Step H: Send Your Blessings */}
        <BlessingsSection />

        {/* Step J: Location & Map */}
        <LocationSection />

        {/* Step K: Thank You */}
        <ThankYouSection />

        {/* Footer */}
        <FooterSection />
      </main>
    </div>
  );
};

export default App;
