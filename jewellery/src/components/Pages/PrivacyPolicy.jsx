import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineShieldCheck,
  HiOutlineLockClosed,
  HiOutlineEye,
} from "react-icons/hi";

const PrivacyPolicy = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  const sections = [
    {
      title: "Data Collection",
      icon: <HiOutlineEye size={30} />,
      content:
        "Hum aapka naam, email, phone number aur shipping address tab collect karte hain jab aap hamare royal collection se kuch order karte hain ya hamare boutique appointment ke liye register karte hain.",
    },
    {
      title: "Secure Transactions",
      icon: <HiOutlineLockClosed size={30} />,
      content:
        "Aapki payment details 256-bit encryption ke saath secure ki jati hain. Nebula kabhi bhi aapke credit card ya bank details apne servers par store nahi karta.",
    },
    {
      title: "Trust & Transparency",
      icon: <HiOutlineShieldCheck size={30} />,
      content:
        "Hum aapka personal data kisi bhi teesre paksh (third party) ko sell nahi karte. Aapka data sirf aapke shopping experience ko behtar banane ke liye use kiya jata hai.",
    },
  ];

  return (
    <div className="bg-[#fdfbf7] font-serif pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Section */}
        <motion.div {...fadeIn} className="text-center mb-20">
          <h4 className="text-[#b08d57] uppercase tracking-[0.4em] text-xs mb-3 font-bold font-sans">
            Legal Information
          </h4>
          <h1 className="text-[#5a0000] text-4xl md:text-6xl font-medium tracking-tight">
            Privacy Policy
          </h1>
          <div className="w-24 h-[1px] bg-[#b08d57] mx-auto mt-8" />
          <p className="mt-6 text-gray-500 italic">
            Last Updated: February 2026
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              {...fadeIn}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 border border-[#b08d57]/20 shadow-sm text-center group hover:border-[#700000] transition-colors"
            >
              <div className="text-[#700000] mb-4 flex justify-center">
                {section.icon}
              </div>
              <h3 className="text-[#5a0000] font-bold uppercase tracking-widest text-xs mb-3 font-sans">
                {section.title}
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Content */}
        <motion.div
          {...fadeIn}
          className="prose prose-stone max-w-none text-gray-700 leading-relaxed space-y-10"
        >
          <section>
            <h2 className="text-2xl text-[#700000] font-bold mb-4 border-b border-[#b08d57]/30 pb-2">
              1. Introduction
            </h2>
            <p>
              Welcome to <strong>Nebula Antique Fine Jewellery</strong>. Hum
              aapki privacy ka poora sammaan karte hain. Yeh policy aapko batati
              hai ki hum aapki information kaise handle karte hain jab aap
              hamari website visit karte hain ya hamare bespoke services ka use
              karte hain.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#700000] font-bold mb-4 border-b border-[#b08d57]/30 pb-2">
              2. Information We Collect
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Personal Details:</strong> Name, Email, Phone Number.
              </li>
              <li>
                <strong>Purchase History:</strong> Jewellery pieces you have
                inquired about or bought.
              </li>
              <li>
                <strong>Cookies:</strong> Website performance aur user
                experience behtar karne ke liye hum cookies ka use karte hain.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-[#700000] font-bold mb-4 border-b border-[#b08d57]/30 pb-2">
              3. How We Use Your Data
            </h2>
            <p>
              Aapka data hum sirf order processing, shipping, aur agar aapne
              opt-in kiya hai toh naye "Signature Collections" ki update dene ke
              liye use karte hain. Hum aapki pasand ke mutabik aapko
              personalized jewellery suggestions bhi bhej sakte hain.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#700000] font-bold mb-4 border-b border-[#b08d57]/30 pb-2">
              4. Your Rights
            </h2>
            <p>
              Aapke paas poora adhikaar hai ki aap humse puch sakein ki humne
              aapka kya data store kiya hai. Aap kisi bhi waqt apna account
              delete karne ya data modify karne ki request{" "}
              <strong>boutique@Nebula-jewels.com</strong> par bhej sakte hain.
            </p>
          </section>

          {/* Contact Box */}
          <div className="mt-16 bg-[#700000] p-10 text-center text-[#d4af37] border-2 border-[#b08d57]">
            <h3 className="text-xl uppercase tracking-widest mb-4">
              Any Questions?
            </h3>
            <p className="text-white/80 text-sm mb-6 font-sans">
              Agar aapko hamari privacy practices ke baare mein kuch bhi puchna
              hai, toh beshijhak humse sampark karein.
            </p>
            <p className="font-bold tracking-widest text-lg font-sans">
              Praška 10, Zagreb, Croatia
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
