"use client";

import { LoadingProvider } from "@/context/LoadingContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { AiProvider } from "@/context/AiContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <LoadingProvider>
        <AiProvider>
          {children}
        </AiProvider>
      </LoadingProvider>
    </LanguageProvider>
  );
}
