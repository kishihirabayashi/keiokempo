import fs from "fs";
import path from "path";

export interface Member {
  name: string;
  grade: string;
  faculty: string;
  role?: string;
  origin?: string;
  skill?: string;
  rank?: string;
  photo?: string;
}

const dataPath = path.join(process.cwd(), "content/members/members.json");

export function getAllMembers(): Member[] {
  if (!fs.existsSync(dataPath)) return [];
  const raw = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(raw) as Member[];
}
