"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="floating-cta"
        >
          <Link
            href="/join"
            className="flex items-center gap-2 px-5 py-3 bg-[#C41E3A] text-white text-sm font-bold tracking-widest shadow-2xl hover:bg-[#A01530] transition-colors duration-200"
          >
            <span>入部案内</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
