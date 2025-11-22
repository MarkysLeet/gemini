import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import AuroraBackground from "@/components/AuroraBackground";
import BackToTop from "@/components/BackToTop";
import AiModal from "@/components/AiModal";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grozan Studio | Креативная Веб-студия",
  description: "Создаем не просто сайты, а впечатления. Разработка современных веб-сайтов, уникальный дизайн и цифровые решения для вашего бизнеса.",
  openGraph: {
    title: "Grozan Studio | Креативная Веб-студия",
    description: "Создаем не просто сайты, а впечатления. Разработка современных веб-сайтов, уникальный дизайн.",
    url: "https://grozan.studio",
    siteName: "Grozan Studio",
    locale: "ru_RU",
    type: "website",
  },
  keywords: ["веб-студия", "разработка сайтов", "дизайн сайтов", "Grozan Studio", "креативная студия"],
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}>
        <Providers>
          <AuroraBackground />
          <CustomCursor />
          <Preloader />
          <AiModal />
          <Header />
          <main className="pt-24 pb-24 flex-grow">{children}</main>
          <Footer />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
