import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiOutlineShoppingBag,
  HiOutlineHeart,
  HiOutlineEye,
  HiX,
  HiArrowNarrowRight,
  HiCheckCircle,
} from "react-icons/hi";

const products = [
  {
    id: 1,
    name: "Gold Choker",
    price: 85000,
    img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1887",
  },
  {
    id: 2,
    name: "Diamond Ring",
    price: 45000,
    img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1770",
  },
  {
    id: 3,
    name: "Emerald Earcuffs",
    price: 32000,
    img: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=1964",
  },
  {
    id: 4,
    name: "Antique Necklace",
    price: 120000,
    img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070",
  },
];

const scrollingVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" },
    },
  },
};

const ProductSection = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [addedItemName, setAddedItemName] = useState("");

  // Function to handle Add to Cart
  const handleAddToCart = (product) => {
    // 1. Get existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem("calvi_cart")) || [];

    // 2. Check if item exists
    const itemIndex = existingCart.findIndex((item) => item.id === product.id);

    if (itemIndex > -1) {
      existingCart[itemIndex].quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    // 3. Save updated cart
    localStorage.setItem("calvi_cart", JSON.stringify(existingCart));

    // 4. Trigger Navbar update event
    window.dispatchEvent(new Event("cartUpdated"));

    // 5. Show Custom Royal Notification
    setAddedItemName(product.name);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <section className="py-16 md:py-24 bg-[#fdfbf7] overflow-hidden font-serif relative">
      {/* --- CUSTOM ROYAL TOAST NOTIFICATION --- */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            className="fixed top-24 right-6 z-[2000] bg-[#700000] text-[#d4af37] p-4 shadow-2xl border-l-4 border-[#b08d57] flex items-center gap-4 min-w-[280px]"
          >
            <HiCheckCircle size={24} className="text-[#d4af37]" />
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-70 font-sans">
                Added to Cart
              </p>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                {addedItemName}
              </h4>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="ml-auto text-white/50 hover:text-white"
            >
              <HiX size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Moving Text */}
      <div className="mb-12 md:mb-20 border-y border-[#b08d57]/30 py-4 bg-[#700000] flex whitespace-nowrap overflow-hidden">
        <motion.div
          className="flex space-x-12 md:space-x-20"
          variants={scrollingVariants}
          animate="animate"
        >
          <h2 className="text-[#d4af37] text-xl md:text-4xl font-bold uppercase tracking-[0.3em]">
            Timeless Elegance • Rare Diamonds • Pure Gold • CALVI Signature •
          </h2>
          <h2 className="text-[#d4af37] text-xl md:text-4xl font-bold uppercase tracking-[0.3em]">
            Timeless Elegance • Rare Diamonds • Pure Gold • CALVI Signature •
          </h2>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h4 className="text-[#b08d57] uppercase tracking-[0.4em] text-[10px] md:text-xs mb-2 font-bold font-sans">
            Handpicked for You
          </h4>
          <h2 className="text-[#5a0000] text-3xl md:text-5xl font-medium">
            Featured Collections
          </h2>
        </div>

        {/* Square Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -5 }}
              className="group relative bg-white border border-stone-200"
            >
              <div
                className="aspect-square overflow-hidden relative cursor-pointer"
                onClick={() => setSelectedImg(product.img)}
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#700000]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                  <button className="p-3 bg-white text-[#700000] rounded-full shadow-lg hover:bg-[#700000] hover:text-white transition-colors">
                    <HiOutlineHeart size={20} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImg(product.img);
                    }}
                    className="p-3 bg-white text-[#700000] rounded-full shadow-lg hover:bg-[#700000] hover:text-white transition-colors"
                  >
                    <HiOutlineEye size={20} />
                  </button>
                </div>
              </div>

              <div className="p-5 text-center">
                <h3 className="text-[#5a0000] text-lg tracking-wide uppercase mb-1 font-bold">
                  {product.name}
                </h3>
                <p className="text-[#b08d57] font-bold font-sans italic">
                  ₹{product.price.toLocaleString()}
                </p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-4 w-full py-3 bg-[#700000] text-white text-[10px] uppercase tracking-widest hover:bg-[#5a0000] transition-all flex items-center justify-center gap-2 font-bold font-sans active:scale-95"
                >
                  <HiOutlineShoppingBag size={16} /> Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-20 flex justify-center">
          <Link to="/products">
            <motion.div
              className="relative group cursor-pointer"
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 border border-[#b08d57] rounded-full"
                variants={{
                  initial: { scale: 1, opacity: 0 },
                  hover: { scale: 1.4, opacity: 0.3 },
                }}
                transition={{ duration: 0.6 }}
              />
              <motion.button
                className="relative flex items-center gap-4 px-10 py-4 bg-transparent border-2 border-[#700000] text-[#700000] overflow-hidden"
                variants={{ hover: { color: "black" } }}
              >
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0 bg-[#700000] z-0"
                  variants={{ hover: { h: "100%" } }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
                <span className="relative z-10 text-xs md:text-sm font-bold uppercase tracking-[0.3em]">
                  Explore All Collections
                </span>
                <motion.div
                  className="relative z-10"
                  variants={{ initial: { x: 0 }, hover: { x: 5 } }}
                >
                  <HiArrowNarrowRight size={22} />
                </motion.div>
              </motion.button>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Full Image Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/90 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-5 right-5 text-white bg-[#700000] p-3 rounded-full z-[1001]">
              <HiX size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={selectedImg}
              className="max-w-full max-h-[80vh] shadow-2xl border-4 border-[#b08d57]"
              alt="Full View"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductSection;
