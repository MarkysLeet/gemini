import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grozan Studio",
  description: "Создаем не просто сайты, а впечатления.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} bg-black text-white`}>
        <CustomCursor />
        <Preloader />
        <Header />
        <main className="pt-24 pb-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
