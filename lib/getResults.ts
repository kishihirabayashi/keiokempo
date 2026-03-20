import fs from "fs";
import path from "path";

export interface TournamentResult {
  year: number;
  tournament: string;
  category: "団体戦" | "個人戦";
  result: string;
  details?: string;
}

const dataPath = path.join(process.cwd(), "content/results/results.json");

export function getAllResults(): TournamentResult[] {
  if (!fs.existsSync(dataPath)) return [];
  const raw = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(raw) as TournamentResult[];
}

export function getResultsByYear(year: number): TournamentResult[] {
  return getAllResults().filter((r) => r.year === year);
}

export function getAvailableYears(): number[] {
  const all = getAllResults();
  return [...new Set(all.map((r) => r.year))].sort((a, b) => b - a);
}
