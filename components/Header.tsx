"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/about-kempo", label: "日本拳法とは" },
  { href: "/about", label: "部の紹介" },
  { href: "/members", label: "部員紹介" },
  { href: "/results", label: "戦績" },
  { href: "/news", label: "ニュース" },
  { href: "/join", label: "入部案内" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled
            ? "shadow-sm"
            : ""
        }`}
        style={{
          background: isScrolled ? "rgba(245,240,230,0.96)" : "rgba(245,240,230,0.88)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "10px solid transparent",
          borderImage: "linear-gradient(to right, #002B5C 0%, #002B5C 18%, #C41E3A 35%, #C41E3A 65%, #002B5C 82%, #002B5C 100%) 1",
          boxShadow: isScrolled ? "0 2px 14px rgba(27,42,74,0.10)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* ロゴ */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-[5px] h-12 shrink-0" style={{ background: 'linear-gradient(to bottom, #C41E3A 0%, #C41E3A 60%, #7A1020 100%)' }} />
              <div className="flex flex-col leading-tight">
                <span
                  className="text-[#6B7A99] text-xs tracking-widest"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  KEIO UNIVERSITY
                </span>
                <span
                  className="text-[#002B5C] font-bold text-sm sm:text-base tracking-wide"
                  style={{ fontFamily: "var(--font-noto-serif-jp)", letterSpacing: "0.04em" }}
                >
                  慶應義塾體育會拳法部
                </span>
              </div>
            </Link>

            {/* デスクトップナビ */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#1B2A4A] hover:text-[#C41E3A] text-sm tracking-wider transition-colors duration-200 keio-underline"
                  style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/join"
                className="group relative ml-4 px-6 py-2.5 bg-[#C41E3A] text-white text-sm font-bold tracking-wider overflow-hidden rounded-lg transition-colors duration-200"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-[#A01530] transition-transform duration-400 ease-out" />
                <span className="relative z-10">入部希望</span>
              </Link>
            </nav>

            {/* モバイルハンバーガー */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
              aria-label="メニューを開く"
            >
              <span className={`block w-6 h-0.5 bg-[#1B2A4A] transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-[#1B2A4A] transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-[#1B2A4A] transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* モバイルメニュー */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 100 }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ background: "#F5F0E6" }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-[6px]" style={{ background: 'linear-gradient(to bottom, #C41E3A 0%, #C41E3A 50%, rgba(196,30,58,0.2) 85%, transparent 100%)' }} />

            <div className="flex-1 flex flex-col justify-center px-10 pt-20">
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 100, delay: 0.05 + i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-2xl font-bold text-[#002B5C] hover:text-[#C41E3A] transition-colors duration-200"
                      style={{ fontFamily: "var(--font-noto-serif-jp)", letterSpacing: "0.04em" }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-10"
              >
                <Link
                  href="/join"
                  onClick={() => setIsMenuOpen(false)}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#C41E3A] text-white text-lg font-bold tracking-widest overflow-hidden rounded-lg"
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-[#A01530] transition-transform duration-400 ease-out" />
                  <span className="relative z-10">入部希望はこちら</span>
                </Link>
              </motion.div>
            </div>
            <div className="p-8 border-t-[2px] border-[#C41E3A]/15">
              <p className="text-[#6B7A99] text-xs tracking-wider">
                © 慶應義塾體育會拳法部
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
