import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineShoppingBag,
  HiMenu,
  HiX,
  HiChevronRight,
} from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("Nebula_cart")) || [];
    const count = cart.reduce((total, item) => total + (item.quantity || 1), 0);
    setCartCount(count);
  };

  useEffect(() => {
    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    window.addEventListener("cartUpdated", updateCartCount);
    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="relative w-full z-[100] bg-[#700000] border-b-2 border-[#b08d57]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-24 relative">
          {/* Desktop Links (Left) */}
          <div className="hidden md:flex space-x-12 flex-1 justify-end pr-16">
            {navLinks.slice(0, 2).map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="text-[#d4af37] font-serif tracking-[2px] uppercase text-sm hover:text-white transition-colors"
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Logo - Centered on Desktop & Mobile */}
          <Link to="/" className="relative z-20">
            <div className="bg-[#700000] border-2 border-[#b08d57] rounded-full p-4 w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center text-center shadow-2xl transform translate-y-2 md:translate-y-4 transition-transform hover:scale-105">
              <span className="text-[#d4af37] text-xs font-serif tracking-widest uppercase font-bold">
                Nebula
              </span>
              <div className="w-10 h-[1px] bg-[#b08d57] my-1"></div>
              <span className="text-[7px] md:text-[8px] text-[#d4af37] uppercase leading-tight italic">
                Fine Jewellery
              </span>
              <span className="text-[6px] md:text-[7px] text-[#b08d57] mt-1 font-sans font-bold">
                Zagreb
              </span>
            </div>
          </Link>

          {/* Desktop Links (Right) */}
          <div className="hidden md:flex items-center space-x-12 flex-1 pl-16">
            {navLinks.slice(2).map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="text-[#d4af37] font-serif tracking-[2px] uppercase text-sm hover:text-white transition-colors"
              >
                {link.name}
              </NavLink>
            ))}

            <Link to="/cart">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative cursor-pointer text-[#d4af37] hover:text-white"
              >
                <HiOutlineShoppingBag size={26} />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-2 bg-white text-[#700000] text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center shadow-md"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu & Cart Icon */}
          <div className="md:hidden flex items-center space-x-5 relative z-[110]">
            <Link to="/cart" className="relative text-[#d4af37]">
              <HiOutlineShoppingBag size={28} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-white text-[#700000] text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#d4af37] focus:outline-none"
            >
              {isOpen ? <HiX size={32} /> : <HiMenu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] md:hidden"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-[#700000] z-[100] md:hidden shadow-2xl border-l border-[#b08d57]/30"
            >
              <div className="flex flex-col h-full pt-32 px-8 pb-10">
                <div className="flex flex-col space-y-8">
                  {navLinks.map((link, index) => (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      key={link.name}
                    >
                      <NavLink
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="text-[#d4af37] font-serif tracking-[3px] uppercase text-xl flex items-center justify-between group"
                      >
                        {link.name}
                        <HiChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </NavLink>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto pt-10 border-t border-[#b08d57]/30 text-center">
                  <p className="text-[10px] text-[#b08d57] uppercase tracking-[4px] italic mb-4">
                    Pure Gold, Pure Emotions
                  </p>
                  <div className="flex justify-center space-x-6 text-[#d4af37]">
                    <span className="text-xs tracking-widest font-sans">
                      ZAGREB
                    </span>
                    <span className="text-xs tracking-widest font-sans">
                      EST. 1920
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
