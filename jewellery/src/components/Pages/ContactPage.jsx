import React from "react";
import { motion } from "framer-motion";
import GetInTouch from "../Home/GetInTouch"; // Aapka form component yahan import ho raha hai
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineClock,
} from "react-icons/hi";

const Contact = () => {
  const contactDetails = [
    {
      icon: <HiOutlineLocationMarker size={28} />,
      title: "Our Studio",
      content: "Praška 10, 10000 Zagreb, Croatia",
    },
    {
      icon: <HiOutlinePhone size={28} />,
      title: "Call Us",
      content: "+385 1 481 0700",
    },
    {
      icon: <HiOutlineMail size={28} />,
      title: "Email Us",
      content: "boutique@Nebula-jewels.com",
    },
    {
      icon: <HiOutlineClock size={28} />,
      title: "Opening Hours",
      content: "Mon - Sat: 10:00 AM - 08:00 PM",
    },
  ];

  return (
    <div className="bg-[#fdfbf7] font-serif overflow-hidden">
      {/* 1. Creative Contact Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-[#4a0000]">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?q=80&w=2070"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#d4af37] uppercase tracking-[0.6em] text-[10px] md:text-xs mb-4 font-bold"
          >
            Connect With Us
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-white text-4xl md:text-7xl font-bold uppercase tracking-tighter"
          >
            Contact <span className="text-[#d4af37]">Boutique</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. Contact Cards Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactDetails.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 text-center border-b-2 border-stone-100 hover:border-[#700000] transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className="text-[#700000] flex justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-[#5a0000] font-bold uppercase tracking-widest text-xs mb-3 font-sans">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. The Form Section (Imported GetInTouch) */}
      <section className="pb-24">
        <GetInTouch />
      </section>

      {/* 4. Interactive Map Section */}
      {/* 4. Interactive Map Section */}
      <section className="h-[500px] w-full relative group">
        <iframe
          title="Nebula Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.789146194218!2d15.974955376569112!3d45.815310871082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6fe4b568323%3A0x6b8015c8e31b0b5e!2zUHJhxaFrYSAxMCwgMTAwMDAsIFphZ3JlYiwgQ3JvYXRpYQ!5e0!3m2!1sen!2sin!4v1707654321000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter: "grayscale(1) contrast(1.1) brightness(0.9)",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* Decorative Overlay for Map */}
        <div className="absolute inset-0 bg-[#700000]/5 pointer-events-none group-hover:bg-transparent transition-all duration-700" />
      </section>
    </div>
  );
};

export default Contact;
