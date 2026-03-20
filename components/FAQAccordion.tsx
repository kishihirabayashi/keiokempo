"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#D4C9B8] last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-3">
          <span
            className="shrink-0 text-[#C41E3A] font-bold text-sm mt-0.5"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Q
          </span>
          <span
            className="text-[#002B5C] font-bold group-hover:text-[#C41E3A] transition-colors duration-300"
            style={{ fontFamily: "var(--font-noto-serif-jp)", letterSpacing: "0.03em", lineHeight: 1.5 }}
          >
            {item.question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="shrink-0 w-6 h-6 flex items-center justify-center text-[#C41E3A]"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 120 }}
            className="overflow-hidden"
          >
            <div className="pb-5 pl-7 pr-10">
              <div className="flex items-start gap-3">
                <span
                  className="shrink-0 text-[#002B5C] font-bold text-sm mt-0.5"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  A
                </span>
                <p
                  className="text-[#2D3748] text-sm"
                  style={{ fontFamily: "var(--font-noto-sans-jp)", lineHeight: 1.95 }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      className="bg-[#FAF7F0] rounded-xl border border-[#D4C9B8] divide-y divide-[#D4C9B8] px-6"
      style={{ boxShadow: "0 2px 8px rgba(27,42,74,0.05)" }}
    >
      {items.map((item, i) => (
        <FAQAccordionItem
          key={i}
          item={item}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
