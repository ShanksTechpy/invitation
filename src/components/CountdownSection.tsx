import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownSection: React.FC = () => {
  const targetDate = new Date('2027-02-10T19:00:00+05:30').getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-[#1F0408] to-[#120205] text-center border-b border-[#D4AF37]/20">
      <div className="max-w-4xl mx-auto space-y-10">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif-cormorant text-xl sm:text-2xl uppercase tracking-[0.25em] text-[#D4AF37]"
        >
          Counting Down To The Royal Celebration
        </motion.p>

        {/* Live Countdown Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto preserve-3d">
          {[
            { label: 'DAYS', value: timeLeft.days },
            { label: 'HOURS', value: timeLeft.hours },
            { label: 'MINUTES', value: timeLeft.minutes },
            { label: 'SECONDS', value: timeLeft.seconds },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.06, rotateX: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 rounded-2xl badge-3d flex flex-col items-center justify-center space-y-2 group cursor-pointer preserve-3d shadow-[0_12px_28px_rgba(0,0,0,0.7)]"
            >
              <span className="font-wedding text-4xl sm:text-5xl md:text-6xl gold-text-gradient font-normal leading-none translate-z-20 group-hover:scale-110 transition-transform">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="font-sans-inter text-xs tracking-[0.25em] text-[#E8DFD1]/80 font-semibold group-hover:text-[#D4AF37] transition-colors translate-z-10">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
