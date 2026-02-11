import React from "react";
import { motion } from "framer-motion";
import { GiDiamondRing, GiGoldBar, GiJeweledChalice } from "react-icons/gi";
import { FaHistory, FaGem } from "react-icons/fa";
import { FaHandSparkles } from "react-icons/fa6";
import { RiDoubleQuotesL } from "react-icons/ri";

const AboutPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  return (
    <div className="bg-[#fdfbf7] font-serif overflow-hidden">
      {/* 1. Page Header / Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[#4a0000]">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070"
            alt="Jewellery Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h4
            {...fadeIn}
            className="text-[#d4af37] uppercase tracking-[0.5em] text-xs mb-4 font-bold font-sans"
          >
            The Nebula Legacy
          </motion.h4>
          <motion.h1
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="text-white text-5xl md:text-7xl font-bold tracking-tight"
          >
            Our Story
          </motion.h1>
          <div className="w-24 h-[1px] bg-[#b08d57] mx-auto mt-8" />
        </div>
      </section>

      {/* 2. Brand Philosophy (Storytelling) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div {...fadeIn} className="flex-1">
            <h2 className="text-[#5a0000] text-4xl mb-8 leading-tight">
              Authenticity, <br />
              Crafted with{" "}
              <span className="italic text-[#b08d57]">Devotion</span>
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                Founded in 1920 amidst the narrow, historic cobblestone streets
                of Zagreb, Croatia, the journey of Nebula has evolved into a
                distinguished global heritage. When our founder crafted his very
                first piece, his ambition was not merely to create an ornament,
                but to immortalize memories that transcend generations.
              </p>
              <p>
                We believe that every diamond and every ounce of gold carries
                its own unique narrative. At Nebula, we do not simply
                manufacture jewellery; we curate Fine Art. Our design philosophy
                has always been a golden harmony between Antique Aesthetics and
                Modern Precision.
              </p>
            </div>
          </motion.div>
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.3 }}
            className="flex-1 relative"
          >
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1974"
              className="w-full h-[550px] object-cover shadow-2xl border-[15px] border-white"
              alt="The Master Jeweller at Work"
            />
            <div className="absolute -bottom-10 -left-10 bg-[#700000] text-[#d4af37] p-10 hidden md:block shadow-2xl">
              <span className="text-5xl font-bold">100+</span>
              <p className="uppercase text-[10px] tracking-widest mt-2 font-sans font-bold">
                Years of Excellence
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Core Values (Icons) */}
      <section className="py-24 bg-[#700000] text-[#fdfbf7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {[
              {
                icon: <FaGem size={40} />,
                title: "Ethical Sourcing",
                desc: "We exclusively utilize conflict-free diamonds and 100% hallmarked gold, ensuring your trust remains our most valued asset.",
              },
              {
                icon: <FaHandSparkles size={40} />,
                title: "Exquisite Artistry",
                desc: "Every piece passes through the hands of our master artisans, who dedicate over 500 hours to perfect a single masterpiece.",
              },
              {
                icon: <FaHistory size={40} />,
                title: "Timeless Design",
                desc: "Designs that exist beyond the ephemeral nature of trends—as breathtaking today as they will be a century from now.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center space-y-4"
              >
                <div className="text-[#d4af37] mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold tracking-widest uppercase text-[#d4af37] font-sans">
                  {value.title}
                </h3>
                <p className="opacity-80 font-light leading-relaxed text-sm">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Craftsmanship Process */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-[#5a0000] text-4xl md:text-5xl mb-4 tracking-tight">
            The Art of Creation
          </h2>
          <p className="text-[#b08d57] italic text-lg">
            A glimpse behind the curtain of our private studio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[800px]">
          <div className="grid grid-rows-2 gap-4">
            <motion.img
              {...fadeIn}
              src="https://images.unsplash.com/photo-1667610508662-08ac0deec289?w=600&auto=format&fit=crop&q=60"
              className="w-full h-full object-cover shadow-lg"
            />
            <motion.img
              {...fadeIn}
              transition={{ delay: 0.2 }}
              src="https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1887"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
          <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
            <img
              src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?q=80&w=2070"
              className="w-full h-full object-cover shadow-inner border border-stone-200"
              alt="Detailing a Masterpiece"
            />
          </motion.div>
        </div>
      </section>

      {/* 5. Founder's Message */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center border-2 border-[#b08d57]/20 p-12 md:p-20 relative">
          <RiDoubleQuotesL className="absolute top-10 left-10 text-[#b08d57]/20 text-7xl" />
          <motion.p
            {...fadeIn}
            className="text-2xl md:text-3xl italic text-gray-800 leading-relaxed font-light mb-10"
          >
            "Jewellery is far more than an accessory; it is a legacy passed from
            a mother to her daughter. At Nebula, we are honoured to help you
            build that eternal legacy."
          </motion.p>
          <motion.h5
            {...fadeIn}
            className="text-[#700000] font-bold tracking-widest uppercase font-sans"
          >
            Robert Cleve
          </motion.h5>
          <p className="text-[#b08d57] text-xs uppercase tracking-[0.3em] mt-2 font-bold">
            Managing Director, Nebula
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
