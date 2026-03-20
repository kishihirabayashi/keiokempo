interface SectionHeadingProps {
  en: string;
  jp: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  /** 背景ウォーターマークを非表示にする */
  noWatermark?: boolean;
}

const sizeMap = {
  sm: "text-2xl",
  md: "text-3xl sm:text-4xl",
  lg: "text-4xl sm:text-5xl lg:text-6xl",
};

const watermarkSizeMap = {
  sm: "clamp(3rem, 6vw, 5rem)",
  md: "clamp(4rem, 8vw, 7rem)",
  lg: "clamp(5rem, 10vw, 9rem)",
};

export default function SectionHeading({
  en,
  jp,
  size = "md",
  className = "",
  noWatermark = false,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading ${className}`}>
      {/* 巨大背景ウォーターマーク */}
      {!noWatermark && (
        <span
          className="bg-watermark"
          aria-hidden="true"
          style={{ fontSize: watermarkSizeMap[size] }}
        >
          {en.toUpperCase()}
        </span>
      )}
      <span className="label">{en}</span>
      <h2 className={`${sizeMap[size]} font-black`}>{jp}</h2>
    </div>
  );
}
