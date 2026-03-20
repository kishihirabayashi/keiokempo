"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const bgY       = useTransform(scrollY, [0, 900], ["0%", "30%"]);
  const textY     = useTransform(scrollY, [0, 900], ["0%", "-10%"]);
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden clip-diagonal"
    >
      {/* ── 背景（パララックス） ── */}
      <motion.div
        className="absolute inset-0 scale-[1.2] origin-center"
        style={{ y: bgY }}
      >
        {/* 明るめのプレースホルダー背景 */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('/images/hero/hero.jpg'), linear-gradient(160deg, #C8D8E8 0%, #E0E8F0 40%, #B8CCD8 100%)",
            backgroundSize: "cover",
            backgroundPosition: "center 35%",
          }}
        />
        {/* 紺オーバーレイ：暗すぎず品格ある */}
        <div className="absolute inset-0" style={{ background: 'rgba(0,43,92,0.72)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001830]/60 via-transparent to-[#001830]/20" />
      </motion.div>

      {/* ── トップ3色バー（紺・赤・紺） ── */}
      <div
        className="absolute top-0 left-0 right-0 h-[10px] z-20"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(to right, #002B5C 0%, #002B5C 18%, #C41E3A 35%, #C41E3A 65%, #002B5C 82%, #002B5C 100%)',
          boxShadow: '0 2px 14px rgba(196,30,58,0.45)',
        }}
      />

      {/* ── メインコンテンツ ── */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6"
      >
        {/* KEIO ラベル */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="tracking-[0.55em] text-white/70 text-xs sm:text-sm mb-8 font-light"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          KEIO UNIVERSITY ATHLETIC ASSOCIATION
        </motion.p>

        {/* キャッチコピー */}
        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.86 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.05, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative overflow-hidden inline-block"
        >
          <h1
            className="font-black leading-[1.0] tracking-tight text-white"
            style={{
              fontFamily: "var(--font-noto-serif-jp)",
              fontSize: "clamp(3.8rem, 11.5vw, 10rem)",
              fontWeight: 900,
            }}
          >
            共に戦う、4年間。
          </h1>
          {/* シマー光線 */}
          <div className="shimmer-sweep" aria-hidden="true" />
        </motion.div>

        {/* サブコピー */}
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.9 }}
          className="text-white/75 text-sm sm:text-base leading-relaxed mt-8 mb-12 max-w-lg"
          style={{ fontFamily: "var(--font-noto-sans-jp)", fontWeight: 400 }}
        >
          慶應義塾體育會拳法部 — 日本拳法で繋がる仲間と、本気の大学生活を。
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 1.15 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Link
            href="/join"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#C41E3A] text-white font-black text-sm tracking-[0.22em] overflow-hidden hover:bg-[#A01530] transition-colors duration-300 rounded-md"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            <span className="relative z-10">まずは道場へ。</span>
            <svg className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/12 to-transparent transition-transform duration-700 ease-in-out" aria-hidden="true" />
          </Link>
          <Link
            href="/about-kempo"
            className="inline-flex items-center gap-2 px-8 py-5 bg-white/15 backdrop-blur-sm text-white font-bold text-sm tracking-[0.2em] hover:bg-white/25 transition-all duration-300 rounded-md border border-white/25"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            日本拳法とは
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
        <p
          className="text-white/40 text-[0.6rem] tracking-[0.5em] uppercase"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Scroll
        </p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <div className="w-[2px] h-10 bg-gradient-to-b from-white/80 to-transparent" />
          <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
