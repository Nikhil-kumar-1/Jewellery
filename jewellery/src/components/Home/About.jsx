import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-20 bg-[#fdfbf7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Creative Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 border-[12px] border-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1719862056514-0cdacd9142b5?w=600&auto=format&fit=crop&q=60"
                alt="Exquisite Craftsmanship"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative Gold Frame Background */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#b08d57]/30 z-0 hidden md:block" />
            <div className="absolute -bottom-10 -right-10 bg-[#700000] p-8 text-white hidden md:block z-20 shadow-xl">
              <p className="font-serif italic text-xl">
                "Pure Gold, Pure Emotions."
              </p>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-4">
              <h4 className="text-[#b08d57] uppercase tracking-[0.3em] text-sm font-semibold">
                Our Heritage
              </h4>
              <h2 className="text-4xl md:text-5xl font-serif text-[#5a0000] leading-tight">
                Crafting Legacies Since <span className="italic">1920</span>
              </h2>
            </div>

            <p className="text-gray-700 font-serif leading-relaxed text-lg">
              At CALVI, we don’t just create jewellery; we give shape to your
              deepest emotions. A seamless blend of century-old craftsmanship
              and modern sophistication, every piece is curated to be a timeless
              masterpiece. Our collection is designed to celebrate your unique
              beauty and immortalize your most cherished memories.
            </p>

            <div className="grid grid-cols-2 gap-8 py-6">
              <div>
                <h3 className="text-3xl font-serif text-[#700000]">100%</h3>
                <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">
                  Hallmarked Gold
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-serif text-[#700000]">50k+</h3>
                <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">
                  Global Clients
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-[#700000] text-[#d4af37] uppercase tracking-widest text-sm font-semibold hover:bg-[#5a0000] transition-all shadow-lg"
            >
              Discover Our Journey
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
