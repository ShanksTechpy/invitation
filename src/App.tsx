import React, { useState, useEffect } from 'react';
import { HeroOpening, OpeningState } from './components/HeroOpening';
import { PraharajWelcome } from './components/PraharajWelcome';
import { MarriageDateReveal } from './components/MarriageDateReveal';
import { CoupleReveal } from './components/CoupleReveal';
import { SanskritShlokaOne } from './components/SanskritShlokaOne';
import { CountdownSection } from './components/CountdownSection';
import { DateCardsSection } from './components/DateCardsSection';
import { SanskritShlokaTwo } from './components/SanskritShlokaTwo';
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
        {/* Step A: Praharaj Family Welcome */}
        <PraharajWelcome />

        {/* Step B: Dedicated Marriage Date Reveal Card */}
        <MarriageDateReveal />

        {/* Step C: Groom Udit & Bride Sima Photos */}
        <CoupleReveal />

        {/* Step D: First Sanskrit Shloka */}
        <SanskritShlokaOne />

        {/* Step E: Live Countdown */}
        <CountdownSection />

        {/* Step F: Marriage & Reception Event Date Tiles */}
        <DateCardsSection />

        {/* Step G: Second Sanskrit Shloka */}
        <SanskritShlokaTwo />

        {/* Step H: Send Your Blessings */}
        <BlessingsSection />

        {/* Step I: Location & Map */}
        <LocationSection />

        {/* Step J: Thank You from Udit & Sima */}
        <ThankYouSection />

        {/* Step K: Footer */}
        <FooterSection />
      </main>
    </div>
  );
};

export default App;
