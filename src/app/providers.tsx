"use client";

import { LoadingProvider } from "@/context/LoadingContext";
import { LanguageProvider } from "@/context/LanguageContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <LoadingProvider>{children}</LoadingProvider>
    </LanguageProvider>
  );
}
