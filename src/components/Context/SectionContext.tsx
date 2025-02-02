// app/SectionContext.tsx
"use client";
import React, { createContext, useContext, useState } from "react";

// Unser Typ für eine Section
export type SectionInfo = {
  ref: React.RefObject<HTMLElement>;
  label: string;
};

// Der Kontext liefert:
// - ein Array sections
// - eine Funktion setSections, um das Array zu überschreiben
type SectionsContextValue = {
  sections: SectionInfo[];
  setSections: (sections: SectionInfo[]) => void;
};

const SectionsContext = createContext<SectionsContextValue>({
  sections: [],
  setSections: () => {},
});

// Custom Hook zum Zugriff auf den Context
export function useSections() {
  return useContext(SectionsContext);
}

// Provider-Komponente
export function SectionsProvider({ children }: { children: React.ReactNode }) {
  const [sections, setSections] = useState<SectionInfo[]>([]);

  const value: SectionsContextValue = {
    sections,
    setSections,
  };

  return (
    <SectionsContext.Provider value={value}>
      {children}
    </SectionsContext.Provider>
  );
}