"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const GALLERY_PHOTOS = [
  "/images/gallery/photo1.jpg",
  "/images/gallery/photo2.jpg",
  "/images/gallery/photo3.jpg",
  "/images/gallery/photo4.jpg",
];

export default function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    document.body.style.overflow = selected !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selected === null) return;
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowLeft")
        setSelected((p) => p !== null ? (p - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length : null);
      if (e.key === "ArrowRight")
        setSelected((p) => p !== null ? (p + 1) % GALLERY_PHOTOS.length : null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selected]);

  const prev = () => setSelected((p) => p !== null ? (p - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length : 0);
  const next = () => setSelected((p) => p !== null ? (p + 1) % GALLERY_PHOTOS.length : 0);

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {GALLERY_PHOTOS.map((src, i) => (
          <AnimatedSection key={src} delay={i * 0.08}>
            <div
              className="aspect-square rounded-xl overflow-hidden group card-lift relative cursor-pointer"
              onClick={() => setSelected(i)}
            >
              <Image
                src={src}
                alt={`活動写真 ${i + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#002B5C]/0 group-hover:bg-[#002B5C]/15 transition-colors duration-400 rounded-xl" />
            </div>
          </AnimatedSection>
        ))}
      </div>

      {mounted && createPortal(
        <AnimatePresence>
          {selected !== null && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setSelected(null)}
            >
              {/* 背景オーバーレイ */}
              <motion.div
                className="absolute inset-0 bg-black/85 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* モーダル本体 */}
              <motion.div
                className="relative z-10 max-w-5xl w-full"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={GALLERY_PHOTOS[selected]}
                  alt={`活動写真 ${selected + 1}`}
                  width={1400}
                  height={933}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-xl"
                />

                {/* 閉じるボタン */}
                <button
                  className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors duration-200"
                  onClick={() => setSelected(null)}
                  aria-label="閉じる"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* 前の写真 */}
                <button
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors duration-200"
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  aria-label="前の写真"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* 次の写真 */}
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors duration-200"
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  aria-label="次の写真"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* カウンター */}
                <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/55 text-xs tracking-[0.4em]"
                  style={{ fontFamily: "var(--font-cormorant)" }}>
                  {selected + 1} / {GALLERY_PHOTOS.length}
                </p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
