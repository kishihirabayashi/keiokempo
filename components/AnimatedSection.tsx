"use client";

import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** スライド量 (px) */
  distance?: number;
  once?: boolean;
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  distance = 80,
  once = true,
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once, amount: 0.08, margin: "-60px 0px" }}
      transition={{
        type: "spring",
        damping: 28,
        stiffness: 90,
        delay,
        mass: 0.8,
      }}
    >
      {children}
    </motion.div>
  );
}
