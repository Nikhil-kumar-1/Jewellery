import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] md:h-[85vh] w-full flex items-center justify-center overflow-hidden bg-[#f3e9dc] pt-20 md:pt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop"
          alt="Antique Jewellery"
          className="w-full h-full object-cover opacity-40 mix-blend-multiply"
        />
        {/* Soft Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#70000010] to-[#70000020]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 md:px-6 w-full max-w-5xl mx-auto py-12">
        {/* Animated Sub-heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#700000] font-serif italic tracking-[2px] md:tracking-[4px] uppercase text-xs md:text-base mb-3 md:mb-4"
        >
          Since 1920
        </motion.p>

        {/* Main Heading - Responsive Font Sizes */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-7xl font-serif font-bold text-[#700000] leading-tight drop-shadow-sm px-2"
        >
          Heirloom & Timeless <br className="hidden sm:block" />
          <span className="text-[#b08d57]">Jewels</span>
        </motion.h1>

        {/* Description - Responsive Width and Size */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 md:mt-6 text-[#5c4033] text-base md:text-xl font-serif max-w-sm md:max-w-2xl mx-auto italic leading-relaxed px-2"
        >
          Experience the legacy of craftsmanship. Adorn yourself with history
          and elegance that transcends generations.
        </motion.p>

        {/* Buttons - Mobile Stack to Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
        >
          <Link
            to="/shop"
            className="w-full sm:w-auto px-8 md:px-10 py-3 bg-[#700000] text-white font-serif uppercase tracking-widest text-xs md:text-sm rounded-full border-2 border-[#700000] hover:bg-transparent hover:text-[#700000] transition-all duration-500 shadow-xl text-center"
          >
            Shop Now
          </Link>

          <Link
            to="/collections"
            className="w-full sm:w-auto px-8 md:px-10 py-3 bg-[#b08d57] text-white font-serif uppercase tracking-widest text-xs md:text-sm rounded-full border-2 border-[#b08d57] hover:bg-transparent hover:text-[#b08d57] transition-all duration-500 shadow-xl text-center"
          >
            Explore
          </Link>
        </motion.div>
      </div>

      {/* Decorative Border Bottom */}
      <div className="absolute bottom-0 w-full h-1 bg-[#b08d57]"></div>
    </section>
  );
};

export default Hero;
