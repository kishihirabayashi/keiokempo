interface SectionHeadingProps {
  en: string;
  jp: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: "text-2xl",
  md: "text-3xl sm:text-4xl",
  lg: "text-4xl sm:text-5xl lg:text-6xl",
};

export default function SectionHeading({
  en,
  jp,
  size = "md",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading ${className}`}>
      <span className="label">{en}</span>
      <h2 className={`${sizeMap[size]} font-black`}>{jp}</h2>
    </div>
  );
}
