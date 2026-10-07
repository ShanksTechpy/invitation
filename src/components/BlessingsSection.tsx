import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Send, Sparkles } from 'lucide-react';

export const BlessingsSection: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setSubmitted(true);

    // Send blessing directly to WhatsApp (+91 7540959703) in an elegant, professional format
    const whatsappText = `*Wedding Blessings for Udit & Subhadarshini*\n\n"${message.trim()}"\n\nWith Best Wishes & Warm Regards,\n— *${name.trim()}*`;
    const whatsappUrl = `https://wa.me/917540959703?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, '_blank');

    setName('');
    setMessage('');

    // Trigger celebratory confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#FCEAA6', '#AA8822', '#F3DB83'],
    });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="blessings" className="py-24 px-6 bg-[#1F0408] relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-3">
          <h2 className="font-wedding text-5xl sm:text-6xl md:text-7xl font-normal gold-text-gradient py-1">
            Send Your Blessings
          </h2>
          <div className="w-28 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </div>

        {/* Interactive Blessing Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4, rotateX: -1.5, scale: 1.01 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl palace-card border border-[#D4AF37]/50 shadow-[0_20px_45px_rgba(0,0,0,0.7)] preserve-3d"
        >
          <div className="text-center space-y-2 mb-8">
            <h3 className="font-serif-cormorant text-2xl sm:text-3xl font-medium text-[#FCEAA6]">
              Shower Udit & Subhadarshini With Your Love
            </h3>
            <p className="font-serif-cormorant text-base text-[#E8DFD1]/80 italic">
              Leave your heartfelt wish for the bride & groom.
            </p>
          </div>

          {submitted && (
            <div className="mb-6 p-4 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37] text-center text-[#FCEAA6] font-serif-cormorant text-lg">
              Thank you! Your blessings have been sent to Udit & Subhadarshini.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-sans-inter text-xs uppercase tracking-wider text-[#D4AF37] mb-2 font-semibold">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ankit Praharaj"
                className="w-full px-4 py-3.5 rounded-xl bg-[#120205]/80 border border-[#D4AF37]/30 text-[#FDFBF7] placeholder-[#E8DFD1]/40 focus:outline-none focus:border-[#D4AF37] transition-colors font-sans-inter text-sm"
              />
            </div>

            <div>
              <label className="block font-sans-inter text-xs uppercase tracking-wider text-[#D4AF37] mb-2 font-semibold">
                Your Blessing Message *
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your wishes and prayers here..."
                className="w-full px-4 py-3.5 rounded-xl bg-[#120205]/80 border border-[#D4AF37]/30 text-[#FDFBF7] placeholder-[#E8DFD1]/40 focus:outline-none focus:border-[#D4AF37] transition-colors font-serif-cormorant text-base leading-relaxed"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 px-8 rounded-full bg-gradient-to-r from-[#F3DB83] via-[#D4AF37] to-[#AA8822] text-[#1F0408] font-sans-inter text-xs uppercase tracking-[0.25em] font-bold shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" /> Send Blessing via WhatsApp <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
