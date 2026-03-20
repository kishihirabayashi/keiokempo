"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const bgY       = useTransform(scrollY, [0, 900], ["0%", "28%"]);
  const textY     = useTransform(scrollY, [0, 900], ["0%", "-12%"]);
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden clip-diagonal"
    >
      {/* ── 背景（パララックス + シネマティックズーム） ── */}
      <motion.div
        className="absolute inset-0 origin-center"
        style={{ y: bgY }}
      >
        <div
          className="absolute inset-0 hero-zoom-bg"
          style={{
            backgroundImage:
              "url('/images/hero/hero.jpg'), linear-gradient(160deg, #C8D8E8 0%, #E0E8F0 40%, #B8CCD8 100%)",
            backgroundSize: "cover",
            backgroundPosition: "center 35%",
          }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(0,12,35,0.84)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000C23]/75 via-transparent to-[#000C23]/30" />
      </motion.div>

      {/* ── トップ3色バー ── */}
      <div
        className="absolute top-0 left-0 right-0 h-[10px] z-20"
        aria-hidden="true"
        style={{
          background: "linear-gradient(to right, #002B5C 0%, #002B5C 18%, #C41E3A 35%, #C41E3A 65%, #002B5C 82%, #002B5C 100%)",
          boxShadow: "0 2px 14px rgba(196,30,58,0.45)",
        }}
      />

      {/* ── メインコンテンツ ── */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        {/* KEIO ラベル */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 30, stiffness: 100, delay: 0.3 }}
          className="tracking-[0.6em] text-white/55 text-xs sm:text-sm mb-10 font-medium"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          KEIO UNIVERSITY ATHLETIC ASSOCIATION
        </motion.p>

        {/* キャッチコピー（金色・グロー無し・最初から全文表示） */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="relative inline-block"
        >
          <h1
            className="font-black leading-[1.05] tracking-wide"
            style={{
              fontFamily: "var(--font-noto-serif-jp)",
              fontSize: "clamp(3.8rem, 14vw, 13rem)",
              fontWeight: 900,
              color: "#B8860B",
              letterSpacing: "0.04em",
            }}
          >
            腕は強し、心は優し。
          </h1>
        </motion.div>

        {/* サブコピー */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 30, stiffness: 80, delay: 0.9 }}
          className="text-white/70 text-sm sm:text-base leading-relaxed mt-8 mb-12 max-w-lg"
          style={{ fontFamily: "var(--font-noto-sans-jp)", fontWeight: 400, lineHeight: 1.85 }}
        >
          慶應義塾體育會拳法部 — 日本拳法で繋がる仲間と、本気の大学生活を。
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 30, stiffness: 80, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Link
            href="/join"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#C41E3A] text-white font-bold text-sm tracking-[0.18em] overflow-hidden rounded-lg"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-[#A01530] transition-transform duration-500 ease-out" aria-hidden="true" />
            <span className="relative z-10">まずは道場へ。</span>
            <svg className="relative z-10 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/about-kempo"
            className="group relative inline-flex items-center gap-2 px-8 py-4 overflow-hidden text-white font-medium text-sm tracking-[0.18em] rounded-lg border border-white/30"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            <span className="absolute inset-0 bg-white/12 -translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out" aria-hidden="true" />
            <span className="relative z-10">日本拳法とは</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* ── スクロール矢印 ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.8 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <p className="text-white/35 text-[0.6rem] tracking-[0.55em] uppercase" style={{ fontFamily: "var(--font-cormorant)" }}>
          Scroll
        </p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <div className="w-[2px] h-10 bg-gradient-to-b from-white/70 to-transparent" />
          <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
