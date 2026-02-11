import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-[#fdfbf7] overflow-hidden font-serif"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#b08d57] uppercase tracking-[0.6em] text-[10px] md:text-xs mb-3 font-bold font-sans"
          >
            Inquiry
          </motion.h4>
          <h2 className="text-[#5a0000] text-4xl md:text-5xl font-medium tracking-tight">
            Get In Touch
          </h2>
          <div className="w-20 h-[1px] bg-[#b08d57] mx-auto mt-6" />
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-12"
          >
            <div className="space-y-6">
              <h3 className="text-3xl text-[#700000] mb-4">Visit Our Studio</h3>
              <p className="text-gray-600 leading-relaxed italic text-lg">
                We invite you to experience our exclusive collections in person.
                Visit our private boutique for a personalized consultation.
              </p>
            </div>

            <div className="space-y-10">
              {/* Address */}
              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-[#700000] text-[#d4af37] rounded-full group-hover:bg-[#b08d57] group-hover:text-white transition-all duration-300 shadow-lg">
                  <HiOutlineLocationMarker size={24} />
                </div>
                <div>
                  <h4 className="text-[#5a0000] font-bold uppercase tracking-widest text-sm mb-1 font-sans">
                    Our Address
                  </h4>
                  <p className="text-gray-700 leading-snug">
                    Praška 10, 10000 <br />
                    Zagreb, Croatia
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-[#700000] text-[#d4af37] rounded-full group-hover:bg-[#b08d57] group-hover:text-white transition-all duration-300 shadow-lg">
                  <HiOutlinePhone size={24} />
                </div>
                <div>
                  <h4 className="text-[#5a0000] font-bold uppercase tracking-widest text-sm mb-1 font-sans">
                    Private Line
                  </h4>
                  <p className="text-gray-700 font-sans tracking-wider">
                    +385 1 481 0700
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-[#700000] text-[#d4af37] rounded-full group-hover:bg-[#b08d57] group-hover:text-white transition-all duration-300 shadow-lg">
                  <HiOutlineMail size={24} />
                </div>
                <div>
                  <h4 className="text-[#5a0000] font-bold uppercase tracking-widest text-sm mb-1 font-sans">
                    Email Inquiries
                  </h4>
                  <p className="text-gray-700 font-sans tracking-wider">
                    boutique@Nebula-jewels.com
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-[#b08d57]/20">
              <p className="text-xs uppercase tracking-[0.3em] text-[#b08d57] mb-6 font-bold font-sans">
                Follow Our Journey
              </p>
              <div className="flex gap-6">
                {[
                  { Icon: FaInstagram, link: "#" },
                  { Icon: FaFacebookF, link: "#" },
                  { Icon: FaPinterestP, link: "#" },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.link}
                    whileHover={{ y: -5, color: "#700000" }}
                    className="text-[#b08d57] transition-all p-2 border border-[#b08d57]/20 rounded-full hover:border-[#700000]"
                  >
                    <item.Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Modern Concierge Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 bg-white p-8 md:p-12 shadow-2xl border-t-4 border-[#700000] relative"
          >
            <div className="mb-8">
              <h3 className="text-2xl text-[#5a0000] mb-2">
                Concierge Request
              </h3>
              <p className="text-xs text-gray-400 font-sans uppercase tracking-widest">
                We will respond within 24 hours
              </p>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className="peer w-full bg-transparent border-b border-gray-200 py-2 focus:border-[#700000] outline-none transition-all font-sans placeholder-transparent"
                    placeholder="Full Name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-gray-400 text-[10px] uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-[#700000]"
                  >
                    Full Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="peer w-full bg-transparent border-b border-gray-200 py-2 focus:border-[#700000] outline-none transition-all font-sans placeholder-transparent"
                    placeholder="Email Address"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-400 text-[10px] uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-[#700000]"
                  >
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative">
                <select className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-[#700000] outline-none transition-all font-sans cursor-pointer text-gray-600">
                  <option disabled selected>
                    Nature of Inquiry
                  </option>
                  <option>Bespoke Commission</option>
                  <option>Boutique Appointment</option>
                  <option>Repair & Restoration</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="relative">
                <textarea
                  rows="4"
                  id="message"
                  className="peer w-full bg-transparent border-b border-gray-200 py-2 focus:border-[#700000] outline-none transition-all font-sans placeholder-transparent resize-none"
                  placeholder="Message"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-0 -top-3.5 text-gray-400 text-[10px] uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-[#700000]"
                >
                  Tell us about your requirements...
                </label>
              </div>

              <motion.button
                whileHover={{ backgroundColor: "#5a0000", y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#700000] text-[#d4af37] py-5 uppercase tracking-[0.4em] font-bold text-xs shadow-2xl transition-all"
              >
                Send Request
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
