"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxBandProps {
  /** バンドの高さ */
  height?: string;
  /** 背景のstyle（backgroundImageなど） */
  bgStyle?: React.CSSProperties;
  /** オーバーレイのstyle */
  overlayStyle?: React.CSSProperties;
  children?: React.ReactNode;
  className?: string;
}

export default function ParallaxBand({
  height = "240px",
  bgStyle,
  overlayStyle,
  children,
  className = "",
}: ParallaxBandProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // スクロールに連動して背景を -12% → +12% 移動（パララックス）
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ height }}
    >
      {/* パララックス背景 */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY, scale: 1.25 }}
      >
        <div className="absolute inset-0" style={bgStyle} />
      </motion.div>

      {/* オーバーレイ */}
      {overlayStyle && (
        <div className="absolute inset-0" style={overlayStyle} />
      )}

      {/* コンテンツ */}
      <div className="relative h-full">{children}</div>
    </div>
  );
}
