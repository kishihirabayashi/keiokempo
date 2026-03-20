import type { TournamentResult } from "@/lib/getResults";

const resultBadgeColors: Record<string, string> = {
  "優勝": "bg-[#C41E3A]/10 text-[#C41E3A] border-[#C41E3A]/30",
  "準優勝": "bg-[#002B5C]/10 text-[#002B5C] border-[#002B5C]/25",
  "3位": "bg-[#E8DFD0] text-[#6B7A99] border-[#DDD8CF]",
  "ベスト8": "bg-[#F2F0EB] text-[#6B7A99] border-[#DDD8CF]",
  "ベスト16": "bg-[#FAFAF7] text-[#A0AAB8] border-[#DDD8CF]",
};

function getResultBadge(result: string) {
  for (const key of Object.keys(resultBadgeColors)) {
    if (result.includes(key)) {
      return resultBadgeColors[key];
    }
  }
  return "bg-[#F2F0EB] text-[#6B7A99] border-[#DDD8CF]";
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
          <tr className="border-b-[3px]" style={{ borderColor: 'rgba(196,30,58,0.15)' }}>
            <th
              className="text-left py-3 px-4 text-[#C41E3A] font-normal text-xs tracking-widest"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              YEAR
            </th>
            <th
              className="text-left py-3 px-4 text-[#C41E3A] font-normal text-xs tracking-widest"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              TOURNAMENT
            </th>
            <th
              className="text-left py-3 px-4 text-[#C41E3A] font-normal text-xs tracking-widest"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              CATEGORY
            </th>
            <th
              className="text-left py-3 px-4 text-[#C41E3A] font-normal text-xs tracking-widest"
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
              className="border-b border-[#E8DFD0] hover:bg-[#F2F0EB] transition-colors duration-150"
            >
              <td className="py-4 px-4 text-[#6B7A99] tabular-nums"
                style={{ fontFamily: "var(--font-cormorant)" }}>
                {r.year}
              </td>
              <td className="py-4 px-4 text-[#1B2A4A]"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
                {r.tournament}
              </td>
              <td className="py-4 px-4 text-[#6B7A99]"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
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
