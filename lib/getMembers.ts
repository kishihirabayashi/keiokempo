import fs from "fs";
import path from "path";

export interface Member {
  name: string;
  grade: number;
  faculty: string;
  role?: string;
  origin?: string;
  comment?: string;
  photo?: string;
  type?: "player" | "manager" | "staff";
}

const dataPath = path.join(process.cwd(), "content/members/members.json");

export function getAllMembers(): Member[] {
  if (!fs.existsSync(dataPath)) return [];
  const raw = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(raw) as Member[];
}

export function getMembersByGrade(grade: number): Member[] {
  return getAllMembers().filter((m) => m.grade === grade);
}
