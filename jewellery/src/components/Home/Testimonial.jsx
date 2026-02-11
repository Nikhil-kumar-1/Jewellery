import React from "react";
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";
import { RiDoubleQuotesL } from "react-icons/ri";

const reviews = [
  {
    id: 1,
    name: "Elena Petrovic",
    role: "Haute Couture Bride",
    text: "Adorning Nebula on my wedding day was an ethereal experience. Their Antique Gold Choker is not just jewellery; it is a piece of history that made me feel truly regal.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887",
  },
  {
    id: 2,
    name: "Julian Van der Woodsen",
    role: "Antique Connoisseur",
    text: "The precision of their craftsmanship is astonishing. As a collector of vintage gems, I can attest that Nebula's attention to detail rivals the great European houses of old.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887",
  },
  {
    id: 3,
    name: "Sophia Moretti",
    role: "Gems Curator",
    text: "I have always sought pieces that tell a story. Nebula’s ability to weave heritage into modern silhouettes is what makes them a permanent part of my private collection.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770",
  },
  {
    id: 4,
    name: "Marcus Thorne",
    role: "Luxury Lifestyle Critic",
    text: "Few brands manage to capture pure emotion in gold quite like Nebula. Their commitment to ethical sourcing and timeless design is what defines true modern luxury.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888",
  },
];

const infiniteReviews = [...reviews, ...reviews];

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#700000] overflow-hidden relative">
      {/* Decorative Background Icon */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <RiDoubleQuotesL className="text-white text-[400px] -translate-x-20 -translate-y-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#d4af37] uppercase tracking-[0.5em] text-xs mb-3 font-bold font-sans"
          >
            Voice of Elegance
          </motion.h4>
          <h2 className="text-white text-4xl md:text-5xl font-serif">
            Client Testimonials
          </h2>
          <div className="w-24 h-[1px] bg-[#b08d57] mx-auto mt-6" />
        </div>

        {/* Infinite Auto-Scrolling Container */}
        <div className="flex overflow-hidden mask-gradient">
          <motion.div
            className="flex gap-8"
            animate={{ x: [0, -1800] }} // Adjusted for English text length
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35, // Slightly slower for better readability
                ease: "linear",
              },
            }}
          >
            {infiniteReviews.map((item, index) => (
              <div
                key={index}
                className="w-[350px] md:w-[450px] flex-shrink-0 bg-[#fdfbf7] p-8 md:p-12 shadow-2xl relative border-b-4 border-[#b08d57]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#b08d57] p-1 shadow-md"
                  />
                  <div>
                    <h3 className="text-[#5a0000] font-serif font-bold text-lg">
                      {item.name}
                    </h3>
                    <p className="text-[#b08d57] text-xs uppercase tracking-widest font-sans font-semibold">
                      {item.role}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <AiFillStar key={i} className="text-amber-500" size={16} />
                  ))}
                </div>

                <p className="text-gray-700 italic font-serif leading-relaxed text-base">
                  "{item.text}"
                </p>

                <RiDoubleQuotesL className="absolute bottom-6 right-8 text-[#b08d57]/20 text-5xl" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Edge Fading Mask */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `,
        }}
      />
    </section>
  );
};

export default Testimonials;
