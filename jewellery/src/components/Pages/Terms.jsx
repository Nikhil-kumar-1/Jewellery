import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineDocumentText,
  HiOutlineScale,
  HiOutlineShieldCheck,
} from "react-icons/hi";

const Terms = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  const sections = [
    {
      title: "Usage Policy",
      icon: <HiOutlineDocumentText size={30} />,
      content:
        "Hamari website ka upyog karke aap yeh maante hain ki aap saari terms se sehmat hain aur aapka data legal purposes ke liye use kiya ja sakta hai.",
    },
    {
      title: "Authenticity",
      icon: <HiOutlineShieldCheck size={30} />,
      content:
        "CALVI ka har ek piece 100% authentic gold aur certified diamonds ke saath aata hai. Kisi bhi mismatch par hum zimmedari lete hain.",
    },
    {
      title: "Legal Terms",
      icon: <HiOutlineScale size={30} />,
      content:
        "Saare dispute aur legal mamle Zagreb, Croatia ke jurisdiction ke andar handle kiye jayenge. Hum fair business practices mein vishwas rakhte hain.",
    },
  ];

  return (
    <div className="bg-[#fdfbf7] font-serif pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Section */}
        <motion.div {...fadeIn} className="text-center mb-16">
          <h4 className="text-[#b08d57] uppercase tracking-[0.4em] text-xs mb-3 font-bold font-sans">
            Rules of the House
          </h4>
          <h1 className="text-[#5a0000] text-4xl md:text-6xl font-medium tracking-tight">
            Terms & Conditions
          </h1>
          <div className="w-24 h-[1px] bg-[#b08d57] mx-auto mt-8" />
          <p className="mt-6 text-gray-500 italic">
            Effective Date: February 11, 2026
          </p>
        </motion.div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              {...fadeIn}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 border border-[#b08d57]/20 shadow-sm text-center group hover:border-[#700000] transition-all duration-500"
            >
              <div className="text-[#700000] mb-4 flex justify-center transition-transform group-hover:scale-110">
                {section.icon}
              </div>
              <h3 className="text-[#5a0000] font-bold uppercase tracking-widest text-xs mb-3 font-sans">
                {section.title}
              </h3>
              <p className="text-gray-600 text-[11px] leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Legal Content */}
        <motion.div
          {...fadeIn}
          className="text-gray-700 leading-relaxed space-y-12"
        >
          <section>
            <h2 className="text-2xl text-[#700000] font-bold mb-4 border-b border-[#b08d57]/30 pb-2">
              1. Agreement to Terms
            </h2>
            <p className="text-sm">
              By accessing the **CALVI Antique Fine Jewellery** website, aap
              hamari sharton ko swikar karte hain. Yeh website Praška 10, Zagreb
              se operate ki jati hai. Agar aap in sharton se sehmat nahi hain,
              toh kripya website ka upyog na karein.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#700000] font-bold mb-4 border-b border-[#b08d57]/30 pb-2">
              2. Product Accuracy
            </h2>
            <p className="text-sm">
              Hum poori koshish karte hain ki jewellery ki har image aur details
              accurate ho. Halanki, handmade jewellery aur natural gemstones
              hone ke karan thoda variation aa sakta hai. Prices bina kisi
              notice ke badle ja sakte hain.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#700000] font-bold mb-4 border-b border-[#b08d57]/30 pb-2">
              3. Payment & Security
            </h2>
            <p className="text-sm">
              CALVI ek secure portal hai. Orders tabhi confirm honge jab payment
              verify ho jayegi. Kisi bhi technical failure ke karan payment fail
              hone par hum bank ke saath milkar 7 business days mein refund
              process karte hain.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#700000] font-bold mb-4 border-b border-[#b08d57]/30 pb-2">
              4. Intellectual Property
            </h2>
            <p className="text-sm">
              Is website par maujood har design, image, aur text **CALVI** ki
              property hai. Bina written permission ke hamari designs ka upyog
              karna ya copy karna sakht mana hai.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#700000] font-bold mb-4 border-b border-[#b08d57]/30 pb-2">
              5. Returns & Refunds
            </h2>
            <p className="text-sm">
              Bespoke aur customized jewellery ke liye koi return policy nahi
              hai. Standard collections ke liye aap delivery ke 48 hours ke
              andar return request initiate kar sakte hain, basharte gehna apni
              original packing aur tag ke saath ho.
            </p>
          </section>

          {/* Boutique Footer inside Page */}
          <div className="mt-20 py-10 border-t border-[#b08d57]/50 text-center">
            <p className="text-[#b08d57] italic text-sm mb-4">
              "Trust is the finest gold we own."
            </p>
            <div className="flex justify-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">
              <span>Nikhil Kumar</span>
              <span className="text-[#700000]">|</span>
              <span>CALVI Jewels Team</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
