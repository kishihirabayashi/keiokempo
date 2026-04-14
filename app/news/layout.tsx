import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ニュース",
  description:
    "慶應義塾大学體育會拳法部の最新ニュース・活動報告。試合結果、合宿レポート、新歓情報などを随時更新。",
  alternates: { canonical: "https://keiokempo.com/news" },
  openGraph: {
    title: "ニュース | 慶應義塾大学體育會拳法部",
    description: "慶應拳法部の最新ニュース・活動報告。試合結果、合宿レポート、新歓情報などを随時更新。",
    url: "https://keiokempo.com/news",
  },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
