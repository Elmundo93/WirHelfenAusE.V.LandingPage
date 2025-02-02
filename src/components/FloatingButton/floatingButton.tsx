// app/FloatingNavigator.tsx
"use client";

import { useEffect, useState } from "react";
import { useSections } from "../Context/SectionContext"; // import Context-Hook

export default function FloatingNavigator() {
  const { sections } = useSections(); // Hole aktuelle Sections aus dem Kontext
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Intersection Observer einrichten:
    // Er soll auf ALLE sections aus dem Context lauschen.

    if (!sections || sections.length === 0) return;

    // Callback-Funktion
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sections.findIndex((sect) => sect.ref.current === entry.target);
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0.4, // z.B. 40% sichtbar
    });

    // Beobachte alle Section-Refs
    sections.forEach((s) => {
      if (s.ref.current) observer.observe(s.ref.current);
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [sections]);

  function handleClick() {
    if (sections.length === 0) return;
    if (activeIndex < sections.length - 1) {
      sections[activeIndex + 1].ref.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("Ende erreicht!");
    }
  }

  // Wenn du möchtest, kannst du noch den Button-Text anpassen:
  const buttonText = activeIndex < sections.length - 1 ? "Weiter" : "Fertig";

  // Falls du z. B. auf Seiten ohne Sections den Button nicht anzeigen willst:
  if (sections.length === 0) {
    return null;
  }

  return (
    <button
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 9999,
      }}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
}