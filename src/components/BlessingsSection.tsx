import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Send, Sparkles } from 'lucide-react';

interface BlessingCard {
  id: string;
  name: string;
  relation: string;
  message: string;
}

const initialBlessings: BlessingCard[] = [];

export const BlessingsSection: React.FC = () => {
  const [blessings, setBlessings] = useState<BlessingCard[]>(initialBlessings);
  const [name, setName] = useState('');
  const [relation, setRelation] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const relText = relation.trim() || 'Friend & Well Wisher';
    const newBlessing: BlessingCard = {
      id: Date.now().toString(),
      name: name.trim(),
      relation: relText,
      message: message.trim(),
    };

    setBlessings([newBlessing, ...blessings]);
    setSubmitted(true);

    // Send blessing directly to WhatsApp (+91 7540959703)
    const whatsappText = `*Wedding Blessing for Udit & Subhadarshini*\n\n*Name:* ${name.trim()}\n*Relation:* ${relText}\n*Message:* ${message.trim()}`;
    const whatsappUrl = `https://wa.me/917540959703?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, '_blank');

    setName('');
    setRelation('');
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
          <p className="font-serif-cormorant text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
            Wishes & Prayers
          </p>
          <h2 className="font-wedding text-5xl sm:text-6xl md:text-7xl font-normal gold-text-gradient py-1">
            Send Your Blessings
          </h2>
          <div className="w-28 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </div>

        {/* Blessing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 preserve-3d">
          <AnimatePresence>
            {blessings.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, rotateX: -3, rotateY: 3, scale: 1.02 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-8 rounded-3xl palace-card border border-[#D4AF37]/40 flex flex-col justify-between space-y-6 relative group hover:border-[#D4AF37]/80 transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.6)] preserve-3d cursor-pointer"
              >
                <div className="space-y-4 translate-z-20">
                  <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-3">
                    <div>
                      <h3 className="font-serif-cormorant text-2xl font-semibold text-[#FCEAA6]">
                        {item.name}
                      </h3>
                      <p className="font-sans-inter text-xs tracking-wider text-[#D4AF37]">
                        {item.relation}
                      </p>
                    </div>
                    <Heart className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]/20 group-hover:fill-[#D4AF37] group-hover:scale-125 transition-all" />
                  </div>

                  <p className="font-serif-cormorant text-lg text-[#FDFBF7] italic leading-relaxed font-light">
                    “{item.message}”
                  </p>
                </div>

                <div className="w-16 h-[1px] bg-[#D4AF37]/40 mx-auto translate-z-10" />
              </motion.div>
            ))}
          </AnimatePresence>
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
              ✨ Thank you! Your blessings have been sent to Udit & Subhadarshini.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                  className="w-full px-4 py-3 rounded-xl bg-[#120205]/80 border border-[#D4AF37]/30 text-[#FDFBF7] placeholder-[#E8DFD1]/40 focus:outline-none focus:border-[#D4AF37] transition-colors font-sans-inter text-sm"
                />
              </div>

              <div>
                <label className="block font-sans-inter text-xs uppercase tracking-wider text-[#D4AF37] mb-2 font-semibold">
                  Family / Relation
                </label>
                <input
                  type="text"
                  value={relation}
                  onChange={(e) => setRelation(e.target.value)}
                  placeholder="e.g. Friend / Cousin"
                  className="w-full px-4 py-3 rounded-xl bg-[#120205]/80 border border-[#D4AF37]/30 text-[#FDFBF7] placeholder-[#E8DFD1]/40 focus:outline-none focus:border-[#D4AF37] transition-colors font-sans-inter text-sm"
                />
              </div>
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
                className="w-full px-4 py-3 rounded-xl bg-[#120205]/80 border border-[#D4AF37]/30 text-[#FDFBF7] placeholder-[#E8DFD1]/40 focus:outline-none focus:border-[#D4AF37] transition-colors font-serif-cormorant text-base"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 px-8 rounded-full bg-gradient-to-r from-[#F3DB83] via-[#D4AF37] to-[#AA8822] text-[#1F0408] font-sans-inter text-xs uppercase tracking-[0.25em] font-bold shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" /> Send Blessing Message <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
