import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "戦績",
  description:
    "慶應義塾大学體育會拳法部の戦績一覧。東日本学生拳法選手権・全日本学生拳法選手権・早慶戦など主要大会の結果を掲載。",
  alternates: { canonical: "https://keiokempo.com/results" },
  openGraph: {
    title: "戦績 | 慶應義塾大学體育會拳法部",
    description: "慶應拳法部の戦績一覧。東日本・全日本学生選手権など主要大会の結果を掲載。",
    url: "https://keiokempo.com/results",
  },
};

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
