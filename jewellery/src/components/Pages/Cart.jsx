import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineTrash,
  HiMinus,
  HiPlus,
  HiArrowNarrowLeft,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("calvi_cart")) || [];
    setCartItems(items);
  }, []);

  const updateQuantity = (id, change) => {
    const updated = cartItems.map((item) => {
      if (item.id === id) {
        const newQty = Math.max(1, (item.quantity || 1) + change);
        return { ...item, quantity: newQty };
      }
      return item;
    });
    saveCart(updated);
  };

  const removeItem = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    saveCart(updated);
  };

  const saveCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem("calvi_cart", JSON.stringify(newCart));
    // Trigger Navbar update
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0,
  );

  return (
    <div className="min-h-screen bg-[#fdfbf7] pt-32 pb-20 font-serif">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <Link
            to="/products"
            className="text-[#700000] hover:translate-x-[-5px] transition-transform"
          >
            <HiArrowNarrowLeft size={24} />
          </Link>
          <h1 className="text-4xl text-[#5a0000] font-medium tracking-tight">
            Your Royal Cart
          </h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed border-[#b08d57]/30">
            <p className="text-[#700000] text-xl italic mb-6">
              Your cart is as empty as a velvet box without a diamond.
            </p>
            <Link
              to="/products"
              className="bg-[#700000] text-[#d4af37] px-10 py-3 uppercase tracking-widest text-sm"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* List of Items */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col sm:flex-row items-center bg-white border border-[#b08d57]/20 p-4 gap-6 shadow-sm"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-24 h-24 object-cover border border-[#b08d57]/30"
                    />
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-[#5a0000] text-lg font-bold uppercase tracking-wide">
                        {item.name}
                      </h3>
                      <p className="text-[#b08d57] font-sans font-bold">
                        ₹{item.price.toLocaleString()}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center border border-[#700000]/20">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-2 hover:bg-[#700000] hover:text-white transition-colors"
                      >
                        <HiMinus />
                      </button>
                      <span className="px-4 font-sans font-bold">
                        {item.quantity || 1}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-2 hover:bg-[#700000] hover:text-white transition-colors"
                      >
                        <HiPlus />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-[#700000] hover:scale-110 transition-transform p-2"
                    >
                      <HiOutlineTrash size={22} />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <div className="bg-[#700000] text-[#d4af37] p-8 h-fit shadow-2xl sticky top-32">
              <h2 className="text-2xl border-b border-[#b08d57]/50 pb-4 mb-6 uppercase tracking-widest">
                Summary
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between font-sans">
                  <span>Subtotal</span>
                  <span>₹{totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-sans">
                  <span>Shipping</span>
                  <span className="uppercase text-[10px] tracking-tighter">
                    Complimentary
                  </span>
                </div>
                <div className="border-t border-[#b08d57]/50 pt-4 flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>₹{totalPrice.toLocaleString()}</span>
                </div>
              </div>
              <button className="w-full bg-[#b08d57] text-[#700000] py-4 font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors shadow-lg">
                Proceed to Checkout
              </button>
              <p className="text-[10px] text-center mt-4 opacity-70 italic tracking-wider">
                Secure Royal Transaction
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
