"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AiContextProps {
  isAiModalOpen: boolean;
  openAiModal: () => void;
  closeAiModal: () => void;
}

const AiContext = createContext<AiContextProps | undefined>(undefined);

export const AiProvider = ({ children }: { children: ReactNode }) => {
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  const openAiModal = () => setIsAiModalOpen(true);
  const closeAiModal = () => setIsAiModalOpen(false);

  return (
    <AiContext.Provider value={{ isAiModalOpen, openAiModal, closeAiModal }}>
      {children}
    </AiContext.Provider>
  );
};

export const useAi = () => {
  const context = useContext(AiContext);
  if (!context) {
    throw new Error("useAi must be used within an AiProvider");
  }
  return context;
};
