import type { TournamentResult } from "@/lib/getResults";

const resultBadgeColors: Record<string, string> = {
  "優勝": "bg-[#C41E3A]/10 text-[#C41E3A] border-[#C41E3A]/30",
  "準優勝": "bg-[#002B5C]/10 text-[#002B5C] border-[#002B5C]/25",
  "3位": "bg-[#DDD4C2] text-[#6B7A99] border-[#C9BEAC]",
  "ベスト8": "bg-[#EDE7D9] text-[#6B7A99] border-[#D4C9B8]",
  "ベスト16": "bg-[#F5F0E6] text-[#A0AAB8] border-[#D4C9B8]",
};

function getResultBadge(result: string) {
  for (const key of Object.keys(resultBadgeColors)) {
    if (result.includes(key)) {
      return resultBadgeColors[key];
    }
  }
  return "bg-[#EDE7D9] text-[#6B7A99] border-[#D4C9B8]";
}

interface ResultTableProps {
  results: TournamentResult[];
  year?: number;
}

export default function ResultTable({ results, year }: ResultTableProps) {
  const filtered = year ? results.filter((r) => r.year === year) : results;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b-[3px]" style={{ borderColor: "rgba(196,30,58,0.15)" }}>
            <th
              className="text-left py-3 px-4 text-[#C41E3A] font-medium text-xs tracking-widest"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              YEAR
            </th>
            <th
              className="text-left py-3 px-4 text-[#C41E3A] font-medium text-xs tracking-widest"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              TOURNAMENT
            </th>
            <th
              className="text-left py-3 px-4 text-[#C41E3A] font-medium text-xs tracking-widest"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              CATEGORY
            </th>
            <th
              className="text-left py-3 px-4 text-[#C41E3A] font-medium text-xs tracking-widest"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              RESULT
            </th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((r, i) => (
            <tr
              key={i}
              className="border-b border-[#D4C9B8] hover:bg-[#EDE7D9] transition-colors duration-300"
            >
              <td
                className="py-4 px-4 text-[#6B7A99] tabular-nums"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {r.year}
              </td>
              <td
                className="py-4 px-4 text-[#2D3748]"
                style={{ fontFamily: "var(--font-noto-sans-jp)", lineHeight: 1.6 }}
              >
                {r.tournament}
              </td>
              <td
                className="py-4 px-4 text-[#6B7A99]"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}
              >
                {r.category}
              </td>
              <td className="py-4 px-4">
                <span
                  className={`inline-block px-3 py-0.5 text-xs border rounded-full ${getResultBadge(r.result)}`}
                  style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                >
                  {r.result}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
