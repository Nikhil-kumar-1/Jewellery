import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const FooterLink = ({ to, children }) => (
    <li>
      <Link
        to={to}
        className="text-[#c6a75e]/80 hover:text-white transition-colors duration-300 text-sm tracking-wide"
      >
        {children}
      </Link>
    </li>
  );

  return (
    <footer className="bg-[#3b0000] text-[#e6c98f] font-serif pt-20 pb-8 border-t border-[#c6a75e]/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16 border-b border-[#c6a75e]/20 pb-16">
          {/* Column 1: Brand Story */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <h2 className="text-3xl font-bold tracking-[0.25em] text-[#f3d9a4]">
                Nebula
              </h2>
            </Link>

            <p className="text-[#c6a75e]/80 text-sm leading-relaxed italic max-w-xs">
              A refined blend of timeless heritage and contemporary design.
              Every piece we create carries a story of craftsmanship, elegance,
              and enduring beauty.
            </p>

            <div className="flex gap-4 pt-2">
              {[
                { Icon: FaInstagram, href: "https://instagram.com" },
                { Icon: FaFacebookF, href: "https://facebook.com" },
                { Icon: FaPinterestP, href: "https://pinterest.com" },
                { Icon: FaYoutube, href: "https://youtube.com" },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -4,
                    backgroundColor: "#f3d9a4",
                    color: "#3b0000",
                  }}
                  className="p-2.5 border border-[#c6a75e]/30 rounded-full transition-all text-[#f3d9a4]"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Boutique */}
          <div className="space-y-6">
            <h4 className="text-white uppercase tracking-widest text-xs font-bold font-sans">
              Boutique
            </h4>
            <ul className="space-y-3">
              <FooterLink to="/products">All Collections</FooterLink>
              <FooterLink to="/about">Our Heritage</FooterLink>
              <FooterLink to="/contact">Book an Appointment</FooterLink>
              <FooterLink to="/products">Bespoke Designs</FooterLink>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="space-y-6">
            <h4 className="text-white uppercase tracking-widest text-xs font-bold font-sans">
              Support
            </h4>
            <ul className="space-y-3">
              <FooterLink to="/contact">Jewellery Care Guide</FooterLink>
              <FooterLink to="/contact">Shipping & Returns</FooterLink>
              <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink to="/terms">Terms & Conditions</FooterLink>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-6">
            <h4 className="text-white uppercase tracking-widest text-xs font-bold font-sans">
              Join Our Inner Circle
            </h4>

            <p className="text-xs text-[#c6a75e]/70 tracking-wide leading-relaxed">
              Subscribe to receive exclusive invitations, new collection
              launches, and private event updates.
            </p>

            <form
              className="relative mt-4 group"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full bg-transparent border-b border-[#c6a75e]/50 py-3 pr-10 focus:border-white outline-none transition-all placeholder:text-[#c6a75e]/40 text-sm font-sans"
              />

              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:translate-x-1 transition-transform duration-300 text-white"
              >
                <HiArrowNarrowRight size={22} />
              </button>
            </form>
          </div>
        </div>

        {/* ================= BOTTOM SECTION ================= */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] uppercase tracking-[0.2em] font-sans text-[#c6a75e]/60">
          <p className="text-center md:text-left">
            © {currentYear} Nebula Antique Fine Jewellery. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              to="/contact"
              className="text-white hover:text-[#f3d9a4] transition-colors"
            >
              Contact
            </Link>

            <div className="hidden sm:block h-3 w-[1px] bg-[#c6a75e]/30" />

            <a
              href="tel:+38514810700"
              className="text-white hover:text-[#f3d9a4] transition-colors"
            >
              (844) 449-9672
            </a>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="italic">Crafted by</span>
            <span className="text-white font-bold tracking-widest border-b border-white/20">
              Nikhil Kumar
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Line */}
      <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-transparent via-[#c6a75e]/40 to-transparent" />
    </footer>
  );
};

export default Footer;
