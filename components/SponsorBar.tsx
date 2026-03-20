import Link from "next/link";

const sponsors = [
  { name: "スポンサー企業A", tier: "platinum", url: "#" },
  { name: "スポンサー企業B", tier: "gold", url: "#" },
  { name: "スポンサー企業C", tier: "gold", url: "#" },
  { name: "スポンサー企業D", tier: "silver", url: "#" },
  { name: "スポンサー企業E", tier: "silver", url: "#" },
];

const tierStyles: Record<string, string> = {
  platinum: "border-[#C8C0B0]/40 text-[#C8C0B0]",
  gold: "border-[#B8860B]/40 text-[#B8860B]",
  silver: "border-[#666] text-[#888]",
};

export default function SponsorBar() {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {sponsors.map((s, i) => (
        <a
          key={i}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center px-8 py-4 border ${tierStyles[s.tier]} bg-[#1A1A1A] hover:bg-[#222] transition-colors duration-200 min-w-[160px]`}
        >
          <span className="text-xs tracking-wider">{s.name}</span>
        </a>
      ))}
      <Link
        href="/partners"
        className="flex items-center justify-center px-8 py-4 border border-dashed border-[#333] text-[#555] hover:text-[#B8860B] hover:border-[#B8860B]/40 transition-all duration-200 min-w-[160px] text-xs tracking-wider"
      >
        ＋ 協賛のご案内
      </Link>
    </div>
  );
}
