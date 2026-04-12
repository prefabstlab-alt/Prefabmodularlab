import type { Metadata } from "next";
import { Montserrat, Inter, Noto_Sans_KR } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const notoKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-kr",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PREFAB Structure Lab | 아주대학교 프리팹 건축구조연구실",
  description:
    "아주대학교 프리팹 건축구조연구실 공식 웹사이트. 모듈러 건축, 강구조, 내진공학 연구 및 교육.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${montserrat.variable} ${inter.variable} ${notoKr.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-white font-sans text-slate-800 antialiased">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
