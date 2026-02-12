import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineShoppingBag,
  HiOutlineHeart,
  HiOutlineEye,
  HiX,
  HiCheckCircle,
} from "react-icons/hi";

const products = [
  {
    id: 1,
    name: "Royal Gold Choker",
    price: 4899,
    img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1887",
    desc: "22K Pure Gold with antique finish.",
  },
  {
    id: 2,
    name: "Solitaire Diamond Ring",
    price: 7250,
    img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1770",
    desc: "Hand-picked solitaire with platinum band.",
  },
  {
    id: 3,
    name: "Emerald Earcuffs",
    price: 3690,
    img: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=1964",
    desc: "Rare Zambian emeralds set in white gold.",
  },
  {
    id: 4,
    name: "Antique Heritage Necklace",
    price: 11200,
    img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070",
    desc: "Museum-grade antique craftsmanship.",
  },
];

const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [lastAddedItem, setLastAddedItem] = useState("");

  // USD Formatter
  const formatUSD = (amount) =>
    `$${amount.toLocaleString("en-US", {
      minimumFractionDigits: 0,
    })}`;

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("Nebula_cart")) || [];

    const isItemInCart = existingCart.find((item) => item.id === product.id);

    let updatedCart;

    if (isItemInCart) {
      updatedCart = existingCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item,
      );
    } else {
      updatedCart = [...existingCart, { ...product, quantity: 1 }];
    }

    localStorage.setItem("Nebula_cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));

    setLastAddedItem(product.name);
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <section className="py-24 bg-[#fdfbf7] min-h-screen font-serif relative">
      {/* Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            className="fixed top-28 right-6 z-[2000] bg-[#700000] text-[#d4af37] p-5 shadow-2xl border-l-4 border-[#b08d57] flex items-center gap-4 min-w-[300px]"
          >
            <HiCheckCircle size={24} />
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-70">
                Added to Cart
              </p>
              <h4 className="text-sm font-bold text-white">{lastAddedItem}</h4>
            </div>
            <button
              onClick={() => setShowNotification(false)}
              className="ml-auto hover:text-white"
            >
              <HiX size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-[#b08d57] uppercase tracking-[0.5em] text-xs mb-3 font-bold">
            Nebula Boutique
          </h4>
          <h1 className="text-[#5a0000] text-4xl md:text-6xl font-medium tracking-tighter">
            Signature Jewels
          </h1>
          <div className="w-20 h-[1px] bg-[#b08d57] mx-auto mt-6" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white group border border-stone-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-[#700000]/10 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                  <button className="p-4 bg-white text-[#700000] rounded-full shadow-lg hover:bg-[#700000] hover:text-white transition-all">
                    <HiOutlineHeart size={20} />
                  </button>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="p-4 bg-white text-[#700000] rounded-full shadow-lg hover:bg-[#700000] hover:text-white transition-all"
                  >
                    <HiOutlineEye size={20} />
                  </button>
                </div>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-[#5a0000] text-lg font-bold uppercase tracking-tight">
                  {product.name}
                </h3>

                <p className="text-[#b08d57] font-bold mt-1 italic">
                  {formatUSD(product.price)}
                </p>

                <button
                  onClick={() => addToCart(product)}
                  className="mt-5 w-full py-3 bg-[#700000] text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#5a0000] transition-all flex items-center justify-center gap-2"
                >
                  <HiOutlineShoppingBag size={16} /> Add To Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <button className="absolute top-8 right-8 text-white bg-[#700000] p-3 rounded-full">
              <HiX size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white max-w-4xl w-full flex flex-col md:flex-row shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex-1 max-h-[600px]">
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 p-10 flex flex-col justify-center bg-[#fdfbf7]">
                <h2 className="text-3xl text-[#5a0000] font-bold mb-4">
                  {selectedProduct.name}
                </h2>

                <p className="text-[#b08d57] text-xl font-bold mb-6 italic">
                  {formatUSD(selectedProduct.price)}
                </p>

                <p className="text-gray-600 mb-8 italic">
                  "{selectedProduct.desc}"
                </p>

                <button
                  onClick={() => {
                    addToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="w-full py-4 bg-[#700000] text-white uppercase tracking-widest font-bold hover:bg-[#5a0000] transition-all"
                >
                  Confirm & Add to Cart
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductPage;
